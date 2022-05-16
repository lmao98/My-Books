// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { AlertError, makeRequest } from "./axios";

// const auth = getAuth();

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// const provider = new GoogleAuthProvider();

const AUTH_ENDPOINTS = {
  login: "/login",
  signup: "/register",
};

/**
 *
 * @param {*} email
 * @param {*} password
 * @param {*} password_confirm
 * @returns {Promise} Promise<{user,token}>
 */
export function signup(email, password, password_confirm) {
  if (password != password_confirm) throw new AlertError("password and password confirmation do not match");
  return makeRequest(AUTH_ENDPOINTS.signup, "post", { email, password });
}

/**
 *
 * @param {*} email
 * @param {*} password
 * @returns {Promis} Promise<{user,token}>
 */
export function signin(email, password) {
  return makeRequest(AUTH_ENDPOINTS.login, "post", { email, password });
}

export function signout() {}
