import { PREVIOUS_MESSAGES, SET_LOGIN_NAME, SET_SOCKET_ID } from "./constants";
import { getPreviousMessages } from "./utils/getPreviousMessages";

export const sendLoginName = name => ({
  type: SET_LOGIN_NAME,
  payload: name
});

export const getPreviousChatMessages = (id) => {
  return function (dispatch) {
    return getPreviousMessages(id).then(
      data => dispatch({ type: PREVIOUS_MESSAGES, payload: data })
  )}
};

export const setSocketConnectionId = socketId => ({
  type: SET_SOCKET_ID,
  payload: socketId
});