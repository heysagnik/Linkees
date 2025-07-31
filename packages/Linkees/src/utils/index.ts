import { ItemType, CHANNEL_TYPES, KnownChannelTypes } from "../types";

import website from "../assets/website.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.jpg";
import youtube from "../assets/youtube.jpeg";
import dribbble from "../assets/dribbble.png";
import github from "../assets/github.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";

export const CHANNEL_TYPE_VS_COVER_IMAGE: Record<KnownChannelTypes, string> = {
  [CHANNEL_TYPES.WEBSITE]: website,
  [CHANNEL_TYPES.INSTAGRAM]: instagram,
  [CHANNEL_TYPES.LINKEDIN]: linkedin,
  [CHANNEL_TYPES.YOUTUBE]: youtube,
  [CHANNEL_TYPES.DRIBBLE]: dribbble,
  [CHANNEL_TYPES.GITHUB]: github,
  [CHANNEL_TYPES.TELEGRAM]: telegram,
  [CHANNEL_TYPES.TWITTER]: twitter,
} as const;

export const getCoverImage = (item: ItemType): string => {
  if (item.image) {
    return item.image;
  }

  if (item.type === CHANNEL_TYPES.OTHER) {
    return item.image || CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE];
  }

  return (
    CHANNEL_TYPE_VS_COVER_IMAGE[item.type as KnownChannelTypes] ||
    CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE]
  );
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const openLink = (url: string): void => {
  if (isValidUrl(url)) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
