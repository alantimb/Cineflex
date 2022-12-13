import styled from "styled-components";

export default function SeatsCaption({ seatsColors }) {
  return (
    <CaptionContainer>
      <CaptionItem>
        <CaptionCircle status={seatsColors.selected} />
        Selecionado
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle status={seatsColors.available} />
        Disponível
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle status={seatsColors.unavailable} />
        Indisponível
      </CaptionItem>
    </CaptionContainer>
  );
}

const CaptionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
const CaptionCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  border: 1px solid ${(props) => props.status.border};
  background-color: ${(props) => props.status.background};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
`;
