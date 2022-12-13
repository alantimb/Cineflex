import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import LoadingGif from "../assets/images/loading.gif";

export default function Sessions() {
  const { idFilme } = useParams();
  const sessionURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    axios
      .get(sessionURL)
      .then((res) => setSession(res.data))
      .catch((error) => console.log(error.response.data));
  }, []);

  if (!session) {
    return (
      <Loading>
        <img src={LoadingGif} />
      </Loading>
    );
  }

  return (
    <SessionsPageContainer>
      <h2>Selecione o horário</h2>
      <SessionsContainer>
        {session.days.map((m, i) => (
          <SessionContainer data-test="movie-day">
            <p>
              {m.weekday} - {m.date}
            </p>
            {m.showtimes.map((s) => (
              <Link to={`/assentos/${s.id}`} key={s.id} data-test="showtime">
                <button>{s.name}</button>
              </Link>
            ))}
          </SessionContainer>
        ))}
      </SessionsContainer>
      <Footer movieTitle={session.title} moviePoster={session.posterURL} />
    </SessionsPageContainer>
  );
}

const Loading = styled.div`
  width: 100vw;
  height: 100vh;

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
    margin-top: 100px;
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

    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }
`;
