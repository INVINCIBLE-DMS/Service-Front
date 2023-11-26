import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { theme } from "../styles/theme";

export const Nav = () => {
  return (
    <Wrapper>
      <img src='/imgs/Logo.svg' title='Aster' alt='' />
      <Interactions>
        <Button to='/'>
          <Icon icon="iconoir:home-alt-slim" color={theme.color.darkGray} width="25px"/>
        </Button>
        <Button to='/ranking'>
          <Icon icon="iconoir:trophy" color={theme.color.darkGray} width="25px" />
        </Button>
        <Button to='/message'>
        <Icon icon="iconoir:message-text" color={theme.color.darkGray} width="25px" />
        </Button>
        <Button to='/profile' style={{ padding: 0 }}>
          <img src='/imgs/icons/DefaultProfile.svg' alt='' />
        </Button>
      </Interactions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 85px;
  align-self: flex-start;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 0 20px 0;
  gap: 30px;
  background-color: white;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled(Link)`
  display: flex;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  background: #ffffff;
  transition: 0.2s all;
  &:hover {
    background: #f7f7f7;
  }
`;
