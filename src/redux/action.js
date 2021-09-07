import {
  MEMES_LIST_SUCCESS,
  MEMES_LIST_FAIL,
  CREATE_MEMES,
  CREATE_MEMES_FAIL,
  DELETE_MEMES,
  DELETE_MEMES_FAIL,
} from "./constant";

import * as api from "./api";

//CREATE_MEME
export const createMemes = (meme) => async (dispatch) => {
  try {
    const { data } = await api.createMeme(meme);

    dispatch({ type: CREATE_MEMES, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_MEMES_FAIL,
      payload: "failed to create meme",
    });
  }
};

//DELETE_MEME
export const deleteMemes = (id) => async (dispatch) => {
  try {
    await api.deleteMeme(id);
    dispatch({ type: DELETE_MEMES, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_MEMES_FAIL,
      payload: "error",
    });
  }
};
//GET_ALL_MEMES_FROM BACKEND
export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeme();
    console.log(data);
    dispatch({
      type: MEMES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEMES_LIST_FAIL,
      payload: "error",
    });
  }
};
