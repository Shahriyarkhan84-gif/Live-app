# Auralis

Original global live-broadcasting mobile app built with Expo, React Native, TypeScript, and Expo Router.

## Product direction

Auralis is an original blue-themed social live-broadcasting product with:

- login and registration
- home, discovery, go live, messages, and me navigation
- country-based live discovery
- category discovery
- global host discovery
- live room viewing
- realtime messaging concepts
- friends and mutual-follow flows
- coins, gifts, wallet, earnings, and withdrawals
- notifications, reports, moderation, analytics, admin, and n8n automation surfaces

## Architecture

- **Mobile**: Expo, React Native, TypeScript, Expo Router, React Query, Zustand
- **Backend**: Node.js, NestJS, REST API, WebSocket
- **Data**: PostgreSQL, Redis, S3-compatible object storage
- **Streaming**: dedicated RTMP/WHIP ingestion with HLS/WebRTC playback
- **Automation**: n8n for notifications, reports, analytics, moderation alerts, and admin alerts

Important rules reflected in the prototype:

- PostgreSQL and the backend are the source of truth for balances and withdrawals
- Redis/WebSocket handle high-frequency realtime operations
- n8n is used selectively for lower-frequency automation
- n8n is not part of the video path

## Main routes

- `app/(auth)/login.tsx`
- `app/(auth)/register.tsx`
- `app/(tabs)/index.tsx`
- `app/(tabs)/discover.tsx`
- `app/(tabs)/create.tsx`
- `app/(tabs)/messages.tsx`
- `app/(tabs)/profile.tsx`
- `app/live/[roomId].tsx`
- `app/search.tsx`
- `app/countries.tsx`
- `app/categories.tsx`
- `app/friends.tsx`
- `app/notifications.tsx`
- `app/wallet.tsx`
- `app/earnings.tsx`
- `app/reports.tsx`
- `app/admin.tsx`
- `app/analytics.tsx`
- `app/automation.tsx`

## State and data

- `providers/AppProviders.tsx` wires React Query
- `stores/appStore.ts` stores auth and country selection with Zustand
- `services/mockApi.ts` provides mock app data for the prototype
- `constants/architecture.ts` contains the original product, discovery, wallet, analytics, and automation model

## Run locally

```bash
npm install
npx expo start
```

Useful checks:

```bash
npx tsc --noEmit
npx expo export --platform web
npx expo-doctor
```
