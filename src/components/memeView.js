import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';
import uuid from 'uuid-random';
import MemeCard from './memeCard';


export default function MemeView({ memes, bannerId}) {
  {
      let memeIndex = 0;
      return memes.map((meme) => {
        memeIndex++;

        if(memeIndex % 5 === 0){
          return  <AdMobBanner bannerSize="mediumRectangle" adUnitID={bannerId} servePersonalizedAds={true} key={uuid()} />
        }else{
           return <MemeCard image={meme.url} name={meme.title} key={memeIndex}/>;            
        }
        
      });       
  }
}
