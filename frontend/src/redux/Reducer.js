import { LOGIN } from "./Actiontype";

const initialState = { user: {} };

export const User_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("Token", payload.Login_Token);
      return { ...state, user: payload.User };

    default:
      return state;
  }
};
