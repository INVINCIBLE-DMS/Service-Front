import { styled } from "styled-components";
import { Post } from "../components/BoardPage/Post";
import { Button } from "../components/BoardPage/Button";

export const BoardPage = () => {
  return <Wrapper>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Button />
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
`