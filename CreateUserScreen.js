import React from "react";
import { connect } from "react-redux";
import { Container, Header, Left, Right, Body, Title } from "native-base";
import BackButton from "./BackButton";
import NewPlayerForm from "./NewPlayerForm";

export default class CreateUserScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <BackButton navigation={this.props.navigation} />
          </Left>
          <Body>
            <Title>Add Player</Title>
          </Body>
          <Right />
        </Header>
        <NewPlayerForm navigation={this.props.navigation} />
      </Container>
    );
  }
}
