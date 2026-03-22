# U.S. Civics Quiz 🇺🇸

A Progressive Web App (PWA) for studying all 100 USCIS civics questions for the U.S. Citizenship Naturalization Test.

## Features

- **Practice Test** — 10 random questions with multiple choice answers, just like the real interview
- **Flashcards** — Study all 100 Q&As with a beautiful 3D card flip animation; mark cards as "Known" to track progress
- **Speed Round** — 60-second timed challenge with live scoring
- **Study by Category** — 6 topic areas with per-category flashcards or mini quiz
- **Offline support** — Full offline play via Service Worker caching
- **Install to Home Screen** — Works as a native-feeling app on iOS and Android
- **Progress tracking** — Known cards and best score saved to local storage
- **Encouraging design** — Patriotic navy/red/gold theme with confetti on passing, smooth animations throughout

## File Structure

```
civics-game/
├── index.html      ← The entire app (single-file PWA)
├── manifest.json   ← PWA manifest for installability
├── sw.js           ← Service worker for offline caching
├── icon-192.svg    ← App icon (192×192)
├── icon-512.svg    ← App icon (512×512)
└── README.md       ← This file
```

## Deploy to GitHub Pages (Free Hosting)

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one

2. **Create a new repository**
   - Click the `+` button → "New repository"
   - Name it something like `civics-quiz`
   - Keep it **Public**
   - Click "Create repository"

3. **Upload all files**
   - Click "uploading an existing file" on the repository page
   - Drag and drop all 5 files: `index.html`, `manifest.json`, `sw.js`, `icon-192.svg`, `icon-512.svg`
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to **Settings** → **Pages** (left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Branch: **main** → Folder: **/ (root)** → Click **Save**
   - Wait 1–2 minutes for deployment

5. **Your app is live at:**
   ```
   https://[your-username].github.io/[repo-name]/
   ```

## Install on Your Phone

### iPhone / iPad (Safari)
1. Open your GitHub Pages URL in **Safari**
2. Tap the **Share** button (box with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** — the app icon appears on your home screen
5. Open it from home screen for full-screen, offline-capable experience

### Android (Chrome)
1. Open your GitHub Pages URL in **Chrome**
2. Tap the **three-dot menu** (⋮) in the top right
3. Tap **"Add to Home screen"** or **"Install app"**
4. Follow the prompt

## Variable Questions

Ten questions (#20, 23, 28, 29, 39, 40, 43, 44, 46, 47) have answers that change based on current officeholders or your specific state/district. In quiz and speed modes, these are displayed as free-point cards with a link to:

**[uscis.gov → Find Study Materials](https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test)**

Check this page regularly for the most current answers.

## Offline Use

Once you've opened the app once while connected to the internet, the Service Worker will cache all files. After that, the app works completely offline — great for studying on the subway, in a waiting room, or anywhere without Wi-Fi.

## Privacy

All data (known cards, best score) is stored exclusively in your browser's **localStorage** — nothing is sent to any server. No accounts, no tracking, no ads.

---

*Built with love for everyone working toward U.S. citizenship. Good luck on your test! 🇺🇸*
