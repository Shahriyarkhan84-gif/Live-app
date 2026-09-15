import { useMemo } from 'react';

const rooms = [
  { id: 'music-lounge', title: 'Midnight Music Lounge', host: 'DJ Nova', category: 'Music', viewers: 1280 },
  { id: 'gaming-arena', title: 'Ranked Gaming Arena', host: 'Pixel Kai', category: 'Gaming', viewers: 2140 },
  { id: 'creator-talk', title: 'Creator Growth Talk', host: 'Mila Hart', category: 'Education', viewers: 860 },
];

export function useLiveRoom() {
  return useMemo(
    () => ({
      featuredRooms: rooms,
      categories: ['Music', 'Gaming', 'Education', 'Lifestyle', 'Fitness'],
      getRoomById: (roomId: string) => rooms.find((room) => room.id === roomId),
    }),
    [],
  );
}
