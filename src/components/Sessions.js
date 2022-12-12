import styled from "styled-components";

export default function Sessions() {
  return (
    <SessionsPageContainer>
      <h2>Selecione o filme</h2>
    </SessionsPageContainer>
  );
}

const SessionsPageContainer = styled.div`
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
