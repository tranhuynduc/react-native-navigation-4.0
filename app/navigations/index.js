import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../containers/MainScreen';
import ListScreen from '../containers/ListScreen';
import LoginScreen from '../containers/LoginScreen';
import StatisticScreen from '../containers/StatisticScreen';
import NoteDetailScreen from '../containers/NoteDetailScreen';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Appbar, Title, Colors, Drawer } from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import NoteItem from '../components/NoteItem';
const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;

  return (
    <Appbar>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        !options.noMenu && (
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        )
      )}
      <Appbar.Content title={title} />
    </Appbar>
  );
};

const DrawerMenu = ({ items, navigation }) => {
  return (
    <Drawer.Section title="Global Menu">
      {items.map(({ key, routeName }) => (
        <Drawer.Item
          key={key}
          label={routeName}
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate(routeName);
          }}
        />
      ))}
    </Drawer.Section>
  );
};

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
      header: Header,
    }),
  },
);

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      initialRouteName: 'Login',
      header: Header,
    }),
  },
);
const StatisticStack = createStackNavigator(
  { Statistic: StatisticScreen, NoteItem: NoteItem },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: Header,
    }),
  },
);
const ListStack = createStackNavigator(
  { List: ListScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: Header,
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
    initialRouteName: 'Create',
    contentComponent: DrawerMenu,
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

export default createAppContainer(swithcNavigation);
