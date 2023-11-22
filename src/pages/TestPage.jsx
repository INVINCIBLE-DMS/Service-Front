import React from "react";
import styled from "styled-components";
import { TextBox } from "../Components/TestPage/textBox";
import { SearchIcon } from "../Components/TestPage/searchIcon";
import { StartButton } from "../Components/TestPage/startButton";

const TestPage = () => {
  return (
    <Wrapper>
      <Left>
        <TextBox />
        <StartButton />
      </Left>
      <SearchIcon />
    </Wrapper>
  );
};

export default TestPage;

const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
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
