import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-wrap: wrap;
margin-left:9rem;
`;

export const Img = styled.img`
max-width: 10rem;
margin-top:1rem;
`;
export const Box = styled.div`
width: 20rem;
text-align: center;
border: 4px solid black;
margin-right: 3rem;
margin-bottom: 3rem;
margin-top:2rem;
transition: 0.3s;
&:hover {
  cursor: pointer;
  background-color: black;
  transition-property: background-color;
  color: #ffdf80;
  border: 4px solid  #ffbf00;
  transform: scale(110%);
}
`;