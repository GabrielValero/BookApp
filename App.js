import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//Views
import SearchBookScreen from './components/SearchBookScreen';
import BookDetailScreen from './components/BookDetailScreen';
import FreeScreen from './components/FreeScreen';

import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
const Stack = createStackNavigator();

function SearchStack(){
  return (
    <Stack.Navigator screenOptions={{title: null}}>
      <Stack.Screen
        name="Search"
        component={SearchBookScreen}
        
      />
      <Stack.Screen 
        name="Detail"
        component={BookDetailScreen}
        options={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
};
function FreeStack(){
  return (
    <Stack.Navigator screenOptions={{title: null}}>
      <Stack.Screen
        name="Free"
        component={FreeScreen}
        
      />
      <Stack.Screen 
        name="Detail"
        component={BookDetailScreen}
        options={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
};

const Tabs = createBottomTabNavigator();

export default function App(){
	return(
		<NavigationContainer
			tabBarOptions={{
        activeTintColor: '#FA7F06',
        inactiveTintColor: '#777',
    }}>
			<Tabs.Navigator>
				<Tabs.Screen name="Search" component={SearchStack} 
				options={{
					tabBarIcon:({color})=>(
						<AntDesign name="search1" size={25} color={color}/>
					)
				}}/>
				<Tabs.Screen name="Free" component={FreeStack} 
				options={{
					tabBarIcon:({color})=>(
						<Entypo name="open-book" size={25} color={color} />
					)
				}}/>
			</Tabs.Navigator>
		</NavigationContainer>
	)
}

/*
Icono de Users
<FontAwesome name="user-circle" size={25} color="#999" />

*/