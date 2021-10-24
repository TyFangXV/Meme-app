import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import MemeCard from './memeCard';

export default function MemeView({ memes}) {
  {
      let memeIndex = 0;
      return memes.map((meme) => {
        memeIndex++;
        return <MemeCard image={meme.url} name={meme.title} key={memeIndex}/>;
      });       
  }
}
