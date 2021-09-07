import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemes } from "../redux/action";
import { deleteMemes } from "../redux/action";

const Memes = () => {
  const state = useSelector((state) => state.Memes.memes);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);
  const deleteItem = (_id) => {
    dispatch(deleteMemes(_id));
  };
  return (
    <div className="memes">
      {state?.map((x, i) => {
        const { image, _id } = x;
        return (
          <div className="memesWrapper" key={i}>
            <div className="info">
              <img src={image} alt="" />
              <button onClick={() => deleteItem(_id)}>x</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Memes;
