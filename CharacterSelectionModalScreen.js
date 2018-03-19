import React from "react";
import { StyleSheet } from "react-native";
import { Container, Button, Title, Footer, FooterTab } from "native-base";
import CharacterList from "./CharacterList";
import CharacterSelectionHeader from "./CharacterSelectionHeader";
// import SearchBar from 'react-native-search-bar'

class SubmitButton extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full primary>
            <Title style={{ color: "#fff" }}>Submit</Title>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default class CharacterSelectionModalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characterSelected: null };
  }

  onCharacterSelected = item => {
    if (this.state.characterSelected === item.name) {
      this.setState({ characterSelected: null });
    } else {
      this.setState({ characterSelected: item.name });
    }
  };

  textChange = change => {
    console.log("change", change);
  };

  render() {
    return (
      <Container>
        <CharacterSelectionHeader
          navigation={this.props.navigation}
          characterSelected={this.state.characterSelected}
        />
        {/* <SearchBar
          ref='searchBar'
          placeholder='Search'
          onChangeText={this.textChange}
          onSearchButtonPress={this.textChange}
          onCancelButtonPress={this.textChange}
        /> */}
        <CharacterList
          style={styles.container}
          onSelection={this.onCharacterSelected}
          selectedCharacter={this.state.characterSelected}
        />
        {this.state.characterSelected ? <SubmitButton /> : null}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "stretch",
    justifyContent: "center"
  }
});
