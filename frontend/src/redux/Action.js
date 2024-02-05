import { GETCURRENT, LOGIN, REGISTER } from "./Actiontype";
import axios from "axios";

export const Login_action = (data, Navigate) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:8001/User/Login", data)
      .then((res) => dispatch({ type: LOGIN, payload: res.data }));
    Navigate("/Home");
  } catch (error) {
    console.log(error);
  }
};
export const Register_action = (data, Navigate) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:8001/User/Register", data)
      .then((res) => dispatch({ type: REGISTER, payload: res.data }));
    Navigate("/Home");
  } catch (error) {
    console.log(error);
  }
};
export const GetCurrent = () => async (dispatch) => {
  const config = {
    Headers: { Token: localStorage.getItem("Token") },
  };
  try {
    await axios
      .get("http://localhost:8001/User/GetUser", config)
      .then((res) => dispatch({ type: GETCURRENT, payload: res.data }));
  } catch (error) {}
};
