import { Children } from "react";
import styled from "styled-components";

const Button = ({children,blue}) => {
    return(
        <StyledButton blue={blue}>{children}</StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: ${props => props.blue ? "blue" : "grey"}; 
    padding: 10px 15px;
  border: none;
  border-radius: 14px;
  color: white;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  cursor: pointer; 
  margin: 10px;
`;



export {Button};