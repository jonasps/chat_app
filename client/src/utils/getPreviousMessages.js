import axios from "axios";
import { socketServer } from "../constants";

/* Get n number of latest messages, if n bigger than mac return max number */
export function getPreviousMessages(id) {
    const url = `${socketServer}/history?id=${id}`;
    return axios.get(url).then(res => {
        return res.data;
    }).catch(() => {
        return [];
    })
}