import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
export default function List({item, navigation}){
	
	return(
    <TouchableOpacity style={{backgroundColor: "#fff", width: "95%", padding: 10, paddingHorizontal: 10, margin: 10, 
      flexDirection:"row", alignItems: "center", elevation: 17, borderRadius: 20,
    }}
      onPress={()=>{
        navigation.push('Detail', {book: item});
      }}>
      {item.volumeInfo.imageLinks ?
        <Image style={{ width: 70, height: 100, resizeMode: "contain", borderRadius: 8,}}
        source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
        />
        : <View style={{ backgroundColor: "#444", width: 70, height: 100, resizeMode: "contain",
        borderRadius: 8, justifyContent: "center", alignItems: "center"}}>
          <AntDesign name="question" size={40} color="white" />
        </View>}
     
      <View style={{marginLeft: 20, marginRight: 10, width: "57%"}}>
        <Text style={{fontSize: 15, fontWeight: "bold",}}>{item.volumeInfo.title.slice(0,30)}{item.volumeInfo.title.length > 30 && "..."}</Text>
        <Text style={{fontSize: 10, color:"#9A9A9A",}}>{item.volumeInfo.authors && item.volumeInfo.authors.slice(0,4).toString()}{item.volumeInfo.authors && item.volumeInfo.authors.length > 4 && "..." }</Text>
        <View style={{flexDirection: "row"}}>
          <AntDesign name="star" size={24} color="#EDDA09" />
          {item.accessInfo.webReaderLink && <Entypo name="book" size={24} color="#14DA7A" />}
          {item.saleInfo.listPrice ? <FontAwesome5 name="cart-arrow-down" size={24} color="#DF5151" />
          :item.saleInfo.buyLink && <AntDesign name="download" size={24} color="#3A3A3A"/>}
        </View>
      </View>
      
    </TouchableOpacity>
  )
}