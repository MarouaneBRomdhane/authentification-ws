import { LOGIN } from "./Actiontype";
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
