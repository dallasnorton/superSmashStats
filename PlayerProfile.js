import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Thumbnail, Container, Title, Icon, Text } from "native-base";
// import Camera from 'react-native-camera';

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

export default class PlayerProfile extends React.Component {
  render() {
    return (
      <Container style={styles.horizontalCenter}>
        <Container style={styles.thumbnailSpacing}>
          {!this.props.avatar ? (
            <Avatar source={this.props.avatar} />
          ) : (
            <AvatarPlaceHolder />
          )}
        </Container>
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
