import { SET_LOGIN_NAME, SET_SOCKET_ID } from "./constants";

export const sendLoginName = name => ({
  type: SET_LOGIN_NAME,
  payload: name
});

export const setSocketConnectionId = socketId => ({
  type: SET_SOCKET_ID,
  payload: socketId
});