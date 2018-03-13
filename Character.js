import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { Icon } from 'native-base';


export default class Character extends React.Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={this.props.onSelection} 
        style={styles.container}
        underlayColor={'transparent'}
      >
        <View>
          <Image source={this.props.avatar} resizeMode="contain" style={styles.stretch}/>
          {this.props.selected === this.props.name ? <Icon name='ios-checkmark-circle' style={styles.selectedIcon} /> : null}
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
  selectedIcon: {
    color: 'rgb(76, 217, 100)',
    position: 'absolute',
    top: 0,
    right: 0
  }
});