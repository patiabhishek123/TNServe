# 🖼️ TNServe: YouTube Thumbnail Optimizer

**TNServe** is an automated service designed for content creators and power users to bridge the gap between "standard" content and viral visuals. It fetches the latest thumbnails from your subscribed YouTube channels, analyzes them, and uses AI to suggest high-CTR (Click-Through Rate) alternatives.

---

## 🚀 Overview

The YouTube algorithm relies heavily on first impressions. **TNServe** helps you study what your favorite creators are doing and provides a "creative sandbox" to improve upon existing designs. By fetching live data via the YouTube Data API and processing it through AI, TNServe identifies weaknesses in composition, lighting, and text placement.

### 🛠️ How it Works
1.  **Fetch:** Connects to your YouTube account to pull thumbnails from recent uploads in your subscription feed.
2.  **Analyze:** Evaluates the visual hierarchy, color contrast, and "Curiosity Gap" of the current thumbnail.
3.  **Suggest:** Generates text-based design prompts or AI-rendered variations that follow modern viral trends (e.g., the "Three-Element Rule").

---

## ✨ Key Features

* **Sub Feed Integration:** Automatically syncs with your YouTube subscriptions to keep your dashboard updated with the latest trends.
* **Heatmap Analysis:** Visualizes where a viewer's eye is likely to land first on any given thumbnail.
* **CTR Prediction:** Uses a trained model to estimate the effectiveness of a thumbnail compared to niche competitors.
* **AI Suggestion Engine:** Powered by **Google Gemini**, providing actionable tips like *"Increase facial contrast"* or *"Reduce text to 3 bold words."*
* **A/B Comparison:** View the original thumbnail side-by-side with the AI-suggested improvement.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Lucide Icons |
| **Backend**  | Node.js ,Express , TypeScript
| **API Integration** | YouTube Data API v3 (OAuth 2.0) |
| **AI Intelligence** | Google Gemini 1.5 Flash (Analysis & Suggestions) |
| **Image Processing** | Sharp / Canvas (for basic edits & heatmaps) |
| **Storage** | Supabase (for caching thumbnails and user preferences) |

---

## ⚙️ Installation & Setup

### 1. Prerequisites
* Node.js 18+
* Google Cloud Project (with **YouTube Data API v3** enabled)
* Google AI Studio API Key (for **Gemini**)

### 2. Clone and Install
```bash
git clone [https://github.com/yourusername/TNServe.git](https://github.com/yourusername/TNServe.git)
cd TNServe
npm install
