import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTopMovies } from "../../services/getData";
import { getImages } from "../../utils/getImages"; // AQUI TAVA O ERRO

import { Container, Grid, Card } from "./styles";

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllMovies = async () => {
      const topMovies = await getTopMovies();
      setMovies(topMovies);
    };

    getAllMovies();
  }, []);

  const detailMovie = (movieId) => {
    navigate(`/detalhe/${movieId}`); // tem que ser /detalhe igual no Home
  };

  return (
    <Container>
      <h1>Top Filmes</h1>
      <Grid>
        {movies &&
          movies.map((movie) => (
            <Card key={movie.id} onClick={() => detailMovie(movie.id)}>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Card>
          ))}
      </Grid>
    </Container>
  );
}
export default Movies;