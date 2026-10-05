

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTopSeries } from "../../services/getData";
import { getImages } from "../../utils/getImages";

import { Container, Grid, Card } from "./styles";

function Series() {
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllSeries = async () => {
      const data = await getTopSeries();
      setSeries(data);
    };

    getAllSeries();
  }, []);

  const detailSerie = (serieId) => {
    navigate(`/detalhe/${serieId}`);
  };

  return (
    <Container>
      <h1>Top Séries</h1>
      <Grid>
        {series &&
          series.map((serie) => (
            <Card key={serie.id} onClick={() => detailSerie(serie.id)}>
              <img src={getImages(serie.poster_path)} alt={serie.name} />
              <h3>{serie.name}</h3>
            </Card>
          ))}
      </Grid>
    </Container>
  );
}

export default Series;
