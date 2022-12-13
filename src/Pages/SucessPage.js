import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SucessPage({ successData }) {
  console.log(successData);
  const { movie, date, hour, buyer, cpf, seats } = successData;

  return (
    <SucessPageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <PurchaseInformationContainer data-test="movie-info">
        <h2>Filme e sessão</h2>
        <p>{movie}</p>
        <p>
          {date} {hour}
        </p>
      </PurchaseInformationContainer>

      <PurchaseInformationContainer data-test="seats-info">
        <h2>Ingresso(s)</h2>
        {seats.map((s) => (
          <p key={s}>Assento {s}</p>
        ))}
      </PurchaseInformationContainer>

      <PurchaseInformationContainer data-test="client-info">
        <h2>Comprador</h2>
        <p>Nome: {buyer}</p>
        <p>CPF: {cpf}</p>
      </PurchaseInformationContainer>

      <Link to="/" data-test="go-home-btn">
        <button>Voltar para Home</button>
      </Link>
    </SucessPageContainer>
  );
}

const SucessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
  padding-top: 70px;

  background-color: #e5e5e5;
  font-family: "Roboto";
  font-size: 24px;

  a {
    text-decoration: none;
  }
  button {
    margin-top: 50px;
    width: 225px;
    height: 43px;

    background: #e8833a;
    color: #ffffff;
    font-size: 18px;
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

  h1:nth-child(1) {
    display: flex;
    align-items: center;
    text-align: center;

    color: #247a6b;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const PurchaseInformationContainer = styled.div`
  color: #293845;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: 30px;

  h2 {
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
