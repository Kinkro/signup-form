import React from "react";
import styled from "styled-components";

const Heading = () => {
  return (
    <StyledHeading>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </StyledHeading>
  );
};

export default Heading;

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  width: 95%;
  margin: auto;
  padding: 5.5rem 0 3.5rem 0;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.291667px;
    color: #ffffff;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 800px) {
    max-width: 750px;
  }
`;
