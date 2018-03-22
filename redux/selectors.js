export const selectWinsForUser = (state, userName) => {
  return state.winsByUser[userName];
};

export const selectUsers = state => {
  return state.users;
};
