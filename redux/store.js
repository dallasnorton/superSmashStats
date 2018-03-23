import { createStore, combineReducers } from "redux";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer);

// export default store;

// export const store = createStore(rootReducer)
// export const persistor = persistStore(store)

export default () => {
  let store = createStore(rootReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
