import React from 'react';
import { StyleSheet, View } from 'react-native';
import Players from './Players';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Players',
  };

  render() {
    return (
      <View style={styles.container}>
        <Players 
          navigation={this.props.navigation}
        />
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
