import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import List from './global/list';
import Card from './global/card';
import Search from './search';
import BottomsMode from './global/bottomsMode'
import { AntDesign, Feather } from '@expo/vector-icons';

export default function FreeScreen({navigation}) {

  const [mode, setMode] = useState(true);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("")
  const [offset, setOffset] = useState(12);
  const [error, setError] = useState('');

  const fetchBooks = (option)=>{
    let link;

    if(option=="busqueda") link = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10&filter=free-ebooks&key=AIzaSyBkh9iqwxqpO0tYQTP8T9WAISHXZoFo3Gc`;
                      else link = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&startIndex=${offset}&filter=free-ebooks&key=AIzaSyBkh9iqwxqpO0tYQTP8T9WAISHXZoFo3Gc`
    fetch(link)
    .then(response => response.json())
    .then(result => {
       if(result.items != undefined){

        result.items.map(book=>{
          for(let i=0; i<books.length; i++){
            if(books[i].id == book.id){
              books.splice(books.indexOf(books[i]), 1 )
            }
          }
        })

        if(option == "busqueda"){
          setBooks(result.items);
          setOffset(12);
        }
        else{

          setBooks(books.concat(result.items));
          setOffset(offset+42);

        }
      }else{
        setError("No hay mas resultados");
        setTimeout(()=>{setError("")},5000)
      }
    })
  }

  useEffect(()=>{
      search != "" ? fetchBooks("busqueda") : setBooks([]);
  },[search])

  return (
    <View style={styles.barra}>
    <StatusBar style="auto" />
      {books.length == 0 &&
        <View>
          <Text style={styles.textoHi}>LIBROS GRATIS</Text>
          <Text style={styles.textoHeader}>El conocimiento es <Text style={{fontWeight: "bold"}}>Poder</Text></Text>
        </View>
      }
        <Search setSearch={setSearch}/>
        {search != "" &&
          <BottomsMode mode={mode} search={search} setMode={setMode} />
        }
        {books.length > 0 ?
          !mode ?
            <FlatList
              data={books}
              renderItem={({item})=>(<Card item={item} navigation={navigation} />)}
              key={2}
              windowSize={7}
              InitialNumToRender={7}
              horizontal={false}
              numColumns={2}
              onEndReached={fetchBooks}
              onEndReachedThreshold={0.8}
            />:
            <FlatList
              data={books}
              renderItem={({item})=>(<List item={item} navigation={navigation}/>)}
              key={1}
              windowSize={7}
              InitialNumToRender={7}
              horizontal={false}
              numColumns={1}
              onEndReached={fetchBooks}
              onEndReachedThreshold={0.8}
            />
          :
          <ScrollView>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Image style={styles.images} source={require("../Images/knowledge_.png")} />
              <Text style={styles.frase}>"¡Qué extraña cosa el conocimiento! Una vez que ha penetrado en la mente, se aferra a ella como la hiedra a la roca"</Text>
              <Text style={{fontWeight: "bold", fontSize:20,}}>-Frankenstein</Text>
            </View>
          </ScrollView>
        }
         {error != '' && <Text>{error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
  	flex: 1,
  	backgroundColor: "#fff",
  },
  textoHi: {
    color: "#373737",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
  textoHeader:{
    color: "#373737",
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "500"
  },
  images:{
    width: "80%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 10,
  },
  frase:{
    width: "80%",
    textAlign: "center",
    color: "#868686",
    margin: 10,
  }

});
