export function userReducers(state = "sujan ahmed", action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
}
