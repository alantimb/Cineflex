import styled from "styled-components";

export default function BuyerForm() {
  return (
    <DataSubmissionForm>
      Nome do comprador:
      <input
        name="name"
        type="text"
        placeholder="Digite seu nome..."
        required
      />
      CPF do comprador:
      <input name="cpf" type="text" placeholder="Digite seu CPF..." required />
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
    &:disabled {
      background-color: lightgray;
    }
    &:hover {
      cursor: pointer;
      opacity: 80%;
    }
  }
`;
