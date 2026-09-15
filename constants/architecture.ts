export type Lesson = {
  id: string;
  title: string;
  summary: string;
};

export type PlatformLayer = {
  title: string;
  items: string[];
};

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

export const lessonRoadmap: Lesson[] = [
  { id: '01', title: 'Platform Fundamentals', summary: 'Define the viewer and creator journey across mobile, web, video, data, and moderation.' },
  { id: '02', title: 'System Architecture', summary: 'Split delivery into API, WebSocket, and media gateways backed by focused services.' },
  { id: '03', title: 'Database Architecture', summary: 'Use PostgreSQL, Redis, storage, search, and queues for durable and real-time data.' },
  { id: '04', title: 'UI and Screens', summary: 'Cover auth, home, live, profile, search, wallet, notifications, and admin surfaces.' },
  { id: '05', title: 'Authentication', summary: 'Support sign-up, login, verification, sessions, and role-based access control.' },
  { id: '06', title: 'Profiles and Social Graph', summary: 'Model follows, blocks, messages, creator profiles, and reporting flows.' },
  { id: '07', title: 'Live Room Creation', summary: 'Set up titles, categories, cover art, privacy, rules, and moderator settings.' },
  { id: '08', title: 'Real-Time Video', summary: 'Handle capture, ingest, transcoding, recording, and CDN delivery.' },
  { id: '09', title: 'Viewer Experience', summary: 'Optimize discovery, watch time, follows, likes, shares, and session transitions.' },
  { id: '10', title: 'Chat and WebSockets', summary: 'Secure room messaging with rate limits, moderation, and room events.' },
  { id: '11', title: 'Gifts and Wallet', summary: 'Turn coins into gift events with ledger-backed wallet accounting.' },
  { id: '12', title: 'Creator Earnings', summary: 'Track pending, available, and withdrawable balances with payout reporting.' },
  { id: '13', title: 'Notifications', summary: 'Fan out events to push and in-app channels through queues and workers.' },
  { id: '14', title: 'Moderation', summary: 'Blend automated checks, reports, review queues, actions, and audit logging.' },
  { id: '15', title: 'Admin Dashboard', summary: 'Give operators oversight of users, rooms, withdrawals, content, and analytics.' },
  { id: '16', title: 'Payments', summary: 'Verify top-ups and withdrawals through providers, webhooks, and fraud checks.' },
  { id: '17', title: 'Security', summary: 'Protect auth, APIs, data, secrets, payments, and monitoring pipelines.' },
  { id: '18', title: 'Testing', summary: 'Run unit, integration, WebSocket, media, load, and end-to-end test stages.' },
  { id: '19', title: 'Cloud Deployment', summary: 'Build CI/CD, containers, storage, media, and observability into delivery.' },
  { id: '20', title: 'Massive Scaling', summary: 'Scale via replicas, shards, Redis clusters, workers, and multi-region routing.' },
];

export const platformLayers: PlatformLayer[] = [
  { title: 'Client surfaces', items: ['iOS app', 'Android app', 'Web app', 'Admin dashboard'] },
  { title: 'Traffic edge', items: ['DNS', 'CDN', 'WAF', 'Load balancer'] },
  { title: 'Gateways', items: ['API gateway', 'WebSocket gateway', 'Media gateway'] },
  { title: 'Core services', items: ['Auth', 'Users', 'Social', 'Live rooms', 'Chat', 'Gifts', 'Wallet', 'Payments'] },
  { title: 'Operations services', items: ['Notifications', 'Moderation', 'Search', 'Recommendations', 'Analytics', 'Admin'] },
  { title: 'Data platform', items: ['PostgreSQL', 'Redis', 'Object storage', 'Search index', 'Message queue'] },
];

export const platformMetrics: StatusMetric[] = [
  { label: 'Core services', value: '12', tone: 'primary' },
  { label: 'Realtime channels', value: '4', tone: 'accent' },
  { label: 'Risk gates', value: '6', tone: 'danger' },
  { label: 'Delivery stages', value: '20', tone: 'primary' },
];

export const quickActions: ActionItem[] = [
  { title: 'Search and discovery', description: 'Browse categories, ranking signals, and recommendation loops.', href: '/search' },
  { title: 'Notifications', description: 'Review push and in-app event pipelines.', href: '/notifications' },
  { title: 'Wallet and payments', description: 'Inspect balances, purchases, and withdrawal readiness.', href: '/wallet' },
  { title: 'Gift store', description: 'Preview monetization inventory and coin sinks.', href: '/gift-store' },
  { title: 'Creator dashboard', description: 'Track earnings, live hours, and gift conversion.', href: '/creator-dashboard' },
  { title: 'Admin dashboard', description: 'Audit reports, moderation, and operational health.', href: '/admin' },
];

export const notificationFeed: ActivityItem[] = [
  { title: 'Mila Hart went live', detail: 'Creator Growth Talk started in Education.', meta: 'push + in-app' },
  { title: 'Gift received', detail: 'A viewer sent the Galaxy Crown gift in Midnight Music Lounge.', meta: 'economy event' },
  { title: 'Withdrawal approved', detail: 'Your weekly payout moved from pending to available.', meta: 'creator finance' },
  { title: 'Moderation update', detail: 'A reported message was removed by the chat moderation queue.', meta: 'safety ops' },
];

export const walletMetrics: StatusMetric[] = [
  { label: 'Coin balance', value: '4,200', tone: 'accent' },
  { label: 'Pending earnings', value: '$312', tone: 'primary' },
  { label: 'Available payout', value: '$1,240', tone: 'primary' },
  { label: 'Risk holds', value: '1', tone: 'danger' },
];

export const walletLedger: ActivityItem[] = [
  { title: 'Coin purchase', detail: '2,000 coins credited after verified payment webhook.', meta: 'completed' },
  { title: 'Gift sent', detail: 'Lion Parade sent to DJ Nova during Ranked Gaming Arena.', meta: '-350 coins' },
  { title: 'Gift received', detail: 'Galaxy Crown received in Creator Growth Talk.', meta: '+$89 pending' },
  { title: 'Withdrawal request', detail: 'Weekly creator payout submitted for compliance review.', meta: '$500 pending' },
];

export const giftCatalog: ActivityItem[] = [
  { title: 'Spark', detail: 'Low-cost engagement gift for chat momentum.', meta: '25 coins' },
  { title: 'Galaxy Crown', detail: 'Premium spotlight gift with on-stream animation.', meta: '899 coins' },
  { title: 'Lion Parade', detail: 'High-visibility gift for leaderboard pushes.', meta: '1,200 coins' },
  { title: 'Creator Rocket', detail: 'Seasonal celebration gift for milestones.', meta: '2,000 coins' },
];

export const creatorMetrics: StatusMetric[] = [
  { label: 'Live hours', value: '36h', tone: 'primary' },
  { label: 'Avg viewers', value: '1.8K', tone: 'accent' },
  { label: 'Gift conversion', value: '4.6%', tone: 'primary' },
  { label: 'Follower growth', value: '+12%', tone: 'accent' },
];

export const adminModules: PlatformLayer[] = [
  { title: 'Growth', items: ['Users', 'Creators', 'Rooms', 'Recommendations'] },
  { title: 'Safety', items: ['Reports', 'Moderation', 'Content review', 'Audit logs'] },
  { title: 'Economy', items: ['Payments', 'Withdrawals', 'Gifts', 'Wallet health'] },
  { title: 'Operations', items: ['Analytics', 'Settings', 'Queues', 'Incident response'] },
];

export const reportQueue: ActivityItem[] = [
  { title: 'Spam burst in chat', detail: 'Realtime filter flagged duplicate messages in Ranked Gaming Arena.', meta: 'high priority' },
  { title: 'Profile review', detail: 'Creator avatar queued for manual moderation after user reports.', meta: 'needs decision' },
  { title: 'Withdrawal fraud check', detail: 'Payout request held for additional KYC verification.', meta: 'finance risk' },
  { title: 'Copyright claim', detail: 'Recorded stream clipped for audio ownership review.', meta: 'media safety' },
];

export const securityChecklist: ActivityItem[] = [
  { title: 'Authentication', detail: 'Password hashing, refresh rotation, device sessions, and role checks.' },
  { title: 'API protection', detail: 'HTTPS, input validation, rate limiting, WAF, and structured logging.' },
  { title: 'Secrets and data', detail: 'Managed secrets, encrypted storage, backups, and access controls.' },
  { title: 'Payments', detail: 'Webhook verification, fraud scoring, audit trails, and withdrawal approval.' },
];

export const testingStages: ActivityItem[] = [
  { title: 'Application quality', detail: 'Unit, component, integration, and end-to-end coverage.' },
  { title: 'Realtime quality', detail: 'WebSocket chat, room presence, viewer counters, and event fanout.' },
  { title: 'Media quality', detail: 'Stream ingest, playback resilience, recording, and CDN latency checks.' },
  { title: 'Operational quality', detail: 'Load, security, staging, rollback, and disaster recovery drills.' },
];
