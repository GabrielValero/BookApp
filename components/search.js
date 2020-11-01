import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
export default function Search({setSearch}){

	const [search, setText] = useState("")

	const Buscar = ()=>{
		setSearch(search.replace( /\s+/g ,"+"));
	}

	return(
		<View style={styles.navbar}>
			<View style={styles.container}>
				<TextInput style={styles.input}
					placeholder="Busca tu libro favorito"
					placeholderTextColor="#A6A6A6" 
					value={search} 
					onSubmitEditing={Buscar}
					onChangeText={(text)=>setText(text)}
				/>
				<TouchableOpacity style={styles.button} onPress={Buscar}>
					<AntDesign name="search1" size={25} color="#454545"/>
				</TouchableOpacity>
			</View>
		</View>	
	)
}
const styles = StyleSheet.create({
	navbar: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",

	},
	container:{
		width: "80%",
		position: "relative",
		margin: 10,
	},
	input: {
		width: "100%",
		padding: 15,
		paddingLeft: 55,
		paddingTop: 15,
		paddingBottom: 15,
		color: "#5C5A5A",
		backgroundColor: "#F2F0F0",
		borderRadius: 30,
	},
	button:{
		width: 50,
		height: "90%",
		position: "absolute",
		margin: 3,
		left: 0,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		
	}
})