import { styled } from "styled-components";
import { Post } from "../Components/BoardPage/Post";
import { Button } from "../Components/BoardPage/Button";

export const BoardPage = () => {
  return <Wrapper>
    <Post 
      title="저랑 마카롱 공구하실분!!" 
      img="/imgs/MC.png"
      content="아이폰을 잃어버렸는대 정멀 슬픈데 지금 저는..."
      metaData={{ likes: 0, comments: 0 }}
      profile={{ img: "/imgs/Profile.png", name: "의지니님(나)", date: "1시간 전" }}
    />
    <Post 
      title="저랑 마카롱 공구하실분!!" 
      img="/imgs/MC.png"
      content="아이폰을 잃어버렸는대 정멀 슬픈데 지금 저는..."
      metaData={{ likes: 0, comments: 0 }}
      profile={{ img: "/imgs/Profile.png", name: "의지니님(나)", date: "1시간 전" }}
    />
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