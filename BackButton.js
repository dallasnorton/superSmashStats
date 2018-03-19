import React from 'react';
import {Button, Icon} from 'native-base';

export default class BackButton extends React.Component {
  render() {
    return (
      <Button
        transparent
        onPress={() => this.props.navigation.goBack()}
      >
        <Icon name='ios-arrow-back' />
      </Button>
    );
  }
}