import { create } from 'zustand';

import { countries } from '@/constants/architecture';

type AppStore = {
  isAuthenticated: boolean;
  selectedCountryCode: string;
  currentUser: {
    username: string;
    displayName: string;
    countryCode: string;
    countryName: string;
    bio: string;
    friends: string;
    followers: string;
    following: string;
  };
  signIn: () => void;
  signOut: () => void;
  setSelectedCountryCode: (countryCode: string) => void;
};

const defaultCountry = countries[0];

export const useAppStore = create<AppStore>((set) => ({
  isAuthenticated: false,
  selectedCountryCode: defaultCountry.code,
  currentUser: {
    username: '@aurora.mira',
    displayName: 'Mira Lane',
    countryCode: defaultCountry.code,
    countryName: defaultCountry.name,
    bio: 'Blue-hour vocalist building a global live room for music, chat, and friend-powered broadcasting.',
    friends: '148',
    followers: '24.8K',
    following: '921',
  },
  signIn: () => set({ isAuthenticated: true }),
  signOut: () => set({ isAuthenticated: false }),
  setSelectedCountryCode: (selectedCountryCode) => set({ selectedCountryCode }),
}));
