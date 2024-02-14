import styled from "styled-components"
 export const Button = styled.button`
width: 220px;
height: 44px;
background: black;
color: white;
border-radius: 5px;
border: 1px solid black;
font-size: 18px;
transition:0.3s ease-in;
/* margin-left: auto; */




&:hover
{
  background-color: white ;
  color: black;
  cursor: pointer;
  transition:0.3s ease-in;
  
}
`

export const OutlineButton = styled(Button)`
background-color: white;
color:black;

&:hover
{
  background-color: black ;
  color: white;
  cursor: pointer;
  transition:0.3s ease-in;
  
}

`