import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet,Platform, View } from 'react-native';
import {AdMobInterstitial, AdMobBanner} from 'expo-ads-admob';
import {displayIntertitialAd, isCloseToBottom, monitorMeme} from './src/lib/UiFunction'
import {fetchMemeFromApi} from './src/lib/apiController'
//component
import MemeView from './src/components/memeView'


//var

const bannerId = Platform.OS === 'android' ? "ca-app-pub-3652448866138732/6355112717" : "ca-app-pub-3652448866138732/9058487049"
const intertitialId = Platform.OS === 'android' ? "ca-app-pub-3652448866138732/8789704366" : "ca-app-pub-3652448866138732/5091321875"
let memeCount = 5;






export default function App() {
  let [memes,addMeme] = useState([{"postLink":"https://redd.it/qef2of","subreddit":"memes","title":"My favourite love poem","url":"https://i.redd.it/xdlric3o0av71.jpg","nsfw":false,"spoiler":false,"author":"Mr_Wedgie","ups":523,"preview":["https://preview.redd.it/xdlric3o0av71.jpg?width=108\u0026crop=smart\u0026auto=webp\u0026s=bcdce900d144b827070cb5015e61046b98b93b5a","https://preview.redd.it/xdlric3o0av71.jpg?width=216\u0026crop=smart\u0026auto=webp\u0026s=485c02906a5d166ec0176d24269b22c8d1d05082","https://preview.redd.it/xdlric3o0av71.jpg?width=320\u0026crop=smart\u0026auto=webp\u0026s=cd67a9bef5061af994aa87750eda579c15ad5248","https://preview.redd.it/xdlric3o0av71.jpg?width=640\u0026crop=smart\u0026auto=webp\u0026s=88d8196e1e9d887e91102a3aae9be9a1c7df9827"]}, {"postLink":"https://redd.it/qe8j5w","subreddit":"me_irl","title":"me_irl","url":"https://i.imgur.com/4KDgUHt.jpg","nsfw":false,"spoiler":false,"author":"jay_dee_ess","ups":94,"preview":["https://external-preview.redd.it/PxQRBX90EWneqGHlhiTdAtKxwF3_PfKUq0QXCRU1YKs.jpg?width=108\u0026crop=smart\u0026auto=webp\u0026s=549111be3b92e2a005f0975f59f3e06bd523e97a","https://external-preview.redd.it/PxQRBX90EWneqGHlhiTdAtKxwF3_PfKUq0QXCRU1YKs.jpg?width=216\u0026crop=smart\u0026auto=webp\u0026s=ddb928352b153d6f2dc8734ca00457e13b7c3cb6","https://external-preview.redd.it/PxQRBX90EWneqGHlhiTdAtKxwF3_PfKUq0QXCRU1YKs.jpg?width=320\u0026crop=smart\u0026auto=webp\u0026s=1a962e3ff6481bf369b29d418fe894a0f7293d6b","https://external-preview.redd.it/PxQRBX90EWneqGHlhiTdAtKxwF3_PfKUq0QXCRU1YKs.jpg?width=640\u0026crop=smart\u0026auto=webp\u0026s=8d24f001d6333a4ecfa95664d1b8f6d6a9e2f76e","https://external-preview.redd.it/PxQRBX90EWneqGHlhiTdAtKxwF3_PfKUq0QXCRU1YKs.jpg?width=960\u0026crop=smart\u0026auto=webp\u0026s=c2bf9736c9b1fc6f1655279e828d25e602dbfef0","https://external-preview.redd.it/PxQRBX90EWneqGHlhiTdAtKxwF3_PfKUq0QXCRU1YKs.jpg?width=1080\u0026crop=smart\u0026auto=webp\u0026s=25cb45e0cf6fe17d153a30ec1207e325f8444d17"]}]);
  
  const fetchMeme = async()=> {
    await monitorMeme(memeCount, AdMobInterstitial, intertitialId, addMeme, memes);
    await fetchMemeFromApi(addMeme, memes, memeCount);

  }
  
  useEffect(async()=>{
    await displayIntertitialAd(AdMobInterstitial, intertitialId)
  },[])


 
//Actual component
  return (
    <ScrollView style={styles.container} onScroll={async({nativeEvent})=> {
      if(isCloseToBottom(nativeEvent)) await fetchMeme()
    }}> 
    <MemeView memes={memes} bannerId={bannerId}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  center : {
    textAlign : 'center'
  }
});
