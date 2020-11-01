import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Card({item, navigation}){
	return(
    <TouchableOpacity style={{ width: "50%",  padding: 10, marginTop: 5, marginBottom: 5,}}
      onPress={()=>{
        navigation.push('Detail', {book: item});
      }}>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        
        {item.volumeInfo.imageLinks ? <Image style={{width: "100%", height: 200, resizeMode: "contain", borderRadius: 8,}} source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}/>
        : <View style={{ width: 135, height: 200, backgroundColor:"#333",justifyContent: "center", alignItems: "center", borderRadius: 8,}}>
          <AntDesign name="question" size={40} color="white" />
        </View>}

      </View>
    </TouchableOpacity>
  )
}