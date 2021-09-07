import axios from "axios";
const url = "https://whispering-lowlands-59826.herokuapp.com/api/meme";
// const url = "http://localhost:5000/api/meme";
export const fetchMeme = () => axios.get(url);
export const createMeme = (meme) => axios.post(url, meme);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);
