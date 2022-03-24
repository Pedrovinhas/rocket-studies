import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function Finder() {
  const [movie, setMovie] = useState();
  
  const fetchMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=${import.meta.env.VITE_API_KEY}`
      )
      .then(response => setMovie(response.data))
      .catch((err) => {
        console.error("ocorreu um erro");
      });
  };

  const shuffleMovie = () => {
    fetchMovie();
    
  };

  /* Não consegui fazer usando useEffect

  useEffect(() => {
     const fetchMovie = async () => {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/550?api_key=a0347f9bd68f3673dcf5dc2fea496477"
      );
      console.log(movie);
      setMovie(result.data);
    };

    fetchMovie();
  }, []);
  */

  return (
    <section className={styles.finderSection}>
      <button onClick={shuffleMovie}>
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
