import * as types from "./actionType";
import axios from "axios";

const userAdded = (user) => ({
  type: types.SIGNUP_USER,
  payload: user,
});

const userLoggedIn = (user) => ({
  type: types.LOGIN_USER,
  payload: user,
});

//Signup user
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post("https://moives-app-default-rtdb.firebaseio.com/new.json", user)
      .then((res) => {
        //console.log("response", res.data.books);
        dispatch(userAdded(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Login Users
export const loginUser = (user) => {
  return function (dispatch) {
    axios
      .post(
        "https://moives-app-default-rtdb.firebaseio.com/emailData.json",
        user
      )
      .then((res) => {
        //console.log("response", res.data.books);
        dispatch(userLoggedIn(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
