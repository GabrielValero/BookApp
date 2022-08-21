import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//Views
import SearchBookScreen from './components/SearchBookScreen';
import BookDetailScreen from './components/BookDetailScreen';
import FreeScreen from './components/FreeScreen';

import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();

function SearchStack(){
  return (
    <Stack.Navigator screenOptions={{title: null}}>
      <Stack.Screen
        name="SearchStack"
        component={SearchBookScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Detail"
        component={BookDetailScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
};
function FreeStack(){
  return (
    <Stack.Navigator screenOptions={{title: null}}>
      <Stack.Screen
        name="FreeStack"
        component={FreeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Detail"
        component={BookDetailScreen}
        options={{
          headerShown: false
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
					),
          headerShown: false
				}}/>
				<Tabs.Screen name="Free" component={FreeStack}
				options={{
					tabBarIcon:({color})=>(
						<Entypo name="open-book" size={25} color={color} />
					),
          headerShown: false
				}}/>
			</Tabs.Navigator>
		</NavigationContainer>
	)
}
