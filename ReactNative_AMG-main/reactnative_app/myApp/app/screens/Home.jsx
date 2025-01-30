import { View, Button, ImageSourcePropType, Text } from 'react-native';
import React from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products';
import { Entypo } from '@expo/vector-icons';
import Cart from './Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './ProductDetails';
import Logout from './Logout';


const Tab = createBottomTabNavigator();
const StackProd = createNativeStackNavigator();

const ProdStack =() =>{
  return (
    <StackProd.Navigator screenOptions={{headerShown: false}}>
      <StackProd.Screen name="PRODUCTS" component={Products} />
      <StackProd.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
    </StackProd.Navigator>
  )
}

const Home = () => {
  return (

     <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: 'black'
    }}>
        <Tab.Screen name="PROD_STACK" component={ProdStack} options={{tabBarIcon: ({ color, size}) => <Entypo name='home' size={size} color={color}/>}}/>
        <Tab.Screen name="CART" component={Cart} options={{tabBarIcon: ({ color, size}) => <Entypo name='shopping-cart' size={size} color={color}/>}}/>
        <Tab.Screen name="LOGOUT" component={Logout} options={{tabBarIcon: ({ color, size}) => <Entypo name='log-out' size={size} color={color}/>}}/>
      </Tab.Navigator>
    
  );
};

export default Home;
