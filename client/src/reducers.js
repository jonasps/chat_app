const initialState = {
  name: "",
  socketId: ""
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_NAME":
      return Object.assign({}, state, {
        name: action.payload
      });
    case "SET_SOCKET_ID":
      return Object.assign({}, state, {
        socketId: action.payload
      });
    default:
      return state;
  }
};
