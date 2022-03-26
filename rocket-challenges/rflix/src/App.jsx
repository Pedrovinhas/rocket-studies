import "./components/styles/global.scss";
import Header from "./components/Header";
import Finder from "./components/Finder";
import MovieSection from "./components/MovieSection";
import React from "react";
import { useState } from "react";


function App() {
  const [currentMovie, setCurrentMovie] = useState({});
  
  return (
    <>
      <Header />
      {Object.keys(currentMovie).length > 0 ? <MovieSection movie={currentMovie}/> : <div> </div>}
      <Finder setActualMovie={setCurrentMovie}/>
    </>
  );
}

export default App;
