import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const EndBtn = () => {
  const link = useNavigate();

  const onClick = () => {
    link("/home");
  };

  return <Wrapper onClick={onClick}>설문완료</Wrapper>;
};

const Wrapper = styled.div`
  width: 280px;
  height: 60px;
  border-radius: 50px;
  margin-top: 200px;
  text-align: center;
  font-size: 24px;
  line-height: 54px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.normalPink};
  color: white;
`;
