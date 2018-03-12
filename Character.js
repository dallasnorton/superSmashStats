import React from 'react';
import {View} from 'react-native';
import { ListItem, Left, Right, Thumbnail, Text } from 'native-base';


export default class Character extends React.Component {
  render() {
    // const avatar = require(`./images/${require(this.props.name)}.png`);

    return (
      <ListItem>
        <Thumbnail small source={this.props.avatar} />
        <Text>{this.props.name}</Text>
      </ListItem>
    );
  }
}

{/* <Thumbnail small source={{ uri: this.props.name }} /> */}