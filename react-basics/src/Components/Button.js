import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.main};
  padding: 0.5rem, 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  ${({ primary }) =>
    primary &
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;
const MainButtonStyle = styled(StyledButton)`
  margin: 1rem;
`;
const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default StyledButton;
