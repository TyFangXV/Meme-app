import React from 'react'
import { View, Image, StyleSheet} from 'react-native'

export default function ImageView({image, styles}) {
    return (
        <View style={style.conatiner}>
            <Image source={{uri: image}}  style={styles} resizeMode={"contain"}/>
        </View>
    )
}


const style = StyleSheet.create({
   conatiner : {
       backgroundColor : "#5E5E5E",
       alignItems: 'center',
       margin : 15,
       borderRadius: 5
   }
})
