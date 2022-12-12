import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export default function Sessions() {
  const { idFilme } = useParams();
  const movieURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    axios
      .get(movieURL)
      .then((res) => setMovie(res.data))
      .catch((error) => console.log(error.response.data));
  }, []);

  console.log(movie);

  if (!movie) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <SessionsPageContainer>
      <h2>Selecione o horário</h2>
      <SessionsContainer>
        {movie.days.map((m, i) => (
          <SessionContainer>
            <p>
              {m.weekday} - {m.date}
            </p>
            {m.showtimes.map((s) => (
              <button>{s.name}</button>
            ))}
          </SessionContainer>
        ))}
      </SessionsContainer>
    </SessionsPageContainer>
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

const SessionsPageContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  h2 {
    color: #293845;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const SessionsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 25px;
`;

const SessionContainer = styled.div`
  height: 120px;

  p {
    color: #293845;
    font-size: 20px;
    line-height: 23px;
  }

  button {
    width: 85px;
    height: 45px;
    margin-top: 30px;
    margin-right: 8px;

    background-color: #e8833a;
    border-radius: 3px;
    border: none;
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
  }
`;
