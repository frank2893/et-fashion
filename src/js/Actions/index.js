import { ADD_INFO, USER_LOADED, USER_OUT, USERDATA_LOADED, DATA_REQUESTED } from "../Constant/action-types";

export function addRequest(payload) {
    return {type: ADD_INFO, payload}
}

export function getData(url) {
    return {type: DATA_REQUESTED, payload: {url}}
}

export function logIn(payload) {
    console.log('usuario?', payload)
    return { type: USER_LOADED, payload}
}

export function LogOut() {
    return {type: USER_OUT}
}

export function getUser() {
    return { type: USERDATA_LOADED}
}