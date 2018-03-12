import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Button, Left, Right, Body} from 'native-base';
import CharacterList from './CharacterList';

class HeaderComponent extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button 
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>Cancel</Text>
          </Button>
        </Left>
        <Right>
          <Button 
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>Submit</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default class CharacterSelectionModalScreen extends React.Component {
  render() {
    return (
      <View>
        <HeaderComponent
          navigation={this.props.navigation}
        />
        <CharacterList style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});