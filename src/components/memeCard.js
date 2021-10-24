import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import {useFonts, Allerta_400Regular} from '@expo-google-fonts/allerta'
import { Entypo } from '@expo/vector-icons'; 

import AppLoading from 'expo-app-loading';
//component 
import ImageView from './ImageView';

export default function memeCard({image, name}) {
    let [fontLoaded] = useFonts({
        Allerta_400Regular
    })

    if(!fontLoaded){
        return(
          <AppLoading/>
        )
    }else{
        return (
            <View style={styles.container}>
                <View style={styles.memeOption}>
                <Text style={styles.memeTitle}>{name}</Text>
                <Entypo name="dots-three-vertical" size={24} color="black" style={styles.option}/>
                </View>
                <View style={styles.memeView}>
                <ImageView image={image} styles={styles.memeImage}/>
                </View>
            </View>
        )        
    }
      
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: "#919489",
      textAlign: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    memeImage : {
        width : 300,
        height: 300,
        margin: 10
    },
    memeTitle : {
       fontFamily : "Allerta_400Regular",
       fontSize: 20,
       paddingLeft : 15,
       paddingBottom: 2
    },
    memeOption : {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    option : {
        margin: 5
    }

})
