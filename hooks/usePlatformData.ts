import { useMemo } from 'react';

import {
  adminModules,
  creatorMetrics,
  giftCatalog,
  lessonRoadmap,
  notificationFeed,
  platformLayers,
  platformMetrics,
  quickActions,
  reportQueue,
  securityChecklist,
  testingStages,
  walletLedger,
  walletMetrics,
} from '@/constants/architecture';

export function usePlatformData() {
  return useMemo(
    () => ({
      adminModules,
      creatorMetrics,
      giftCatalog,
      lessonRoadmap,
      notificationFeed,
      platformLayers,
      platformMetrics,
      quickActions,
      reportQueue,
      securityChecklist,
      testingStages,
      walletLedger,
      walletMetrics,
    }),
    [],
  );
}
