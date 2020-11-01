import React from 'react';
import {View, ScrollView, Linking, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import { AntDesign,Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function BookDetailScreen({route, navigation}){
	
	const {book} = route.params;

	return(
		<View style={{flex: 1}}>
			<ScrollView >
				<View style={styles.header}>

					{book.volumeInfo.imageLinks ? <Image style={{ height: "70%", resizeMode: "contain", borderRadius: 8}} source={{uri: book.volumeInfo.imageLinks.thumbnail}}/> 
					: <View style={{ width: "100%", height: "100%", backgroundColor:"#333",justifyContent: "center", alignItems: "center"}}>
						<AntDesign name="question" size={40} color="white" />
					</View>}

				</View>

				<View style={styles.detail}>
					<View style={{position: "absolute", transform:[{translateY: -30}], right: 30, flexDirection: "row", 
					justifyContent:"flex-end", alignItems: "center"}}>
						{book.accessInfo.webReaderLink && 
							<TouchableOpacity style={{backgroundColor: "#fff", padding:15, marginHorizontal:10, elevation: 16, borderRadius: 40}}
								onPress={() => Linking.openURL(book.accessInfo.webReaderLink)}>
								<Entypo name="book" size={30} color="#14DA7A" />
							</TouchableOpacity>
						}
						{book.saleInfo.listPrice ? 
						<TouchableOpacity style={{backgroundColor: "#DF5151", padding:15, marginHorizontal:10, elevation: 16, borderRadius: 40}}
							onPress={() => Linking.openURL(book.saleInfo.buyLink)}>
							<FontAwesome5 name="cart-arrow-down" size={30} color="#fff" />
						</TouchableOpacity>
						: book.saleInfo.buyLink && 
							
							<TouchableOpacity style={{backgroundColor: "#4F4F4F", padding:15, marginHorizontal:10, elevation: 16, borderRadius: 40}}
							 onPress={() => Linking.openURL(book.saleInfo.buyLink)}>
								<AntDesign name="download" size={30} color="#fff"/>
							</TouchableOpacity>
							
						}
						
					</View>

					<View style={styles.prime}>
						<Text style={styles.title}>{book.volumeInfo.title}</Text>
						<Text style={styles.author}>{ book.saleInfo.listPrice ? "$"+book.saleInfo.listPrice.amount : "Free"}</Text>	
					</View>
					{book.volumeInfo.authors && <Text style={{marginTop: 5,color: "#787878"}}>{book.volumeInfo.authors}</Text>}

					{book.volumeInfo.categories && <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems:"center", marginTop: 20}}>
						{book.volumeInfo.categories.map(category=>(
							<Text style={{paddingHorizontal: 15, paddingVertical: 7, borderRadius: 20, color: "#fff",backgroundColor: "#FF6000" }} key={category}>{category}</Text>
						))}
					</View>}
					<Text style={styles.description}>Descripcion</Text>
					<Text style={{marginTop: 20,color: "#787878"}}>{book.volumeInfo.description? book.volumeInfo.description: book.searchInfo.textSnippet }</Text>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	header:{
		width: "100%",
		height: 400,
		backgroundColor: "#555",
		justifyContent:"center",
	}
	,
	detail:{
		bottom: 30,
		
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	prime:{
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 40,
		position:"relative",
	},
	title: {
		width: "80%",
		fontWeight: "500",
		fontSize: 20,
		color: "#2F2F2F",
	},
	author: {
		fontWeight: "500",
		fontSize: 15,
		color: "#F58888",
	},
	description:{
		width: "40%",
		marginTop: 20,
		textAlign: "center",
		borderBottomWidth: 3,
		borderColor: "#FF6000",
		fontSize: 17,
		color: "#474747",
	}
})