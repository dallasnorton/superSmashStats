import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail, Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import BackButton from './BackButton';
import PlayerProfile from './PlayerProfile';

export default class PlayerScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { params } = navigation.state;
    
  //   return {
  //     title: params ? `${params.name.first} ${params.name.last}` : 'Player Details',
  //   }
  // };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    const avatar = params ? params.avatar : null;
    const fullName = params ? `${name.first} ${name.last}` : 'Player Details';

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <BackButton navigation={this.props.navigation}/>
          </Left>
          <Body>
            <Title>{fullName}</Title>
          </Body>
          <Right />
        </Header>
        <PlayerProfile 
          avatar={avatar}
          name={name}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
