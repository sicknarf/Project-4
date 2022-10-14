import { getToken } from "./user-services";
import sendRequest from "./send-request";

// http://localhost:3001/api/users
const BASE_URL = '/api/users';

export async function signUp(userData){
    return sendRequest(`${BASE_URL}`, 'POST', userData)
}

export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`);
}

export async function findUser(userId){
    return sendRequest(`${BASE_URL}/find-user/${userId}`,)
}