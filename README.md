# Live App

Expo Router starter for a live streaming app prototype.

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

Use [snack.expo.dev](https://snack.expo.dev) for quick screen prototypes, then move stable UI into this local Expo project.

## Project structure

- `app/` route-based screens for auth, tabs, and live rooms
- `components/` reusable UI building blocks
- `hooks/` demo auth, chat, and live-room state hooks
- `services/` API endpoint helpers for auth, live, chat, and payments
- `constants/` shared colors and app config
- `eas.json` build profiles for Expo Application Services

## Useful commands

- `npx expo start`
- `npx expo-doctor`
- `npx expo install PACKAGE_NAME`
- `npx expo install --fix`
