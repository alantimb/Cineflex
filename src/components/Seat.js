import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Seat({ seat, handleSeat, seatsColors, selected }) {
  const [seatStatus, setSeatStatus] = useState(seatsColors.selected);

  useEffect(() => {
    if (selected) {
      setSeatStatus(seatsColors.selected);
    } else if (seat.isAvailable) {
      setSeatStatus(seatsColors.available);
    } else {
      setSeatStatus(seatsColors.unavailable);
    }
  }, [selected, seat]);

  return (
    <SeatContainer seatStatus={seatStatus} onClick={() => handleSeat(seat)}>
      {seat.name}
    </SeatContainer>
  );
}

const SeatContainer = styled.li`
  &:hover {
    cursor: pointer;
    opacity: ${(props) =>
      props.seatStatus.background === "#FBE192" ? 100 : 50}%;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;

  font-size: 11px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.seatStatus.border};
  background-color: ${(props) => props.seatStatus.background};
`;
