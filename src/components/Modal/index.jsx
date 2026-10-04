import { useEffect, useState } from "react";

import { getMovieVideos } from "../../services/getData";
import { Container, Background, CloseButton } from "./styles";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }
    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>x</CloseButton>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
