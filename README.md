# Live App

Expo Router prototype for a BIGO-like live streaming platform.

## Local Expo setup

1. Install Node.js and npm.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Expo:
   ```bash
   npx expo start
   ```
4. Open the project in Expo Go with the QR code, or press:
   - `a` for Android
   - `i` for iOS
   - `w` for web

## Expo Snack workflow

Use [snack.expo.dev](https://snack.expo.dev) for fast UI experiments, then move stable screens and interactions back into this local Expo project.

## Product architecture covered by the prototype

The app now reflects the full lesson roadmap for a live streaming platform:

- platform fundamentals and system architecture
- database, cache, storage, and queue layers
- auth, profiles, social graph, and live room creation
- realtime video, chat, discovery, and viewer experience
- gifts, wallet, creator earnings, and payments
- notifications, moderation, admin, security, testing, and scaling

## App routes

- `app/(auth)/` login and registration
- `app/(tabs)/` home, discover, create, messages, and profile
- `app/live/[roomId].tsx` live room experience
- `app/search.tsx` discovery and recommendation concepts
- `app/notifications.tsx` event feed concepts
- `app/wallet.tsx` wallet and ledger concepts
- `app/gift-store.tsx` monetization catalog concepts
- `app/creator-dashboard.tsx` earnings overview
- `app/admin.tsx` admin control surface
- `app/settings.tsx` security checklist
- `app/help.tsx` testing and launch checklist
- `app/reports.tsx` moderation queue overview

## Shared project structure

- `components/` reusable cards, lists, media, and creator UI
- `constants/` shared theme values plus architecture lesson data
- `hooks/` mock auth, chat, live room, and architecture state
- `services/` placeholder API contracts for product and backend domains
- `eas.json` Expo Application Services build profiles

## Useful commands

- `npx expo start`
- `npx expo-doctor`
- `npx expo install PACKAGE_NAME`
- `npx expo install --fix`
- `npx expo export --platform web`
- `npx tsc --noEmit`
