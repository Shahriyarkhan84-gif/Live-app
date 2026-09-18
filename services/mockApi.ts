import {
  adminMetrics,
  adminModules,
  analyticsCards,
  apiSurface,
  automationWorkflows,
  categories,
  conversations,
  countries,
  creatorMetrics,
  databaseTables,
  homeMetrics,
  liveHosts,
  notificationFeed,
  platformLayers,
  privateChatRules,
  profileStats,
  quickActions,
  reportQueue,
  roomMessages,
  securityChecklist,
  settingsLinks,
  walletLedger,
  walletMetrics,
} from '@/constants/architecture';

const wait = (ms = 160) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchPlatformData() {
  await wait();

  return {
    adminMetrics,
    adminModules,
    analyticsCards,
    apiSurface,
    automationWorkflows,
    categories,
    countries,
    creatorMetrics,
    databaseTables,
    homeMetrics,
    notificationFeed,
    platformLayers,
    privateChatRules,
    profileStats,
    quickActions,
    reportQueue,
    securityChecklist,
    settingsLinks,
    walletLedger,
    walletMetrics,
  };
}

export async function fetchLiveFeed(countryCode: string) {
  await wait();

  const inCountry = liveHosts.filter((host) => host.countryCode === countryCode);
  const followingLive = liveHosts.filter((host) => host.isFollowing);
  const popularLive = [...liveHosts].sort((left, right) => right.viewerCount - left.viewerCount).slice(0, 4);
  const recommended = [liveHosts[5], liveHosts[6], liveHosts[8], liveHosts[9]].filter(Boolean);

  return {
    allHosts: liveHosts,
    countryLive: inCountry.length > 0 ? inCountry : liveHosts.slice(0, 3),
    followingLive,
    popularLive,
    recommended,
    countries,
    categories,
  };
}

export async function fetchMessages() {
  await wait();

  return {
    conversations,
    roomMessages,
    privateChatRules,
  };
}
