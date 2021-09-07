import React, { useState } from "react";
import UploadBtn from "./UploadBtn";
import { createMemes } from "../redux//action";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";

const SearchBar = () => {
  const [state, setState] = useState({
    image: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMemes(state));
  };
  return (
    <div className="bar">
      <form onSubmit={handleSubmit}>
        <FileBase64
          multiple={false}
          onDone={({ base64 }) =>
            setState({
              ...state,
              image: base64,
            })
          }
        />

        <UploadBtn />
      </form>
    </div>
  );
};

export default SearchBar;
