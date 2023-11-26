import React, { useState } from "react";
import { styled } from "styled-components";

export const Progress = () => {
  return (
    <Wrapper>
      <Text>Question 13/30</Text>
      <ProgressBar>
        <Progress_></Progress_>
      </ProgressBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const Text = styled.div`
  font-size: 24px;
`;

const ProgressBar = styled.div`
  width: 600px;
  height: 16px;
  border-radius: 30px;
  border: ${({ theme }) => theme.color.normalPink} 1px solid;
`;

const Progress_ = styled.div`
  width: ${({ width }) => width + "px"};
  height: 16px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.normalPink};
`;
