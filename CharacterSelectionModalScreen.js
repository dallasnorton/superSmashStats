import React from "react";
import { StyleSheet } from "react-native";
import { Container, Button, Title, Footer, FooterTab } from "native-base";
import CharacterList from "./CharacterList";
import CharacterSelectionHeader from "./CharacterSelectionHeader";
import SearchBar from "react-native-search-bar";

const smashCharacters = [
  { name: "Bayonetta", avatar: require("./images/Bayonetta.png") },
  { name: "Bowser", avatar: require("./images/Bowser.png") },
  { name: "Bowser Jr.", avatar: require("./images/BowserJr.png") },
  { name: "Captain Falcon", avatar: require("./images/CaptainFalcon.png") },
  { name: "Charizard", avatar: require("./images/Charizard.png") },
  { name: "Cloud", avatar: require("./images/Cloud.png") },
  { name: "Corrin", avatar: require("./images/Corrin.png") },
  { name: "Dark Pit", avatar: require("./images/DarkPit.png") },
  { name: "Diddy Kong", avatar: require("./images/DiddyKong.png") },
  { name: "Donkey Kong", avatar: require("./images/DonkeyKong.png") },
  { name: "Dr. Mario", avatar: require("./images/DrMario.png") },
  { name: "Duck Hunt", avatar: require("./images/DuckHunt.png") },
  { name: "Falco", avatar: require("./images/Falco.png") },
  { name: "Fox", avatar: require("./images/Fox.png") },
  { name: "Ganondorf", avatar: require("./images/Ganondorf.png") },
  { name: "Greninja", avatar: require("./images/Greninja.png") },
  { name: "Ike", avatar: require("./images/Ike.png") },
  { name: "Jigglypuff", avatar: require("./images/Jigglypuff.png") },
  { name: "King Dedede", avatar: require("./images/KingDedede.png") },
  { name: "Kirby", avatar: require("./images/Kirby.png") },
  { name: "Link", avatar: require("./images/Link.png") },
  { name: "Little Mac", avatar: require("./images/LittleMac.png") },
  { name: "Lucario", avatar: require("./images/Lucario.png") },
  { name: "Lucas", avatar: require("./images/Lucas.png") },
  { name: "Lucina", avatar: require("./images/Lucina.png") },
  { name: "Luigi", avatar: require("./images/Luigi.png") },
  { name: "Mario", avatar: require("./images/Mario.png") },
  { name: "Marth", avatar: require("./images/Marth.png") },
  { name: "Mega Man", avatar: require("./images/MegaMan.png") },
  { name: "Meta Knight", avatar: require("./images/MetaKnight.png") },
  { name: "Mewtwo", avatar: require("./images/Mewtwo.png") },
  { name: "Mii Brawler", avatar: require("./images/MiiBrawler.png") },
  { name: "Mii Gunner", avatar: require("./images/MiiGunner.png") },
  { name: "Mii Swordfighter", avatar: require("./images/MiiSwordfighter.png") },
  { name: "Mr. Game & Watch", avatar: require("./images/MrGameWatch.png") },
  { name: "Ness", avatar: require("./images/Ness.png") },
  { name: "Olimar", avatar: require("./images/Olimar.png") },
  { name: "Pac-Man", avatar: require("./images/Pac-Man.png") },
  { name: "Palutena", avatar: require("./images/Palutena.png") },
  { name: "Peach", avatar: require("./images/Peach.png") },
  { name: "Pikachu", avatar: require("./images/Pikachu.png") },
  { name: "Pit", avatar: require("./images/Pit.png") },
  { name: "R.O.B.", avatar: require("./images/ROB.png") },
  { name: "Robin", avatar: require("./images/Robin.png") },
  { name: "Rosalina & Luma", avatar: require("./images/Rosalina.png") },
  { name: "Roy", avatar: require("./images/Roy.png") },
  { name: "Ryu", avatar: require("./images/Ryu.png") },
  { name: "Samus", avatar: require("./images/Samus.png") },
  { name: "Sheik", avatar: require("./images/Sheik.png") },
  { name: "Shulk", avatar: require("./images/Shulk.png") },
  { name: "Sonic", avatar: require("./images/Sonic.png") },
  { name: "Toon Link", avatar: require("./images/ToonLink.png") },
  { name: "Villager", avatar: require("./images/Villager.png") },
  { name: "Wario", avatar: require("./images/Wario.png") },
  { name: "Wii Fit Trainer", avatar: require("./images/WiiFitTrainer.png") },
  { name: "Yoshi", avatar: require("./images/Yoshi.png") },
  { name: "Zelda", avatar: require("./images/Zelda.png") },
  { name: "Zero Suit Samus", avatar: require("./images/ZeroSuitSamus.png") }
];
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
    this.state = {
      characterSelected: null,
      characterList: smashCharacters
    };
  }

  componentDidMount() {
    this.refs.searchBar.focus();
  }

  onCharacterSelected = item => {
    if (this.state.characterSelected === item.name) {
      this.setState({ characterSelected: null });
    } else {
      this.setState({ characterSelected: item.name });
    }
  };

  filterCharacters = change => {
    this.setState({
      characterList: smashCharacters.filter(character =>
        character.name.includes(change)
      )
    });
  };

  resetCharactersList = () => {
    this.setState({ characterList: smashCharacters });
  };

  render() {
    return (
      <Container>
        <CharacterSelectionHeader
          navigation={this.props.navigation}
          characterSelected={this.state.characterSelected}
        />
        <SearchBar
          ref="searchBar"
          placeholder="Search"
          onChangeText={this.filterCharacters}
          onCancelButtonPress={this.textChange}
        />
        <CharacterList
          style={styles.container}
          characters={this.state.characterList}
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
