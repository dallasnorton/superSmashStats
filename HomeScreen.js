import React from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from "native-base";
import Players from "./Players";

// addUser = () => {
//   AsyncStorage.setItem(
//     "SuperSmashStatsStore:users",
//     JSON.stringify({
//       name: "Dallas Norton",
//       avatar:
//         "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAfAMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAAAQIGAwQFB//EADgQAAICAgAEAwMKBAcAAAAAAAABAgMEEQUGElEhMUETYaEiMjRxcpGxwdHhI0KB8BQVFjViY3P/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAVnOMIuU2operekdXiOdVh1/Kk/aS+bGPmZXJyLMmxytnOXZSlvQGns4vg1vTu39mLZw5HHsWtL2Slbvsta+8y7ZVsDQ/wCpIdX0aWvtrZ6uHm0ZtfXRPevnRfg4/WjENl8bJsxb43Uy1KPxXZgb0HiR5kxNpSruS76X6nrY2RVlVK2ianB+qA5QAAAAAAADiyblRj2WtbUIuWu5ynT4u9cNyH/wAyeRdPItlbbLc5eZxNhsqAZDYbKtgGyGw2VbANmi5Stlq+t6cPCS8fFP6vf+TM2ely3Jx4xUk9KSkn71rf5IDagAAAAAAAHT4ut8NyV/1tncOvnpSwr4yaSlXJbb15oDEEMbKsAyGGVbANlQQwDPT5aW+MVe6Mn8Dymevyp0/wCatyklqqWtvze1+4GzAAAAAAAAM3zVbL21NW/kqLlru/7RpDO810y6qMhJ9OnB+71X5gZ9shsbKtgGyoIbANlWw2Q2UGyu3vabTXkw2VSlKSjBNyk9JL1YH0bh1sruH41s3uU6otvu9HZODBpePh0UvzrrjF/Wkc5AAAAAADiyKK8mmdV0eqElpo5QBkeNcIjw+mF1dk5xlPpfUl4djxjfcRxVmYllEvDqXg+z9GYK2EqrJV2LpnFtNdmBVlWwyGyg2VbDZUCYRlZOMILc5NRiu7ZteGcvY2Dke3c53TXzOpaUf3PE5UwXkZv+Jmv4VHl75en6m0IAAAAAAAAAAAGX5uxaq3VkwWrJvol7/Dz+s0tlkK4uVk4wivWT0jMc05+LlU01490bJQm3Lp8ta7gZ3ZDZDZDZQZCW2l3YIT1JN+SaCPpODi1YWNCihahFf1b7s7B0sXimDla9hlVyb/l3p/czubIqQAAAAA6OXxbBxJOFt6615xiupr7vI4OYs2WHgfwpdNlr6Ytend/33MYwNLkc0wW1jY7fvsevgjy8jj/EbvBXKpdq46+L8TzGQ2UWtsnbLqtnKcu85Ns4myWyoBkMFWwg2Q2GyrYEM7ONxPNxPo+VbBL+Xq2vufgdRshgaLF5vza/DIqquXdfJf6fA9bF5u4fbpXxtofvj1L4foYYqwPq2LlY+XUrca6FsO8HvRzHzHgnEZ8N4jVbGWq5SUbV6OP7eZ9N8/IiszzjL5eLD01J/gZxmg5w+k432H+JnmAbKthlWUGQCGEQyGwyrANlWGVYBkAhgGyrYZVgRLxTR9YwZu3Bx7G9uVUW/wCqPkzPq3Cf9rw//CH4Iiv/2Q=="
//     })
//   ).then(value => console.log("success"));
// };

// getUsers = () => {
//   AsyncStorage.getItem("SuperSmashStatsStore:users").then(value =>
//     console.log(JSON.parse(value))
//   );
// };

export default class HomeScreen extends React.Component {
  // componentDidMount() {
  //   getUsers();
  // }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>{"Players"}</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("CreatueUser")}
            >
              <Icon name="md-add" />
            </Button>
          </Right>
        </Header>
        <Players navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  }
});
