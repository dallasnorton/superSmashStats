import React from 'react';
import { Header, Left, Right, Body, Title } from 'native-base';
import BackButton from './BackButton';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <BackButton navigation={this.props.navigation}/>
        </Left>
        <Body>
          <Title>{this.props.characterSelected}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
