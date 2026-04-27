# U.S. Citizenship Study Guide & U.S. Civics Quiz

A Progressive Web App (PWA) for studying the 128 USCIS civics questions from the 2025 U.S. Citizenship Naturalization Civics Test.

## Features

- **Practice Test** — 20 random questions with multiple choice answers; 12 correct is the 2025 passing target
- **Flashcards** — Review all 128 questions with a 3D card flip animation; mark cards as "Known" to track progress
- **Speed Round** — 60-second timed challenge with live scoring
- **Study by Category** — 7 topic areas with per-category flashcards or mini quiz
- **Offline support** — Full offline play via Service Worker caching
- **Install to Home Screen** — Works as a native-feeling app on iOS and Android
- **Progress tracking** — Known cards and best score saved to local storage
- **Encouraging design** — Patriotic navy/red/gold theme with confetti on passing, smooth animations throughout

## File Structure

```
civics-game/
├── index.html      ← The app UI and behavior
├── questions-2025.js ← 2025 USCIS question bank and California/current-answer updates
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
   - Drag and drop the app files: `index.html`, `questions-2025.js`, `manifest.json`, `sw.js`, `american-flag.png`, `icon-192.svg`, `icon-512.svg`
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

## Current and Location-Specific Answers

Some questions have answers that change based on current officeholders or the applicant's state/district. This California build currently includes:

- U.S. senators: Alex Padilla or Adam Schiff
- U.S. representative: Jimmy Panetta for northern San Luis Obispo County
- Speaker of the House: Mike Johnson
- President: Donald Trump
- Vice President: JD Vance
- Chief Justice: John Roberts
- California governor: Gavin Newsom
- California capital: Sacramento

These answers should be checked again near the interview date: **[USCIS test updates](https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates)**.

## Source Notes

- The 128-question bank comes from the USCIS 2025 civics test PDF in this folder.
- Current and California-specific answers were checked against official USCIS, U.S. House, Senate/member, White House, Supreme Court, and California government sources in April 2026.

## Offline Use

Once you've opened the app once while connected to the internet, the Service Worker will cache all files. After that, the app works completely offline — great for studying on the subway, in a waiting room, or anywhere without Wi-Fi.

## Privacy

Progress is stored in the browser first, then backed up to Firebase Firestore when an internet connection is available. No ads or analytics are enabled in this app.

## Firebase Progress Backup

This app is configured to back up Javier Garcia's progress to the Firebase project `civics-quiz-74e12` in the Firestore document `users/javier-garcia-rgci/progress/main`.

The code is shaped for a future multi-user version: today it uses `AUTH_MODE = 'single-user'` and one `CURRENT_USER`, but the Firestore path already follows a per-user structure.

Firestore must be enabled in Firebase Console. During setup, test mode is fine for quick testing, but security rules should be tightened before sharing the app publicly.

---

*Built with love for everyone working toward U.S. citizenship. Good luck on your test! 🇺🇸*
