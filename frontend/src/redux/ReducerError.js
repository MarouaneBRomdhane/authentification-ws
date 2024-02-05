import { ALERTERROR, CLEARERROR } from "./ActiontypeError";

const initialState = [];
export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERTERROR:
      return [...state, payload];
    case CLEARERROR:
      return state.filter((e) => e.id !== payload);
  }
};
