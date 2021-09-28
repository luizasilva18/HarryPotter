import React, { useEffect, useState } from "react";
import { Container, Img, Box } from "./style"
import { createGlobalStyle } from "styled-components";
import axios from "axios";
export  function Main() {

 const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;
const[listPersonagem, setListPersonagem] = useState([])


const getList = async () => {
    const baseURL = await axios.get('http://hp-api.herokuapp.com/api/characters')
  setListPersonagem(baseURL.data)
  }


  useEffect(() => {
getList()
}, [])

return(
    <Container>
           <GlobalStyle /> 
      {listPersonagem.map((item) =>(
      <Box>
          <h1>{item.name}</h1>
          <p>{item.species}</p>
          <p>🛕{item.house} </p>
          <Img src={item.image} />
          </Box>
     ))}
    </Container>
)
}