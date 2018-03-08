import React from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';

export default class Player extends React.Component {
  render() {
    return (
      <ListItem>
        <Left>
          <Thumbnail small source={this.props.avatar} />
          <Text>{this.props.name}</Text>
        </Left>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
