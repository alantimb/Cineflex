import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Seat from "../components/Seat";
import LoadingGif from "../assets/images/loading.gif";
import BuyerForm from "../components/BuyerForm";
import SeatsCaption from "../components/SeatsCaption";

export default function Seats({ setSuccessData }) {
  const { idSessao } = useParams();
  const seatsURL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
  const [seats, setSeats] = useState(undefined);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatsColors = {
    selected: { background: "#1AAE9E", border: "#0E7D71" },
    available: { background: "#C3CFD9", border: "#808F9D" },
    unavailable: { background: "#FBE192", border: "#F7C52B" },
  };

  useEffect(() => {
    axios
      .get(seatsURL)
      .then((res) => setSeats(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  if (!seats) {
    return (
      <Loading>
        <img src={LoadingGif} />
      </Loading>
    );
  }

  function handleSeat(seat) {
    if (seat.isAvailable === false) {
      return alert("Assento não disponível.");
    } else {
      const selected = selectedSeats.some((s) => seat.id === s.id);
      if (selected) {
        const selectedSeatsList = selectedSeats.some((s) => seat.id === s.id);
        setSelectedSeats(selectedSeatsList);
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  }

  return (
    <SeatsPageContainer>
      <h2>Selecione o(s) assento(s)</h2>
      <SeatsContainer>
        {seats.seats.map((s, i) => (
          <Seat
            key={i}
            seat={s}
            handleSeat={handleSeat}
            seatsColors={seatsColors}
            selected={selectedSeats.some((r) => s.id === r.id)}
          />
        ))}
      </SeatsContainer>
      <SeatsCaption seatsColors={seatsColors} />
      <BuyerForm
        seats={seats}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      <Footer
        movieTitle={seats.movie.title}
        moviePoster={seats.movie.posterURL}
        movieData={seats.day.weekday}
        movieTime={seats.name}
      />
    </SeatsPageContainer>
  );
}

const Loading = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeatsPageContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-top: 70px;
  margin-bottom: 120px;

  h2 {
    color: #293845;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const SeatsContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  gap: 5px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
