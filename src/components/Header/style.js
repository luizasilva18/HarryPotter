import styled from "styled-components";
export const Imge = styled.img`
width: 350px;
margin-bottom:2rem;
margin-top:2rem;
`;
export const BoxInicio= styled.div`
display: flex;
align-items: center;
justify-content:center;
`;

export const ListItem = styled.li`
  color:#ffbf00;
margin-top:1.3rem;

  &:hover {
    color: #b8860b;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  list-style: none;
  margin-left:-2rem;
  font-size: 20px;
  background-color:black;
  height: 4rem;
`;