import React from "react";
import { View } from "react-native";
import { ListItem, Left, Right, Thumbnail, Text } from "native-base";
import PlayerActionButtons from "./PlayerActionButtons";

export default class Player extends React.Component {
  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <ListItem>
        <Left>
          <Thumbnail small source={this.props.avatar} />
          <Text>{this.capitalizeFirstLetter(this.props.name.first)}</Text>
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
