import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BuyerForm({
  seats,
  selectedSeats,
  setSelectedSeats,
  setSuccessData,
}) {
  const [formData, setFormData] = useState({ name: "", cpf: "" });
  const navigate = useNavigate();
  const postURL =
    "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function checkout(e) {
    e.preventDefault();

    const body = {
      ids: selectedSeats.map((s) => s.id),
      ...formData,
    };

    const info = {
      movie: seats.movie.title,
      date: seats.day.date,
      hour: seats.name,
      buyer: formData.name,
      cpf: formData.cpf,
      seats: selectedSeats.map((s) => s.name),
    };

    axios
      .post(postURL, body)
      .then((res) => {
        // setSuccessData(info);
        setSelectedSeats([]);
        navigate("/sucesso");
      }).catch((err) => console.log(err.response.status));
  }

  return (
    <DataSubmissionForm onSubmit={checkout}>
      Nome do comprador:
      <input
        name="name"
        type="text"
        value={formData.name}
        placeholder="Digite seu nome..."
        onChange={handleForm}
      />
      CPF do comprador:
      <input
        name="cpf"
        type="text"
        value={formData.cpf}
        placeholder="Digite seu CPF..."
        onChange={handleForm}
      />
      <button type="submit">Reservar assento(s)</button>
    </DataSubmissionForm>
  );
}

const DataSubmissionForm = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;

  color: #293845;
  font-family: "Roboto";
  font-size: 18px;

  input {
    width: calc(100vw - 60px);
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    margin-bottom: 25px;
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    &::placeholder {
      font-style: italic;
    }
  }

  button {
    width: 225px;
    height: 43px;
    background: #e8833a;
    color: #ffffff;
    border-radius: 3px;
    border-style: none;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    &:disabled {
      background-color: lightgray;
    }
    &:hover {
      cursor: pointer;
      opacity: 80%;
    }
  }
`;
