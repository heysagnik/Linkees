import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import { ItemType } from '../ts';

import { CHANNEL_TYPE_VS_COVER_IMAGE } from './constant';
import { CHANNEL_TYPES } from '../constants';

function Linktree({ headerAvatar, cardItems }: { headerAvatar?: string; cardItems: ItemType[] }): JSX.Element {
  return (
    <div className="App">
      <Header avatar={headerAvatar} />
      <div className="container row">
        {cardItems.map((item, i: number) => {
          const converImage: string =
            item.image ?? CHANNEL_TYPE_VS_COVER_IMAGE[item.type] ?? CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE];
          return <Card i={i} title={item.title} subtitle={item.subtitle} link={item.link} cover={converImage} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export { Linktree };
