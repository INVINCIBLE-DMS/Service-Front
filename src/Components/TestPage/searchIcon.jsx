import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";

export const SearchIcon = () => {
  return (
    <Block>
      <Icon icon='ic:round-search' width='230px' color='#FF49C2' />
    </Block>
  );
};

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Block = styled.div`
  animation: ${floatAnimation} 1.2s linear infinite;
`;
