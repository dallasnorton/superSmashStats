import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert
} from "react-native";
import { Container, List, Body } from "native-base";
import Character from "./Character";

export default class CharacterList extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.props.characters.map(char => (
          <Character
            key={char.name}
            avatar={char.avatar}
            name={char.name}
            onCharacterSelected={() => this.props.onSelection(char)}
            selected={this.props.selectedCharacter === char.name}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
});
