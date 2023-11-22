import React from "react";
import styled from "styled-components";
import { TextBox } from "../Components/TestPage/textBox";
import { SearchIcon } from "../Components/TestPage/searchIcon";
import { StartButton } from "../Components/TestPage/startButton";

const TestPage = () => {
  return (
    <Body>
      <Wrapper>
        <Left>
          <TextBox />
          <StartButton />
        </Left>
        <SearchIcon />
      </Wrapper>
    </Body>
  );
};

export default TestPage;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  > :last-child {
    margin-top: 88px;
  }
`;
