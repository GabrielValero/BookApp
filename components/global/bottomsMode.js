import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; 

export default function BottomsMode({mode, search, setMode}){
	return(
		<View style={{flexDirection:"row",justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, marginBottom: 10}}>
          <Text style={{width: "80%"}}><Text style={{fontWeight:"bold"}}>Result: </Text>{search.replace(/[+]/g, " ")}</Text>
          {!mode ? 
            <TouchableOpacity style={styles.button} onPress={()=>{setMode(true)}} >
              <AntDesign name="bars" size={30} color="#fff" />
            </TouchableOpacity>

          : <TouchableOpacity style={styles.button} onPress={()=>{setMode(false)}} >
             <Feather name="grid" size={30} color="#fff" />
            </TouchableOpacity>
          }
        </View>
	)
}
const styles = StyleSheet.create({
  button:{
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#FA7F06"
  } 
});