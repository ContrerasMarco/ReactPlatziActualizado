//import { Children } from "react";
import styled from "styled-components";

const Button2 = ({children,red}) => {
    return (
        <StyledButton red={red}>{children}</StyledButton>
    )
}

const StyledButton = styled.button `
  background-color: ${props => props.blue ? 'blue' : props.red ? 'red' : 'grey'};
  padding: 10px 15px;
  border: none;
  border-radius: 14px;
  color: white;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  cursor: pointer; 
  margin: 10px;
  &:hoover {
  opacity: 0.8;
  };
`;

export {Button2};