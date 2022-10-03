import { getToken } from "./user-services";

// http://localhost:3001/api/users
const BASE_URL = '/api/users';

export async function signUp(userData){
    return sendRequest(`${BASE_URL}`, 'POST', userData)
}

export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

async function sendRequest(url, method='GET', payload=null){
    const options = {method};
    // if you want to saend data through the servers,
    if(payload) {
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(payload)
    }
    const token = getToken();
    if(token){
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }    
    const res = await fetch(url, options);
    if(res.ok){
        return res.json();
    } else {
        throw new Error('An error has occured')
        }
    }



export function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`);
}