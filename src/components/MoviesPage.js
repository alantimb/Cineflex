import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MoviesPage() {
  const moviesURL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    axios
      .get(moviesURL)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err.response.data));
  });

  if (!movies) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <MoviesPageContainer>
      <h2>Selecione o filme</h2>
      <MoviesContainer>
        {movies.map((m) => (
          <Link to={`/sessoes/${m.id}`} key={m.id}>
            <MovieContainer>
              <img src={m.posterURL} />
            </MovieContainer>
          </Link>
        ))}
      </MoviesContainer>
    </MoviesPageContainer>
  );
}

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoviesPageContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #293845;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  img {
    width: 130px;
    height: 190px;
  }
`;
