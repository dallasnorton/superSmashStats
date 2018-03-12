import React from 'react';
import {Alert, Button} from 'react-native';
import { Content, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class Player extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <ListItem>
        <Left>
          <Thumbnail small source={this.props.avatar} />
          <Text>{this.props.name.first}</Text>
        </Left>
        <Right>
          <Button 
            transparent
            onPress={() => this.props.navigation.navigate('PlayerDetails', {
              name: this.props.name,
              avatar: this.props.avatar
            })}
            title="View"
            >
          </Button>
        </Right>
      </ListItem>
    );
  }
}
