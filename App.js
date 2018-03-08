import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Players from './Players';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Players />
      </View>
    );
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
