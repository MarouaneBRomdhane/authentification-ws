import { GETCURRENT, LOGIN, REGISTER } from "./Actiontype";

const initialState = { user: {} };

export const User_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("Token", payload.Login_Token);
      return { ...state, user: payload.User };
    case REGISTER:
      localStorage.setItem("Token", payload.Token);
      return { ...state, user: payload.User };
    case GETCURRENT:
      return { ...state, user: payload.user };
    default:
      return state;
  }
};
