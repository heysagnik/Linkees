import { CHANNEL_TYPES } from '../constants';

export type ThemeType = 'dark' | 'light';

export type KnownChannelTypes =
  | typeof CHANNEL_TYPES.DRIBBLE
  | typeof CHANNEL_TYPES.GITHUB
  | typeof CHANNEL_TYPES.INSTAGRAM
  | typeof CHANNEL_TYPES.LINKEDIN
  | typeof CHANNEL_TYPES.TELEGRAM
  | typeof CHANNEL_TYPES.TWITTER
  | typeof CHANNEL_TYPES.WEBSITE
  | typeof CHANNEL_TYPES.YOUTUBE;

export type KnownChannelItem = {
  type: KnownChannelTypes;
  title: string;
  subtitle: string;
  image?: string;
  link: string;
};

export type UnknownChannelType = typeof CHANNEL_TYPES.OTHER;

export type UnknownChannelItem = {
  type: UnknownChannelType;
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

export type ItemType = KnownChannelItem | UnknownChannelItem;
