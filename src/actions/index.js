import backend from "../apis/backend";

import { FILLER_ACTION } from "./types";

export const simpleAction = () => {
  dispatch({ type: FILLER_ACTION, payload: true });
};

export const readData = () => async (dispatch) => {
  const { data } = await backend.get("/read-cookie");
  dispatch({ type: FILLER_ACTION, payload: data });
};
