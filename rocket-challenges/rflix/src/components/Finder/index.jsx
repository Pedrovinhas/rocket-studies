import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";


export default function Finder() {
  const [movie, setMovie] = useState("");

  const fetchMovie = async () => {
    const randomPage = Math.floor(Math.random() * 500);
    
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${import.meta.env.VITE_API_KEY}&page=${randomPage}`
      )
      .then((response) => {
        const data = response.data.results;
        const randomMovie = data[Math.floor(Math.random() * data.length)]
       
       setMovie(randomMovie);
      })
      .catch((error) => console.error("ocorreu um erro"));
  };


  const shuffleMovie = () => {
    fetchMovie();
  };

 
  console.log(movie)
  return (
    <section className={styles.finderSection}>
      <button type="button" onClick={shuffleMovie}>
        <img src="/logo.svg" alt="" />
        <span> Encontrar filme </span>
      </button>
      <p> {movie?.title} </p>
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </section>
  );
}
