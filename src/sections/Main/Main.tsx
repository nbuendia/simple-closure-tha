"use client";

import { useFetchMovies } from "@/hooks";

import { Card } from "@/components/Card";

import styles from "./styles.module.css";

export default function Main() {
  const { movies } = useFetchMovies();

  function formatDate(date: string) {
    return new Date(date)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ");
  }

  return (
    <div className={styles.container}>
      {movies && movies.map((movie, idx) => (
        <Card key={idx}>
          <h4 className={styles.title}>
            {movie.title}
          </h4>

          {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.image} />}
          {!movie.poster_path && <span className={`material-symbols-outlined ${styles.imageIcon}`}>broken_image</span>}

          <span>
            <h5>RELEASE DATE:</h5>
            <p>{formatDate(movie.release_date)}</p>
          </span>
        </Card>
      ))}
    </div>
  );
}
