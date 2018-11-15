import io from "socket.io-client";
import { socketServer } from "../constants";
const socket = io(socketServer);

export default socket;