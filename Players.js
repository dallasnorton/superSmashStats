import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Header, List, Title, Body } from 'native-base';
import Player from './Player';

export default class Players extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <Container>
        <List>
          <FlatList 
            data={this.state.data}
            renderItem={({item}) => 
              <Player
                avatar={{ uri: item.picture.thumbnail }}
                name={item.name}
                navigation={this.props.navigation}
              />
            }
            keyExtractor={item => item.email}
          />
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
