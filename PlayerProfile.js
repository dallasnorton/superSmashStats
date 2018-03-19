import React from "react";
import { StyleSheet } from "react-native";
import { Thumbnail, Container, Title, Icon, Text } from "native-base";

class WinCount extends React.Component {
  render() {
    return (
      <Container>
        <Text>Number of Wins: {this.props.count}</Text>
      </Container>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <Thumbnail
        large
        source={this.props.source}
        style={styles.thumbnailSpacing}
      />
    );
  }
}

class AvatarPlaceHolder extends React.Component {
  render() {
    return <Icon name="ios-camera" />;
  }
}

export default class PlayerProfile extends React.Component {
  render() {
    return (
      <Container style={styles.horizontalCenter}>
        {this.props.avatar ? (
          <Avatar source={this.props.avatar} />
        ) : (
          <AvatarPlaceHolder />
        )}
        <Title>{this.props.name}</Title>
        <WinCount count={this.props.winCount ? this.props.winCount : 0} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  horizontalCenter: {
    alignItems: "center",
    margin: 20
  },
  thumbnailSpacing: {
    alignItems: "flex-start",
    marginBottom: 20
  }
});
