import { ALERTERROR, CLEARERROR } from "./ActiontypeError";
export const alertError = (msg) => (dispatch) => {
  const id = Math.random();
  dispatch({ type: ALERTERROR, payload: { msg, id } });
  setTimeout(() => {
    dispatch({ type: CLEARERROR, payload: id });
  }, 5000);
};
