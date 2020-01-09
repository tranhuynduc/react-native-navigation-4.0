import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Containers/HomeScreen';
import ProfileScreen from './Containers/ProfileScreen';
import AboutScreen from './Containers/AboutScreen';
import DetailScreen from './Containers/DetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const TabNavigattor = createBottomTabNavigator({
  Home: {
    screen: AppNavigator,
  },
  Detail: {
    screen: DetailScreen,
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigattor,
  },
  About: {
    screen: AboutScreen,
  },
});

const RootNavigation = createAppContainer(DrawerNavigator);
const App = () => {
  return (
    <View>
      <Text>This is App</Text>
      <RootNavigation />
    </View>
  );
};

export default createAppContainer(DrawerNavigator);
