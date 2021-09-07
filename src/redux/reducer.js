import {
  MEMES_LIST_REQUEST,
  MEMES_LIST_SUCCESS,
  MEMES_LIST_FAIL,
  CREATE_MEMES,
  DELETE_MEMES,
} from "./constant";

export const MemeReducer = (state = { loading: true, memes: [] }, action) => {
  switch (action.type) {
    case MEMES_LIST_REQUEST:
      return { loading: true };
    case MEMES_LIST_SUCCESS:
      return { loading: false, memes: action.payload };
    case MEMES_LIST_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_MEMES:
      return { memes: [...state.memes, action.payload] };
    case DELETE_MEMES:
      return {
        memes: state.memes.filter((meme) => meme._id !== action.payload),
      };
    default:
      return state;
  }
};
