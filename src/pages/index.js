import React from 'react'
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import styled from "styled-components";
export default function Index() {

  const Div = styled.div`
  background-color: #DAA520;
`;

return (
  <Div>
   <Header />
   <Main />
  </Div>
)
}