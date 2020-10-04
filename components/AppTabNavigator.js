import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ItemExchangeScreen from '../screens/ItemExchangeScreen';


export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
  ItemExchange: {
    screen: ItemExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/exchange-item.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Item Exchange",
    }
  }
});
