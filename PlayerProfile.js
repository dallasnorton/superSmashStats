import React from "react";
import { Thumbnail, Container, Title } from "native-base";

export default class PlayerProfile extends React.Component {
  render() {
    return (
      <Container>
        <Thumbnail small source={this.props.avatar} />
        <Title>{this.props.name.first}</Title>
      </Container>
    );
  }
}
