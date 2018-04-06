const initialState = {
  users: [],
  winsByUser: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(item => item.name !== action.payload.name)
      };
    case "ADD_WIN":
      return {
        ...state,
        winsByUser: {
          ...state.winsByUser,
          [action.payload.userName]: {
            ...state.winsByUser[action.payload.userName],
            [action.payload.characterName]:
              (state.winsByUser[action.payload.userName] &&
                state.winsByUser[action.payload.userName][
                  action.payload.characterName
                ] + 1) ||
              1
          }
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
