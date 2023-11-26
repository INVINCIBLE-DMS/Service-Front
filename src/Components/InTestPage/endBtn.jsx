import React from "react";
import { styled } from "styled-components";

export const EndBtn = () => {
  return <Wrapper>테스트 끝내기</Wrapper>;
};

const Wrapper = styled.div`
  width: 280px;
  height: 60px;
  border-radius: 50px;
  border: black 1px solid;
  position: absolute;
  top: 50px;
  right: 50px;
  text-align: center;
  font-size: 24px;
  line-height: 54px;
`;
