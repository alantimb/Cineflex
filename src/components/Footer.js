import styled from "styled-components";

export default function Footer({
  movieTitle,
  moviePoster,
  movieData,
  movieTime,
}) {
  return (
    <FooterContainer>
      <MoviePosterContainer src={moviePoster} />
      <MovieInformationsContainer>
        <p>{movieTitle}</p>
        <p>
          {movieData} - {movieTime}
        </p>
      </MovieInformationsContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  bottom: 0px;
  position: fixed;
  background-color: #9eadba;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MoviePosterContainer = styled.img`
  width: 64px;
  height: 89px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 10px;
`;

const MovieInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  color: #293845;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
`;
