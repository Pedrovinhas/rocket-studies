import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";


export default function Finder() {
  const [movie, setMovie] = useState("");

  const fetchMovie = async () => {
    const randomMovie = Math.floor(Math.random() * 10000);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);

        console.log(response);

        setMovie(data);
      })
      .catch((error) => console.error("ocorreu um erro"));
  };


  const shuffleMovie = () => {
    fetchMovie();
  };

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
