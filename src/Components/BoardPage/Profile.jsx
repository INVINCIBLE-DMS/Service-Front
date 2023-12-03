import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Profile = ({ img, name, date }) => {
  return <Component>
    <img src={img ? img : "/imgs/icons/DefaultProfile.svg"} alt="" />
    <div>
      <h1>{name}</h1>
      <h2>{date}</h2>
    </div>
  </Component>
}

const Component = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  & > img {
    width: 55px;
    height: 55px;
    border-radius: 100px;
    background: whitesmoke;
  }
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