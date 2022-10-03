import { token } from 'morgan';
import LoginForm from '../components/LoginForm/LoginForm';
import * as usersAPI from './users-api'

export async function signUp(userData){
    try{
        const token = await usersAPI.signUp(userData);
        // save the data to local storage
        localStorage.setItem('token', token);
        return getUser();
    } catch {
        throw new Error('invalid sign up')
    }
}

export async function login(credentials){
    try{
        const token = await usersAPI.login(credentials)
        localStorage.setItem('token', token);
        return getUser();
    } catch {
        throw new Error('unable to log in.')
    }
}

export function getToken(){
    // read token from local storage
    const token = localStorage.getItem('token');
    // if no token
    if (!token) return null;
    // grab the payload
    const payload = JSON.parse(atob(token.split('.')[1]));
    // const payload = JSON.parse(window.atob(token.split('.')[1]));
    // check for expiration, break it down into milliseconds
    if(payload.exp < Date.now() / 1000){
        localStorage.removeItem('token')
        return null;
    }
    return token;
}

export function getUser(){
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

// this is an example of what getUser should return
  /*
    {
  "user": {
        "name": "testuser",
        "email": "testuser@abc.com",
        "_id": "633b17c566e0c1b670182013",
        "createdAt": "2022-10-03T17:11:33.376Z",
        "updatedAt": "2022-10-03T17:11:33.376Z",
        "__v": 0
    },
      "iat": 1664817093,
      "exp": 1664903493r
    }
     */

export function logOut(){
    localStorage.removeItem('token')
}

export function checkToken(){
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr));
}