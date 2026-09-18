export type StatusMetric = {
  label: string;
  value: string;
  tone?: 'primary' | 'accent' | 'danger';
};

export type ActionItem = {
  title: string;
  description: string;
  href: string;
};

export type ActivityItem = {
  title: string;
  detail: string;
  meta?: string;
};

export type CountryOption = {
  code: string;
  name: string;
  flag: string;
  liveCount: number;
  topCategory: string;
};

export type CategoryOption = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  liveCount: number;
};

export type LiveHost = {
  id: string;
  hostName: string;
  title: string;
  category: string;
  countryCode: string;
  countryName: string;
  countryFlag: string;
  viewerCount: number;
  isFollowing?: boolean;
  liveDuration: string;
  thumbnailTone: string;
};

export type ConversationPreview = {
  id: string;
  name: string;
  handle: string;
  relationship: string;
  lastMessage: string;
  unreadCount: number;
  online: boolean;
};

export type ProfileStat = {
  label: string;
  value: string;
};

export type SettingsLink = {
  title: string;
  caption: string;
  href: string;
};

export type PlatformLayer = {
  title: string;
  items: string[];
};

export const brand = {
  name: 'Auralis',
  tagline: 'Watch. Connect. Broadcast.',
  shortDescription: 'An original blue-themed global live-broadcasting social app.',
};

export const countries: CountryOption[] = [
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', liveCount: 184, topCategory: 'Music' },
  { code: 'US', name: 'United States', flag: '🇺🇸', liveCount: 392, topCategory: 'Entertainment' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', liveCount: 128, topCategory: 'Gaming' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', liveCount: 96, topCategory: 'Lifestyle' },
  { code: 'IN', name: 'India', flag: '🇮🇳', liveCount: 441, topCategory: 'Chat' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰', liveCount: 211, topCategory: 'Comedy' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', liveCount: 175, topCategory: 'Music' },
  { code: 'TR', name: 'Türkiye', flag: '🇹🇷', liveCount: 143, topCategory: 'Travel' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', liveCount: 102, topCategory: 'Sports' },
  { code: 'FR', name: 'France', flag: '🇫🇷', liveCount: 151, topCategory: 'Cooking' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', liveCount: 164, topCategory: 'Education' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', liveCount: 117, topCategory: 'Lifestyle' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', liveCount: 133, topCategory: 'Music' },
];

export const categories: CategoryOption[] = [
  { slug: 'music', name: 'Music', icon: '🎵', description: 'Live vocals, DJ sets, and studio sessions.', liveCount: 612 },
  { slug: 'gaming', name: 'Gaming', icon: '🎮', description: 'Ranked matches, co-op play, and esports commentary.', liveCount: 488 },
  { slug: 'chat', name: 'Chat', icon: '💬', description: 'Casual talk shows and social hangouts.', liveCount: 530 },
  { slug: 'entertainment', name: 'Entertainment', icon: '✨', description: 'Shows, skits, and variety content.', liveCount: 421 },
  { slug: 'sports', name: 'Sports', icon: '🏅', description: 'Training, match analysis, and fitness lives.', liveCount: 207 },
  { slug: 'travel', name: 'Travel', icon: '🧭', description: 'City walks, destination tips, and global stories.', liveCount: 173 },
  { slug: 'cooking', name: 'Cooking', icon: '🍳', description: 'Kitchen streams and food tutorials.', liveCount: 119 },
  { slug: 'comedy', name: 'Comedy', icon: '🎭', description: 'Open mic, humor, and improv rooms.', liveCount: 144 },
  { slug: 'education', name: 'Education', icon: '📘', description: 'Classes, mentoring, and Q&A broadcasts.', liveCount: 154 },
  { slug: 'lifestyle', name: 'Lifestyle', icon: '🌊', description: 'Daily routines, beauty, and real-world sharing.', liveCount: 266 },
];

export const liveHosts: LiveHost[] = [
  { id: 'skyline-sessions', hostName: 'Mira Lane', title: 'Skyline Sessions', category: 'Music', countryCode: 'GB', countryName: 'United Kingdom', countryFlag: '🇬🇧', viewerCount: 12400, isFollowing: true, liveDuration: '01:14:22', thumbnailTone: '#1D4ED8' },
  { id: 'pixel-sprint', hostName: 'Noah Flux', title: 'Pixel Sprint Arena', category: 'Gaming', countryCode: 'US', countryName: 'United States', countryFlag: '🇺🇸', viewerCount: 18600, isFollowing: true, liveDuration: '02:05:10', thumbnailTone: '#2563EB' },
  { id: 'coastal-chat', hostName: 'Ayla Noor', title: 'Coastal Chat Lounge', category: 'Chat', countryCode: 'PK', countryName: 'Pakistan', countryFlag: '🇵🇰', viewerCount: 7200, isFollowing: false, liveDuration: '00:42:09', thumbnailTone: '#0EA5E9' },
  { id: 'aurora-fit', hostName: 'Luca Reed', title: 'Aurora Fit Live', category: 'Sports', countryCode: 'CA', countryName: 'Canada', countryFlag: '🇨🇦', viewerCount: 5400, isFollowing: false, liveDuration: '00:31:44', thumbnailTone: '#0284C7' },
  { id: 'midnight-bites', hostName: 'Sara Bloom', title: 'Midnight Bites', category: 'Cooking', countryCode: 'FR', countryName: 'France', countryFlag: '🇫🇷', viewerCount: 3900, isFollowing: true, liveDuration: '01:02:18', thumbnailTone: '#38BDF8' },
  { id: 'global-campus', hostName: 'Ibrahim Zed', title: 'Global Campus Live', category: 'Education', countryCode: 'AE', countryName: 'UAE', countryFlag: '🇦🇪', viewerCount: 6100, isFollowing: false, liveDuration: '00:57:51', thumbnailTone: '#3B82F6' },
  { id: 'pulse-comedy', hostName: 'Rina Vale', title: 'Pulse Comedy Room', category: 'Comedy', countryCode: 'BD', countryName: 'Bangladesh', countryFlag: '🇧🇩', viewerCount: 4700, isFollowing: true, liveDuration: '00:29:40', thumbnailTone: '#60A5FA' },
  { id: 'atlas-walks', hostName: 'Ken Sol', title: 'Atlas Walks Tokyo', category: 'Travel', countryCode: 'AU', countryName: 'Australia', countryFlag: '🇦🇺', viewerCount: 8200, isFollowing: false, liveDuration: '01:21:55', thumbnailTone: '#1E40AF' },
  { id: 'neon-room', hostName: 'Elia Crest', title: 'Neon Room Stories', category: 'Entertainment', countryCode: 'DE', countryName: 'Germany', countryFlag: '🇩🇪', viewerCount: 9100, isFollowing: false, liveDuration: '01:48:12', thumbnailTone: '#2563EB' },
  { id: 'sea-breeze-style', hostName: 'Tara Quinn', title: 'Sea Breeze Lifestyle', category: 'Lifestyle', countryCode: 'ES', countryName: 'Spain', countryFlag: '🇪🇸', viewerCount: 5800, isFollowing: true, liveDuration: '00:38:16', thumbnailTone: '#0F766E' },
];

export const homeMetrics: StatusMetric[] = [
  { label: 'Live hosts', value: '1.2K', tone: 'primary' },
  { label: 'Countries', value: '32', tone: 'accent' },
  { label: 'Friends online', value: '86', tone: 'primary' },
  { label: 'Gift streaks', value: '14', tone: 'danger' },
];

export const profileStats: ProfileStat[] = [
  { label: 'Friends', value: '148' },
  { label: 'Followers', value: '24.8K' },
  { label: 'Following', value: '921' },
];

export const creatorMetrics: StatusMetric[] = [
  { label: 'Host earnings', value: '$3,420', tone: 'primary' },
  { label: 'Pending payout', value: '$640', tone: 'accent' },
  { label: 'Monthly gifts', value: '9,204', tone: 'primary' },
  { label: 'Live hours', value: '61h', tone: 'danger' },
];

export const walletMetrics: StatusMetric[] = [
  { label: 'Coins', value: '12,400', tone: 'accent' },
  { label: 'Available', value: '$1,920', tone: 'primary' },
  { label: 'Pending', value: '$640', tone: 'primary' },
  { label: 'Withdrawals', value: '3', tone: 'danger' },
];

export const quickActions: ActionItem[] = [
  { title: 'Notifications', description: 'Follower alerts, live starts, gifts, and security notices.', href: '/notifications' },
  { title: 'Wallet', description: 'Coins, transactions, host earnings, and withdrawals.', href: '/wallet' },
  { title: 'Countries', description: 'Country-based discovery for hosts, rooms, and trends.', href: '/countries' },
  { title: 'Categories', description: 'Explore music, gaming, chat, sports, comedy, and more.', href: '/categories' },
  { title: 'Analytics', description: 'Usage, live activity, gifting, and platform health.', href: '/analytics' },
  { title: 'n8n Automation', description: 'Selective workflows for notifications, reports, and admin alerts.', href: '/automation' },
];

export const conversations: ConversationPreview[] = [
  { id: '1', name: 'Nadia Frost', handle: '@nadiaf', relationship: 'Friend', lastMessage: 'Going live in 10 minutes — join from the UK tab.', unreadCount: 2, online: true },
  { id: '2', name: 'Omar Ray', handle: '@omarray', relationship: 'Mutual follow', lastMessage: 'Thanks for the Galaxy gift last night.', unreadCount: 0, online: true },
  { id: '3', name: 'Zuri Miles', handle: '@zuriwaves', relationship: 'Following only', lastMessage: 'Private chat unlocks after a mutual follow.', unreadCount: 0, online: false },
  { id: '4', name: 'Aiko Sun', handle: '@aikosun', relationship: 'Friend', lastMessage: 'I sent the host analytics sheet to admin.', unreadCount: 5, online: false },
];

export const roomMessages: ActivityItem[] = [
  { title: 'Nadia Frost', detail: 'That blue stage layout feels premium tonight.', meta: '2s ago' },
  { title: 'Ken Sol', detail: 'Mutual follow unlocked private chat — message me after the live!', meta: '18s ago' },
  { title: 'Mira Lane', detail: 'Galaxy Bloom gift received 💙', meta: '31s ago' },
  { title: 'System', detail: 'Follow notifications are enabled for this host.', meta: 'automation' },
];

export const privateChatRules: ActivityItem[] = [
  { title: 'Mutual follow gate', detail: 'Private messaging unlocks only when the app’s follow/friend rule is satisfied.' },
  { title: 'Realtime delivery', detail: 'Messages use backend WebSocket events rather than n8n for low latency.' },
  { title: 'Media support', detail: 'Text, emoji, images, voice notes, read state, and online presence are supported.' },
  { title: 'Safety controls', detail: 'Users can block or report conversations from the chat surface.' },
];

export const notificationFeed: ActivityItem[] = [
  { title: 'New follower', detail: 'Mina Hart followed your profile from Canada.', meta: 'social' },
  { title: 'Mutual follow', detail: 'You and Omar Ray are now friends.', meta: 'friend' },
  { title: 'Host started live', detail: 'Mira Lane is live in the United Kingdom music category.', meta: 'live' },
  { title: 'Gift received', detail: 'Galaxy Bloom sent during Skyline Sessions.', meta: 'wallet' },
  { title: 'Security alert', detail: 'New device sign-in reviewed and approved.', meta: 'security' },
];

export const walletLedger: ActivityItem[] = [
  { title: 'Coin purchase', detail: '8,000 coins added after verified payment webhook processing.', meta: 'completed' },
  { title: 'Gift sent', detail: 'Blue Comet x2 delivered in Pixel Sprint Arena.', meta: '-500 coins' },
  { title: 'Gift received', detail: 'Aurora Crown converted into host earnings.', meta: '+$120 pending' },
  { title: 'Withdrawal requested', detail: 'Payout submitted for manual review and signed processing.', meta: '$640 review' },
];

export const reportQueue: ActivityItem[] = [
  { title: 'User report', detail: 'Harassment report created for private conversation review.', meta: 'high' },
  { title: 'Moderation alert', detail: 'Realtime profanity threshold exceeded in Coastal Chat Lounge.', meta: 'urgent' },
  { title: 'Admin alert', detail: 'Large withdrawal request queued for human approval.', meta: 'finance' },
  { title: 'System alert', detail: 'Streaming ingest retries exceeded for one scheduled session.', meta: 'ops' },
];

export const securityChecklist: ActivityItem[] = [
  { title: 'Authentication', detail: 'JWT/session handling, refresh tokens, password hashing, and device-level review.' },
  { title: 'API protection', detail: 'HTTPS, validation, rate limiting, authorization, and audit logging.' },
  { title: 'Wallet authority', detail: 'PostgreSQL and backend remain the source of truth for balances and withdrawals.' },
  { title: 'Upload safety', detail: 'Signed storage uploads, media validation, and restricted moderation actions.' },
];

export const settingsLinks: SettingsLink[] = [
  { title: 'Account', caption: 'Identity, contact, and verification', href: '/settings' },
  { title: 'Privacy', caption: 'Blocking, visibility, and friend rules', href: '/settings' },
  { title: 'Wallet', caption: 'Coins, gifts, and withdrawals', href: '/wallet' },
  { title: 'Earnings', caption: 'Host revenue and reports', href: '/earnings' },
  { title: 'Help', caption: 'Support and security guidance', href: '/help' },
  { title: 'Admin', caption: 'Operations, moderation, and analytics', href: '/admin' },
];

export const adminMetrics: StatusMetric[] = [
  { label: 'Total users', value: '2.8M', tone: 'primary' },
  { label: 'Active viewers', value: '148K', tone: 'accent' },
  { label: 'Live hosts', value: '9,420', tone: 'primary' },
  { label: 'Open reports', value: '214', tone: 'danger' },
];

export const adminModules: PlatformLayer[] = [
  { title: 'Users and hosts', items: ['Users', 'Hosts', 'Profiles', 'Countries', 'Categories'] },
  { title: 'Live operations', items: ['Live rooms', 'Current viewers', 'Streaming alerts', 'Moderation'] },
  { title: 'Economy', items: ['Coins', 'Gifts', 'Earnings', 'Withdrawals'] },
  { title: 'Control plane', items: ['Analytics', 'Audit logs', 'System settings', 'Admin users'] },
];

export const automationWorkflows: ActivityItem[] = [
  { title: 'User created', detail: 'Welcome notification and onboarding push via webhook automation.', meta: '01_USERS' },
  { title: 'Host started live', detail: 'Notify followers after backend creates the live room.', meta: '02_LIVE' },
  { title: 'Mutual follow', detail: 'Friend notification when reciprocal follow is detected.', meta: '03_SOCIAL' },
  { title: 'Withdrawal request', detail: 'Create review task after backend balance checks.', meta: '06_PAYMENTS' },
  { title: 'Daily analytics', detail: 'Aggregate users, broadcasts, viewers, gifts, and earnings once per day.', meta: '09_ANALYTICS' },
  { title: 'System alert', detail: 'Escalate critical payment, moderation, or infrastructure problems.', meta: '12_SYSTEM' },
];

export const analyticsCards: ActivityItem[] = [
  { title: 'Broadcast health', detail: 'Track sessions started, average duration, and retention by country.', meta: 'live' },
  { title: 'Economy trends', detail: 'Observe gift conversion, coin sales, and host payout readiness.', meta: 'wallet' },
  { title: 'Social growth', detail: 'Measure mutual follows, private chat unlocks, and notification opens.', meta: 'social' },
  { title: 'Operational safety', detail: 'Review moderation queues, alerts, and automation outcomes.', meta: 'ops' },
];

export const platformLayers: PlatformLayer[] = [
  { title: 'Mobile app', items: ['Expo', 'React Native', 'TypeScript', 'Expo Router', 'React Query', 'Zustand'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'REST API', 'WebSocket'] },
  { title: 'Data', items: ['PostgreSQL', 'Redis', 'S3-compatible storage'] },
  { title: 'Streaming', items: ['RTMP / WHIP ingestion', 'HLS / WebRTC playback', 'Dedicated media infrastructure'] },
  { title: 'Automation', items: ['n8n', 'Push notifications', 'Transactional email', 'Admin alerts'] },
];

export const databaseTables: PlatformLayer[] = [
  { title: 'Identity', items: ['users', 'profiles', 'devices', 'push_tokens'] },
  { title: 'Discovery and social', items: ['countries', 'categories', 'follows', 'friends'] },
  { title: 'Live and chat', items: ['live_rooms', 'live_sessions', 'live_viewers', 'conversations', 'messages', 'message_reads'] },
  { title: 'Economy', items: ['wallets', 'coin_transactions', 'gifts', 'gift_transactions', 'host_earnings', 'withdrawals'] },
  { title: 'Operations', items: ['notifications', 'reports', 'moderation_actions', 'admin_users', 'audit_logs'] },
];

export const apiSurface: PlatformLayer[] = [
  { title: 'Auth', items: ['POST /auth/register', 'POST /auth/login', 'POST /auth/refresh', 'POST /auth/logout'] },
  { title: 'Discovery', items: ['GET /countries', 'GET /categories', 'GET /live', 'GET /live/country/:countryId', 'GET /live/category/:categoryId'] },
  { title: 'Social', items: ['POST /users/:id/follow', 'DELETE /users/:id/follow', 'GET /friends'] },
  { title: 'Realtime and live', items: ['GET /conversations', 'POST /messages', 'POST /live', 'POST /live/:id/start', 'POST /live/:id/end', 'GET /live/:id'] },
  { title: 'Wallet and safety', items: ['GET /wallet', 'POST /live/:id/gifts', 'GET /earnings', 'POST /withdrawals', 'POST /reports'] },
];
