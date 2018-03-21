import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import PlayerScreen from "./PlayerScreen";
import CreateUserScreen from "./CreateUserScreen";
import CharacterSelectionModalScreen from "./CharacterSelectionModalScreen";

import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./redux/store";

const MainStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    PlayerDetails: { screen: PlayerScreen },
    CreatueUser: { screen: CreateUserScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const RootStack = StackNavigator(
  {
    Main: { screen: MainStack },
    CharacterSelectionModal: { screen: CharacterSelectionModalScreen }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
