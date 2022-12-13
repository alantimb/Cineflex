import styled from "styled-components";

export default function Seat({ seat, handleSeat }) {
  return (
    <SeatContainer>
      {!seat.selected ? (
        <div
          className={`seat ${seat.isAvailable}`}
          onClick={() => handleSeat(seat)}
        >
          {seat.id}
        </div>
      ) : (
        <div className={`seat selected`} onClick={() => handleSeat(seat)}>
          {seat.id}
        </div>
      )}
    </SeatContainer>
  );
}

const SeatContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;

  font-size: 11px;
  background-color: #C3CFD9;
  border: 1px solid #C3CFD9;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;
