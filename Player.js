import React from 'react';
import {View} from 'react-native';
import { ListItem, Left, Right, Thumbnail, Text } from 'native-base';
import PlayerActionButtons from './PlayerActionButtons';

export default class Player extends React.Component {
  render() {
    return (
      <ListItem>
        <Left>
          <Thumbnail small source={this.props.avatar} />
          <Text>{this.props.name.first}</Text>
        </Left>
        <Right>
          <PlayerActionButtons
            navigation={this.props.navigation}
            name={this.props.name}
            avatar={this.props.avatar}
          />
        </Right>
      </ListItem>
    );
  }
}
