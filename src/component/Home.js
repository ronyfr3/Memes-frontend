import React from "react";
import Footer from "./Footer";
import Memes from "./Memes";
import SearchBar from "./SearchBar";
const Home = () => {
  return (
    <div className="home">
      <h1>Meme Gallery</h1>
      <SearchBar />
      <Memes />
      <Footer />
    </div>
  );
};

export default Home;
