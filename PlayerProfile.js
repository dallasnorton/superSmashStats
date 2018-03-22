import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Thumbnail,
  Container,
  Title,
  Icon,
  Text,
  Content,
  Separator,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import { selectWinsForUser } from "./redux/selectors";
// import Camera from 'react-native-camera';

class WinCount extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>Wins</Text>
          </Separator>
          {Object.keys(this.props.wins).map(character => (
            <ListItem key={character}>
              <Text>
                {character}: {this.props.wins[character]}
              </Text>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return <Thumbnail large source={this.props.source} />;
  }
}

class AvatarPlaceHolder extends React.Component {
  // takePicture = () => {
  //   this.camera.capture()
  //      .then((data) => console.log(data))
  //      .catch(err => console.error(err));
  // }

  render() {
    //   return (
    //     <Camera
    //       ref={(cam) => {
    //           this.camera = cam;
    //         }}
    //         style={styles.preview}
    //         aspect={Camera.constants.Aspect.fill}>
    //           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
    //               [CAPTURE]
    //           </Text>
    //     </Camera>
    //   );
    return (
      <TouchableOpacity style={styles.circleContainer}>
        <Icon name={"ios-camera"} />
      </TouchableOpacity>
    );
  }
}

class PlayerProfile extends React.Component {
  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const fullName = `${this.capitalizeFirstLetter(
      this.props.name.first
    )} ${this.capitalizeFirstLetter(this.props.name.last)}`;

    return (
      <Container style={styles.horizontalCenter}>
        <Container style={styles.thumbnailSpacing}>
          {!this.props.avatar ? (
            <Avatar source={this.props.avatar} />
          ) : (
            <AvatarPlaceHolder />
          )}
        </Container>
        <Title>{fullName}</Title>
        {this.props.wins ? <WinCount wins={this.props.wins} /> : null}
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
    marginBottom: 20
  },
  circleContainer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});

export default connect((state, props) => ({
  wins: selectWinsForUser(state, props.name.first + props.name.last)
}))(PlayerProfile);
