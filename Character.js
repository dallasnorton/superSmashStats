import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import { Icon } from 'native-base';


export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {characterSelected: false};
  }

  onPress = () => {
    this.setState({characterSelected: !this.state.characterSelected});
  }
  
  render() {
    return (
      <TouchableHighlight 
        onPress={this.onPress} 
        style={styles.container}
        underlayColor={'transparent'}
      >
        <View>
          <Image source={this.props.avatar} resizeMode="contain" style={styles.stretch}/>
          {this.state.characterSelected ? <Icon name='ios-checkmark-circle' style={styles.selectedIcon} /> : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    padding: 10
  },
  stretch: {
    width: '100%',
  },
  selectedContainer: {
    backgroundColor: '#B0B0B0'
  },
  selectedIcon: {
    color: 'rgb(76, 217, 100)',
    position: 'absolute',
    top: -5,
    right: -5
  }
});