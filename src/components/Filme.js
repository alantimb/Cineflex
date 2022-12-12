import styled from "styled-components";
import axios from "axios";
import Link from "react-router-dom";

export default function Sessoes() {
  return (
    <>
      <filmes />
      <outros filmes />
    </>
  );
}
