<h1 align="center">Cyber Clock</h1>

<p align="center">
  A neon, cyber-style desk clock with time-aware messages and a distraction-free focus mode.<br>By AkihiroLabs.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-1E3A8A" alt="version 1.0.0">
  <img src="https://img.shields.io/badge/vanilla-JavaScript-00A8CC" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/no-dependencies-1E3A8A" alt="No dependencies">
</p>

---

## ✨ Features

- **Live clock** — hours, minutes and seconds with the full date
- **Time-aware messages** — a different motivational line for morning, afternoon, evening and night
- **Focus mode** — one click hides everything but the clock; press Esc to exit
- **Particle background** — animated canvas particles that resize with the window

## 🚀 Getting started

No build step is needed.

1. Download or clone this repository.
2. Open `index.html` in any modern browser.

Live: **https://akihirozayar.github.io/cyber-clock/**

## 📁 Project structure

```
cyber-clock/
├── index.html        # Page markup — links the CSS and JS
├── css/
│   └── style.css     # Styles
├── js/
│   ├── version.js    # APP_VERSION
│   └── app.js        # Clock, messages, focus mode, particles
├── CHANGELOG.md
└── README.md
```

## 🛠 Tech

- Vanilla JavaScript, HTML and CSS — no frameworks, no build tools
- Canvas API for the particle background

## 🔖 Versioning

This project uses [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`).

- The version lives in **`js/version.js`** (`APP_VERSION`).
- To release: bump the version, add an entry to [`CHANGELOG.md`](CHANGELOG.md), then create a GitHub Release tagged `vX.Y.Z`.

Current version: **v1.0.0** — see the [changelog](CHANGELOG.md).

## 💬 Community

Updates and feedback on the **AkihiroLabs Discord server**.

---

<p align="center">
  Built with 🦝 by <b>AkihiroLabs</b>
</p>
