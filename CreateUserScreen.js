import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Form,
  Item,
  Label,
  Input,
  Button,
  Title,
  Content
} from "native-base";
import BackButton from "./BackButton";

class NewPlayerForm extends React.Component {
  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>First Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}

class SubmitButton extends React.Component {
  render() {
    return (
      <Content padder>
        <Button full style={styles.buttonContainer}>
          <Title style={{ color: "#fff" }}>Submit</Title>
        </Button>
      </Content>
    );
  }
}

export default class CreateUserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <BackButton navigation={this.props.navigation} />
          </Left>
          <Body>
            <Title>Add Player</Title>
          </Body>
          <Right />
        </Header>
        <NewPlayerForm />
        <SubmitButton />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10
  }
});
