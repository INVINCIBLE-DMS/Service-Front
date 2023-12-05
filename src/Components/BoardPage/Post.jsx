import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { Profile } from "./Profile";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostDetail } from "../../apis/Board";

export const Post = ({ title, content, img, metaData, profile }) => {
  const [commentCnt, setCommentCnt] = useState(0);

  useEffect(() => {
    getPostDetail(metaData.id).then(res => {
      setCommentCnt(res.data.commentResponseList.length);
    })
  }, [])
  
  return <Component>
    <Top>
      <Profile img={profile.img} name={profile.name} date={profile.date} />
      <Link to={`/detail/${metaData.id}`}>자세히 보기</Link>
    </Top>
    <Middle>
      { title && <h1>{title}</h1> }
      { img && <img src={img} alt="" /> }
      <h2>
        {content}
      </h2>
    </Middle>
    <Bottom>
      <div>
        <Like src="/imgs/icons/Like.svg" alt="" $liked={metaData.liked}/>
        <h1>{metaData.likes}개</h1>
      </div>
      <div>
        <img src="/imgs/icons/Comment.svg" alt="" />
        <h1>{commentCnt}개</h1>
      </div>
    </Bottom>
  </Component>
}

const Component = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 730px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 30px 20px 30px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-shadow: 4px 4px 7px 0 rgba(0, 0, 0, 0.13);
`

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    padding: 5px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s all;
    font-size: 20px;
    font-weight: 300;
    text-decoration-line: none;
    color: ${theme.color.darkGray};
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`

const Middle = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  & > img {
    width: 100%;
  }
  & > h1 {
    align-self: flex-start;
  }
  & > h2 {
    font-size: 30px;
    font-weight: 300;
  }
`

const Bottom = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    & > h1 {
      font-size: 25px;
      font-weight: 300;
    }
  }
`

const Like = styled.img`
  filter: ${({$liked}) => $liked && "invert(80%)"};
`