import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-size: larger;
  font-weight: bold;
  border-radius: 5%;
  margin: 1% 5% 1% 5%;
  padding: 1% 4% 1% 4%;
  border: none;
  background-color: none;
  color: ${(props) => (props.primary ? "white" : props.link ? "#2390FC" :"none")};
  background-color: ${(props) => (props.primary ? "#2390FC" : "white")};
  border: ${(props) =>
    props.dashed ? "dashed gray 3px" : props.default ? "solid gray 3px" : "none"};
`;

const Buttons = () => {
  return (
    <>
      <ButtonWrapper primary> Primary Button </ButtonWrapper>
      <ButtonWrapper default> Default Button </ButtonWrapper>
      <ButtonWrapper dashed> Dashed Button </ButtonWrapper>
      <ButtonWrapper text> Text Button </ButtonWrapper>
      <ButtonWrapper link> Link Button </ButtonWrapper>
    </>
  );
};

export default Buttons;
