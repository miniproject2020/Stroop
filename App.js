import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Game from './screens/Game.js';
import Result from './screens/Result.js';
import Home from './screens/Home.js';
import Playmode from './screens/Playmode.js';

const AppNavigator = createStackNavigator({
  Game: {
    screen: Game,
  },
   Result: {
    screen: Result,
  },
   Home: {
    screen: Home,
},
Playmode: {
    screen: Playmode,
}
},{initialRouteName: "Home",});

export default createAppContainer(AppNavigator);