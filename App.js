import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Containers/MainScreen';
import ListScreen from './Containers/ListScreen';
import LoginScreen from './Containers/LoginScreen';
import StatisticScreen from './Containers/StatisticScreen';
import NoteDetailScreen from './Containers/NoteDetailScreen';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    NoteDetail: {
      screen: NoteDetailScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      initialRouteName: 'Login',
      title: 'Home',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Icon name="menu" size={30} onPress={() => navigation.openDrawer()} />
      ),
    }),
  },
);

const AuthStack = createStackNavigator({ Login: LoginScreen });
const StatisticStack = createStackNavigator(
  { Statistic: StatisticScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon name="menu" size={30} onPress={() => navigation.openDrawer()} />
      ),
    }),
  },
);
const ListStack = createStackNavigator(
  { List: ListScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon name="menu" size={30} onPress={() => navigation.openDrawer()} />
      ),
    }),
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Create: {
      screen: AppStack,
    },
    Statistic: {
      screen: StatisticStack,
    },
    List: {
      screen: ListStack,
    },
  },
  {
    initialRouteName: 'Statistic',
  },
);
const swithcNavigation = createSwitchNavigator(
  {
    App: DrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppNavigation = createAppContainer(swithcNavigation);
import { Provider } from 'react-redux';
import configureStore from './Redux/configureStore';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
