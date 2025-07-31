import React from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import { Footer } from "./Footer";

import { LinkeesProps } from "../types";
import { getCoverImage } from "../utils";

export const Linkees: React.FC<LinkeesProps> = ({
  headerAvatar,
  cardItems,
  name,
  theme = "dark",
  showFooter = true,
  customFooter,
}) => {
  return (
    <div className="App" data-theme={theme}>
      <Header avatar={headerAvatar} name={name} />
      <div className="container row">
        {cardItems.map((item, i: number) => (
          <Card
            key={`card-${i}-${item.title}`}
            i={i}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            cover={getCoverImage(item)}
          />
        ))}
      </div>
      {showFooter && (customFooter ? customFooter : <Footer />)}
    </div>
  );
};

export default Linkees;
