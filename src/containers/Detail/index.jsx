import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Credits from "../../components/Credits";
import Slider from "../../components/Slider";
import SpanGenres from "../../components/SpanGenres";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      try {
        const [movie, videos, credits, similar] = await Promise.all([
          getMovieById(id),
          getMovieVideos(id),
          getMovieCredits(id),
          getMovieSimilar(id),
        ]);
        setMovie(movie);
        setMovieVideos(videos);
        setMovieCredits(credits);
        setMovieSimilar(similar);
      } catch (error) {}
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.slice(0, 5).map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={"Filmes Similares"} />
          )}
        </>
      )}
    </>
  );
}

export default Detail;
