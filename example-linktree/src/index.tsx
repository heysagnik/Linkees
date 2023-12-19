import React from "react";
import ReactDOM from "react-dom/client";

import Linkees, { CHANNEL_TYPES } from "linkees";

import "./css/normalize.css";

const items = [
  {
    title: "Website",
    subtitle: "Look at my work!",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://sagnik-wtf.vercel.app", //your personal website or portfolio  link
  },
  {
    title: "GitHub",
    subtitle: "@heysagnik | 🏡 to all my open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/heysagnik", //Github Profile link
  },
  {
    title: "Instagram",
    subtitle: "@heysagnik |  Shots of my life 🙂",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/heysagnik", //instagram profile link
  },
  {
    title: "Twitter",
    subtitle: "@heysagnik | 😉",
    type: CHANNEL_TYPES.TWITTER,
    link: "https://twitter.com/heysagnik", // twitter profile link
  },
  {
    title: "LinkedIn",
    subtitle: "Know more about my profession 👨‍💼",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/heysagnik/", // linkedin
  },
  {
    title: "YouTube",
    subtitle: "CODER SAGNIK | Official channel of mine",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg", //youtube channel link
  },

  {
    title: "Dribbble",
    subtitle: "@virtuonic | shots of dezigns ",
    type: CHANNEL_TYPES.DRIBBLE,
    link: "https://dribbble.com/virtuonic", // Dribbble profile link
  },
  {
    title: "Telegram",
    subtitle: "@heysagnik | Chat with me instantly ",
    type: CHANNEL_TYPES.TELEGRAM,
    link: "https://telegram.me/heysagnik", //Telegram Pofile
  },
];

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement)?.render(
    <React.StrictMode>
      <Linkees cardItems={items} name={"Sagnik."} />{" "}
      {/* headerAvatar={'any image url'}*/}
    </React.StrictMode>
  );
}
