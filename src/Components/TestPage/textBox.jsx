import React from "react";
import styled from "styled-components";

export const TextBox = () => {
  return (
    <div>
      <BigText>
        <span>최고의 궁합</span>을 찾기 위해
      </BigText>
      <SmallText>당신을 이해하고 있는 중이에요!</SmallText>
    </div>
  );
};

const BigText = styled.div`
  font-size: 55px;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.color.strongPink};
  }
`;

const SmallText = styled.div`
  font-size: 30px;
  font-weight: 400;
`;
