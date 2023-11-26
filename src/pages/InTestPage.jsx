import React from "react";
import { styled } from "styled-components";
import { Progress } from "../Components/InTestPage/prgress";
import { EndBtn } from "../Components/InTestPage/endBtn";

export default function InTestPage() {
  return (
    <Wrapper>
      <Progress />
      <Text>당신은 천재입니까?</Text>
      <Line />
      <BtnContainer>
        <span>매우 그렇다</span>
        <Btn1></Btn1>
        <Btn2></Btn2>
        <Btn3></Btn3>
        <Btn4></Btn4>
        <Btn5></Btn5>
        <span>매우 아니다</span>
      </BtnContainer>
      <EndBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-top: 70px;
`;

const Line = styled.div`
  background-color: #a49595;
  width: 1600px;
  height: 1px;
  margin-top: 90px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 96px;
  margin-top: 200px;
  align-items: center;
  > :first-child {
    margin-right: -64px;
  }
  > :last-child {
    margin-left: -64px;
  }
`;

const Btn1 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: ${({ theme }) => theme.color.strongPink} 8px solid;
  cursor: pointer;
`;

const Btn2 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: ${({ theme }) => theme.color.normalPink} 8px solid;
  cursor: pointer;
`;

const Btn3 = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: ${({ theme }) => theme.color.lightPink} 8px solid;
  cursor: pointer;
`;

const Btn4 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: ${({ theme }) => theme.color.milkPink} 8px solid;
  cursor: pointer;
`;

const Btn5 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: ${({ theme }) => theme.color.whitePink} 8px solid;
  cursor: pointer;
`;
