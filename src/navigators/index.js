import React from 'react';

import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import BottomTabNavigator from "./BottomTabNavigator";

/**
 * This wrapper is needed to display header bar at the top of the screens
 */
const BottomTabNavigatorWrapper = createStackNavigator({
  Main: {
    screen: BottomTabNavigator,
  },
});

export const drawerNavigator = createDrawerNavigator({
  Main: BottomTabNavigatorWrapper,
}, {
    drawerWidth: 300,
  });
