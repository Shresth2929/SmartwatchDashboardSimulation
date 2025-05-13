# 🧠 Smartwatch Dashboard Simulator

An interactive simulation of a smartwatch dashboard that replicates real-time fitness tracking using animated charts, system logs, and sensor control. It includes **mock integration with Google Fit** and a **dynamic battery level system** that mimics a real-world smartwatch experience.

## 🎯 Project Objective

To create a **web-based smartwatch simulation interface** that:
- Animates health metrics in real-time
- Allows users to toggle sensors like a smartwatch would
- Demonstrates API integration (Google Fit)
- Simulates system events such as battery drainage and warnings
- Maintains a clean and responsive UI

---

## 🛠️ Built With

- **HTML5** + **CSS3** (Tailwind CSS)
- **JavaScript (Vanilla)**
- **Chart.js** – for data visualizations
- **Font Awesome** – for UI icons
- **Google Fit API (mocked or integrated)**

---

## 🔧 Key Features

| Feature | Description |
|--------|-------------|
| 🔄 **Real-time Chart Animation** | Smooth, auto-updating line charts for Heart Rate, Step Count, and Temperature |
| 🎛️ **Sensor Toggles** | Enable or disable individual sensors (like in real wearables) |
| 🔋 **Battery Simulator** | Battery drains over time with alerts at 20%, 10%, 5%, and 0% |
| ⌚ **Control Panel** | `Start`, `Stop`, `Reset`, `Sync with Fit`, `Fetch` Google Fit data |
| 📜 **System Logs** | Timestamped logs of all major actions and sensor events |
| ☁️ **Google Fit API (Mock)** | Simulates fetching of today's step data |

---

## 🖥️ Live Demo

> _Coming soon!_ Deploy this project via GitHub Pages or Vercel.

---

## 📂 Folder Structure

```
📦 smartwatch-dashboard
 ┣ 📄 index.html
 ┣ 📄 script.js
 ┣ 📄 style.css
 ┣ 📄 README.md
```

---

## 🚀 Getting Started

To get a local copy up and running:

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- (Optional) Google Fit API credentials for real integration

### Run Locally

```bash
git clone https://github.com/your-username/smartwatch-dashboard.git
cd smartwatch-dashboard
```

Then open `index.html` in your browser.

---

## 🔗 API Usage (Optional)

For full Google Fit API integration:
1. Set up OAuth consent screen and credentials in [Google Cloud Console](https://console.cloud.google.com/).
2. Replace the mock function `fetchTotalStepsForToday()` with actual API calls.
3. Handle user authentication and token refreshing securely.

---

## 🧠 Learning Outcomes

- DOM manipulation and dynamic UI rendering in JavaScript
- Real-time chart animation using Chart.js
- Simulating real-world systems like battery level management
- Conceptual understanding of working with 3rd-party APIs

---

## 📸 Screenshots

> Add screenshots or GIFs here for better visual appeal.

---

## ✍️ Author

- **[Your Name]** – _Frontend Developer & Tech Enthusiast_

---

## 📝 License

This project is licensed under the MIT License.
