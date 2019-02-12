import React from 'react';

import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from "react-navigation";

import { TabIcon, Burger } from "../components";
import { Empty } from '../containers';
import {
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
  tabBarBackgroundColor,
  tabBarIconTintColorFocused,
  tabBarIconTintColorNormal
} from '../colors';

const BottomTabNavigator = createBottomTabNavigator({
  Camera: {
    screen: Empty
  },
  Map: {
    screen: Empty
  },
  Plane: {
    screen: Empty
  },
  Time: {
    screen: Empty
  },
  Chat: {
    screen: Empty
  }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Camera') {
          icon = require('../assets/ic_camera.png');
        } else if (routeName === 'Map') {
          icon = require('../assets/ic_map.png');
        } else if (routeName === 'Plane') {
          icon = require('../assets/ic_plane.png');
        } else if (routeName === 'Time') {
          icon = require('../assets/ic_watch.png');
        } else if (routeName === 'Chat') {
          icon = require('../assets/ic_tab_chat.png');
        }
        return <TabIcon icon={icon} style={{ tintColor: focused ? tabBarIconTintColorNormal : tabBarIconTintColorFocused }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: tabBarActiveTintColor,
      inactiveTintColor: tabBarInactiveTintColor,
      labelStyle: {
        fontSize: 9,
      },
      style: {
        backgroundColor: tabBarBackgroundColor,
        paddingVertical: 7,
        height: 56
      },
    }
  });

BottomTabNavigator.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: <Burger onPress={() => navigation.toggleDrawer()} />,
  };
};

export default BottomTabNavigator;