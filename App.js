import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Players from './Players';
import { StackNavigator, } from 'react-navigation';
import HomeScreen from './HomeScreen';
import PlayerScreen from './PlayerScreen';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen, },
    PlayerDetails: { screen: PlayerScreen, },
  }, {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
