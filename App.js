import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo'
import { createAppContainer } from "react-navigation";
import {  drawerNavigator } from './src/navigators';
const AppContainer = createAppContainer(drawerNavigator);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <AppContainer />
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./src/assets/ic_camera.png'),
        require('./src/assets/ic_map.png'),
        require('./src/assets/ic_plane.png'),
        require('./src/assets/ic_watch.png'),
        require('./src/assets/ic_tab_chat.png'),
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
