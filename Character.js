import React from 'react';
import {View} from 'react-native';
import { ListItem, Left, Right, Thumbnail, Text } from 'native-base';


export default class Character extends React.Component {
  render() {
    return (
      <ListItem>
        <Thumbnail small source={this.props.avatar} />
        <Text>{this.props.name}</Text>
      </ListItem>
    );
  }
}