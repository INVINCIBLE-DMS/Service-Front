import React from "react";
import { styled } from "styled-components";

export const Speech = ({ messege }) => {
  return (
    <div>
      <Bubble>{messege}</Bubble>
      <Box>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='33'
          height='29'
          viewBox='0 0 33 29'
          fill='none'>
          <path
            d='M0.193353 0.986266L32.2363 0.958916L16.2385 28.7226L0.193353 0.986266Z'
            fill='#FF49C2'
          />
        </svg>
      </Box>
    </div>
  );
};

const Bubble = styled.div`
  text-align: center;
  line-height: 48px;
  color: white;
  font-size: 24px;
  font-weight: 400;
  width: 340px;
  height: 54px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.strongPink};
`;

const Box = styled.div`
  margin-left: 30px;
  position: relative;
  bottom: 2px;
`;
