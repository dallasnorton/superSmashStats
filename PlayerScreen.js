import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Thumbnail,
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from "native-base";
import BackButton from "./BackButton";
import PlayerProfile from "./PlayerProfile";

export default class PlayerScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { params } = navigation.state;

  //   return {
  //     title: params ? `${params.name.first} ${params.name.last}` : 'Player Details',
  //   }
  // };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    const avatar = params ? params.avatar : null;
    const fullName = params
      ? `${this.capitalizeFirstLetter(name.first)} ${this.capitalizeFirstLetter(
          name.last
        )}`
      : "Player Details";

    return (
      <Container>
        <Header>
          <Left>
            <BackButton navigation={this.props.navigation} />
          </Left>
          <Body>
            <Title>{this.capitalizeFirstLetter(name.first)}</Title>
          </Body>
          <Right />
        </Header>
        <PlayerProfile avatar={avatar} name={fullName} />
      </Container>
    );
  }
}
