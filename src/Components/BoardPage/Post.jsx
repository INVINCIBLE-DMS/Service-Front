import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { Profile } from "./Profile";

export const Post = ({ title, content, img, metaData, profile }) => {
  return <Content>
    <Top>
      <Profile img={profile.img} name={profile.name} date={profile.date} />
      <h2>자세히 보기</h2>
    </Top>
    <Middle>
      <h1>{title}</h1>
      <img src={img} />
      <h2>
        {content}
      </h2>
    </Middle>
    <Bottom>
      <div>
        <img src="/imgs/icons/Like.svg" />
        <h1>{metaData.likes}개</h1>
      </div>
      <div>
        <img src="/imgs/icons/Comment.svg" />
        <h1>{metaData.comments}개</h1>
      </div>
    </Bottom>
  </Content>
}

const Content = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 730px;
  /* min-height: 835px; */
  box-sizing: border-box;
  padding: 20px 30px 20px 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-shadow: 4px 4px 7px 0 rgba(0, 0, 0, 0.13);
`

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h2 {
    cursor: pointer;
    font-weight: 300;
    font-size: 20px;
    padding: 5px;
    border-radius: 10px;
    color: ${theme.color.darkGray};
    transition: 0.3s all;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`

const Middle = styled.div`
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    align-self: flex-start;
  }
  & > h2 {
    font-weight: 300;
    font-size: 30px;
  }
`

const Bottom = styled.div`
  gap: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
    & > h1 {
      font-weight: 300;
      font-size: 25px;
    }
  }
`