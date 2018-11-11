const initialState = {
  name: ""
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_NAME":
      return Object.assign({}, state, {
        name: action.payload
      });
    default:
      return state;
  }
};

