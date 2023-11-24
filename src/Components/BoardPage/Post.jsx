import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Post = () => {
  return <Content>
    <Top>
      <Profile>
        <img src="/imgs/Profile.png" />
        <div>
          <h1>의지니님(나)</h1>
          <h2>1시간 전</h2>
        </div>
      </Profile>
      <h2>자세히 보기</h2>
    </Top>
    <Middle>
      <h1>저랑 마카롱 공구하실분!!</h1>
      <img src="/imgs/MC.png" />
      <h2>아이폰을 잃어버렸는대 정멀 슬픈데 지금 저는
        졸린데 허 너무 히들기도 하고 슬프기도 하다.아이폰을 잃어버렸는대 정멀 슬픈데 지금 저는
        졸린데 허 너무 히들기도 하고 슬프기도 하다.아이...
      </h2>
    </Middle>
    <Bottom>
      <div>
        <img src="/imgs/icons/Like.svg" />
        <h1>0개</h1>
      </div>
      <div>
        <img src="/imgs/icons/Comment.svg" />
        <h1>0개</h1>
      </div>
    </Bottom>
  </Content>
}

const Content = styled.div`
  gap: 50px;
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

const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & > div { // 왼쪽 프로필 정보
    display: flex;
    flex-direction: column;
    & > h1, h2 {
      line-height: 25px;
    }
    & > h1 { // 유저명
      font-size: 20px;
      font-weight: 500;
    }
    & > h2 { // 시간
      font-size: 15px;
      font-weight: 300;
      color: ${theme.color.darkGray};
    }
  }
`