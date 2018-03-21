import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Container, Header, List, Title, Body } from "native-base";
import Player from "./Player";
import { connect } from "react-redux";

class Players extends React.Component {
  render() {
    return (
      <Container>
        <List>
          <FlatList
            data={this.props.users}
            renderItem={({ item }) => (
              <Player
                avatar={{ uri: item.image }}
                name={item.name}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={item => item.name.first + item.name.last}
          />
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});

export default connect(({ users }) => ({ users }))(Players);
