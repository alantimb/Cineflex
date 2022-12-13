import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <NavBarContainer>
      <Link to="/">
        <h1>CINEFLEX</h1>
      </Link>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #c3cfd9;
  color: #e8833a;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;

  a {
    text-decoration: none;
    color: #e8833a;
  }
`;
