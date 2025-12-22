import { ApiRouteConfig } from "motia";

export const config: ApiRouteConfig = {
  type: "api",
  name: "SubmitChannel",
  path: "/submit",
  method: "POST",
  emits: ["yt.submit"]
};

interface SubmitRequest {
  channel: string;
  email: string;
}

export const handler = async (
  req: any,
  { emit, logger, state }: any
) => {
  try {
    logger.info("Received submission request", { body: req.body });

    const { channel, email } = req.body as SubmitRequest;

    if (!email || !channel) {
      return {
        status: 400,
        body: { error: "Missing required field: channel and email" }
      };
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return {
        status: 400,
        body: { error: "Invalid email format" }
      };
    }

    const jobId = `job_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2)}`;

    await state.set(`job:${jobId}`, {
      jobId,
      channel,
      email,
      status: "queued",
      createdAt: new Date().toISOString()
    },{
    ttl: 60 * 60 * 24, // 24 hours (IMPORTANT)
  });

    logger.info("Job created", { jobId, channel, email });

    await emit({
      topic: "yt.submit",
      data: { jobId, channel, email }
    });

    return {
      status: 202,
      body: {
        success: true,
        jobId,
        message:
          "Your request has been queued. You will receive suggestions soon."
      }
    };
  } catch (error: any) {
    logger.info(error)
    logger.error("Error in submission handler", {
      error: error?.message,
      stack: error?.stack
    });

    return {
      status: 500,
      body: { error: "internal server error" }
    };
  }
};
