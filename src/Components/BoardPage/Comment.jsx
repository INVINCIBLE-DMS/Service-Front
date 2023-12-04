import { styled } from "styled-components"
import { theme } from "../../styles/theme"
import { SubComment } from "./SubComment"
import { useEffect, useState } from "react"
import { Write } from "./Write"
import { getCoComent, postCoComent } from "../../apis/Board"

export const Comment = ({ profile, content, metaData }) => {
  const [hidden, setHidden] = useState(true);
  const [subComments, setSubComments] = useState(undefined);
  const [comment, setComment] = useState("");
  const { id } = metaData;
  
  useEffect(() => {
    if(!hidden) {
      getCoComent(id).then(res => {
        res.data && setSubComments(res.data);
      });
    }
  }, [hidden])

  const handleComment = () => {
    setHidden(prev => !prev);
  }

  const handleEditComment = (e) => {
    setComment(e.target.value);
  }

  const handleSubmitComment = () => {
    postCoComent(id, { content: comment }).then(() => {
      getCoComent(id).then(res => {
        res.data && setSubComments(res.data);
      })
    })
    setComment("");
  }

  return <Component>
    <img src={profile.profileImg ? profile.profileImg : "/imgs/Profile.png"} width="50" height="50" alt="" />
    <Data>
      <Profile>
        <h1>{profile.name}</h1>
        <h2>{metaData.edited && "수정됨"}</h2>
      </Profile>
      <Content>
        <h1>{content}</h1>
        <Bottom>
          <div>
            <img src="/imgs/icons/Like.svg" alt="" />
            <h1>{metaData.likes}개</h1>
          </div>
          <div>
            <img src="/imgs/icons/Comment.svg" alt="" title={hidden ? "대댓글 펼치기" : "대댓글 접기"} onClick={handleComment} />
          </div>
          <h2>수정</h2>
          <h2>삭제</h2>
        </Bottom>
      </Content>
      <SubContent $hidden={hidden}>
        <Comments>
          {subComments && !hidden && subComments.map(i => {
            return <SubComment author={i.username} content={i.content} />
          })}
        </Comments>
        <Write submitAction={handleSubmitComment} editAction={handleEditComment} value={comment} sub />
      </SubContent>
    </Data>
  </Component>
}

const Component = styled.div`
  gap: 20px;
  display: flex;
  width: 100%;
  & > img {
    width: 55px;
    height: 55px;
    border-radius: 100px;
    background: whitesmoke;
  }
`

const Data = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
`

const Profile = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  & > h1, h2 { 
    font-weight: 300;
  }
  & > h1 {
    font-size: 25px;
  }
  & > h2 {
    font-size: 19px;
    color: ${theme.color.darkGray};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`

const Bottom = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    & > h1 {
      font-size: 25px;
      font-weight: 300;
    }
  }
  & > h2 {
    cursor: pointer;
    font-size: 18px;
    font-weight: 300;
    color: ${theme.color.darkGray};
    transition: 0.2s all;
    &:hover {
      color: black;
    }
  }
  & img {
    cursor: pointer;
    width: 20px;
  }
`

const SubContent = styled.div`
  display: ${({$hidden}) => $hidden ? "none" : "flex"};
  flex-direction: column;
  width: 100%;
`

const Comments = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  background: ${theme.color.whitePink};
`