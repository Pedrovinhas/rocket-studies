import "./components/styles/global.scss";
import Header from "./components/Header";
import Finder from "./components/Finder";
import MovieSection from "./components/MovieSection";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <MovieSection/>
      <Finder/>
    </>
  );
}

export default App;
