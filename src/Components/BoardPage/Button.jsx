import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Button = () => {
  return <Content title="글 작성하기">
    <img src="/imgs/icons/add.svg" />
  </Content>
}

const Content = styled.div`
  cursor: pointer;
  position: fixed;
  align-self: flex-end;
  bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: ${theme.color.normalPink};
  border: 1px solid ${theme.color.milkPink};
  transition: 0.2s all;
  &:hover {
    background: ${theme.color.strongPink};
  }
`