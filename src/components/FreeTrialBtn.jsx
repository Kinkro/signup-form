import React from "react";
import styled from "styled-components";

const FreeTrialBtn = () => {
  return (
    <ButtonContainer>
      <Button>
        <strong>Try it free 7 days </strong> then 20$/month thereafter
      </Button>
    </ButtonContainer>
  );
};

export default FreeTrialBtn;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  color: white;
  min-width: 325px;
  width: 95%;
  max-width: 450px;
  padding: 1rem;
  border: none;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: ${({ theme }) => theme.colors?.purple};
  border-radius: 0.5rem;
`;
