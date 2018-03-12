import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail } from 'native-base';

export default class PlayerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? `${params.name.first} ${params.name.last}` : 'Player Details',
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    const avatar = params ? params.avatar : null;

    return (
      <View style={styles.container}>
        <Thumbnail small source={avatar} />
        <Text>{name.first}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
