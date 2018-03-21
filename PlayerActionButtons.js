import React from "react";
import { StyleSheet, View } from "react-native";
import { Content, Left, Button, Body, Right, Text } from "native-base";

export default class Player extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          transparent
          info
          onPress={() =>
            this.props.navigation.navigate("PlayerDetails", {
              name: this.props.name,
              avatar: this.props.avatar
            })
          }
        >
          <Text>View</Text>
        </Button>
        <Button
          onPress={() =>
            this.props.navigation.navigate("CharacterSelectionModal", {
              name: this.props.name
            })
          }
        >
          <Text>Add Win</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
