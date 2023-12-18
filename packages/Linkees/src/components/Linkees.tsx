import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { ItemType } from "../ts";

import { CHANNEL_TYPE_VS_COVER_IMAGE } from "./constant";
import { CHANNEL_TYPES } from "../constants";

function Linkees({
  headerAvatar,
  cardItems,
  name,
}: {
  headerAvatar?: string;
  cardItems: ItemType[];
  name: string;
}): JSX.Element {
  return (
    <div className="App">
      <Header avatar={headerAvatar} name={name} />
      <div className="container row">
        {cardItems.map((item, i: number) => {
          const coverImage: string =
            item.image ??
            CHANNEL_TYPE_VS_COVER_IMAGE[item.type] ??
            CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE];
          return (
            <Card
              i={i}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              cover={coverImage}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export { Linkees };
