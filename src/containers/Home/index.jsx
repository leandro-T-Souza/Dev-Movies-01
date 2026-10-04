import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllDate() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(
          ([
            movieData,
            topMoviesData,
            topSeriesData,
            popularSeriesData,
            topPeopleData,
          ]) => {
            setMovie(movieData);
            setTopMovies(topMoviesData);
            setTopSeries(topSeriesData);
            setPopularSeries(popularSeriesData);
            setTopPeople(topPeopleData);
          },
        )
        .catch((error) => console.log(error));
      }
      
    getAllDate();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailler
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Artistas"} />}
    </>
  );
}
export default Home;
