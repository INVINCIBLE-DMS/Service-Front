import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export const StartButton = () => {
  return (
    <Wrapper>
      <span>테스트 하기</span>
      <Icon icon='majesticons:edit-pen-4-line' width='42px' color='white' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: 70px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.normalPink};
  border-radius: 50px;
  color: white;
  font-size: 26px;
  font-weight: 400;
  cursor: pointer;
`;
