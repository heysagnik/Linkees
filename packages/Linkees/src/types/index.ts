export type ThemeType = "dark" | "light";

export const CHANNEL_TYPES = {
  DRIBBLE: "DRIBBLE",
  GITHUB: "GITHUB",
  INSTAGRAM: "INSTAGRAM",
  LINKEDIN: "LINKEDIN",
  TELEGRAM: "TELEGRAM",
  TWITTER: "TWITTER",
  WEBSITE: "WEBSITE",
  YOUTUBE: "YOUTUBE",
  OTHER: "OTHER",
} as const;

export type KnownChannelTypes =
  | typeof CHANNEL_TYPES.DRIBBLE
  | typeof CHANNEL_TYPES.GITHUB
  | typeof CHANNEL_TYPES.INSTAGRAM
  | typeof CHANNEL_TYPES.LINKEDIN
  | typeof CHANNEL_TYPES.TELEGRAM
  | typeof CHANNEL_TYPES.TWITTER
  | typeof CHANNEL_TYPES.WEBSITE
  | typeof CHANNEL_TYPES.YOUTUBE;

export type UnknownChannelType = typeof CHANNEL_TYPES.OTHER;

export interface KnownChannelItem {
  type: KnownChannelTypes;
  title: string;
  subtitle: string;
  image?: string;
  link: string;
}

export interface UnknownChannelItem {
  type: UnknownChannelType;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export type ItemType = KnownChannelItem | UnknownChannelItem;

export interface IIcon {
  color?: string;
  size?: number;
  className?: string;
}

export interface ICard {
  i: number;
  title: string;
  subtitle: string;
  link: string;
  cover: string;
  className?: string;
  onClick?: () => void;
}

export interface LinkeesProps {
  headerAvatar?: string;
  cardItems: ItemType[];
  name: string;
  theme?: ThemeType;
  className?: string;
  showFooter?: boolean;
  customFooter?: React.ReactNode;
}

export interface HeaderProps {
  avatar?: string;
  name: string;
  className?: string;
}

export interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}
