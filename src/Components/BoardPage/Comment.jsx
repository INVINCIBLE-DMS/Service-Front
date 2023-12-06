import { styled } from "styled-components"
import { theme } from "../../styles/theme"
import { SubComment } from "./SubComment"
import { useEffect, useRef, useState } from "react"
import { Write } from "./Write"
import { deleteComment, getCoComent, getPostDetail, patchComment, postCoComent, postCommentLike } from "../../apis/Board"

export const Comment = ({ profile, content, metaData, setContent }) => {
  const [hidden, setHidden] = useState(true);
  const [subComments, setSubComments] = useState(undefined);
  const [comment, setComment] = useState("");
  const [edit, setEdit] = useState({
    content: content,
    edit: false
  });
  const { id } = metaData;
  const text = useRef();
  
  useEffect(() => {
    if(!hidden) {
      getCoComent(id).then(res => {
        res.data && setSubComments(res.data);
      });
    }
  }, [hidden])

  /* 기록을 해 두자면, 여기 코드는 문제가 많다.
    댓글을 수정하거나 삭제하면 수정이나 삭제 등의 행동을 수행하고 나서 댓글들을 다시 불러와야 한다.
    근데 댓글을 불러오는 기능 자체는 부모 컴포넌트인 자세히 보기 페이지에 있어, useState만 써서는 이런 방식으로 작성해야 했다. (props와 setState를 활용함)
    이런 방식도 작동은 하지만, 매우 비효율적이고 알아보기도 어렵다.
    나중에 React-Query를 활용해서 수정하는 게 좋을 것 같다.
  */
  const handleVisible = () => {
    setHidden(prev => !prev);
  }

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handleDeleteComment = () => {
    deleteComment(id).then(() => {
      getPostDetail(metaData.postId).then(res => {
        setContent(prev => { return { ...prev, commentResponseList: res.data.commentResponseList} });
      });
    });
  }

  const handleChangeEdit = (e) => {
    text.current.style.height = "auto";
    text.current.style.height = text.current.scrollHeight + "px";
    setEdit(prev => { return { ...prev, content: e.target.value}});
  }

  const handleEditSubmit = (e) => {
    patchComment(id, { content: edit.content }).then(() => {
      getPostDetail(metaData.postId).then(res => {
        setContent(prev => { return { ...prev, commentResponseList: res.data.commentResponseList} });
        setEdit({...edit, edit: false})
      });
    });
  }

  const handleEditComment = () => {
    text.current.style.height = "auto";
    text.current.style.height = content.split("\n").length*30 + "px";
    setEdit(prev => { return { content: content, edit: !prev.edit}});
  }

  const handleSubmitComment = () => {
    postCoComent(id, { content: comment }).then(() => {
      getCoComent(id).then(res => {
        res.data && setSubComments(res.data);
      })
    })
    setComment("");
  }

  const handleLikeComment = () => {
    postCommentLike(id).then(() => {
      getPostDetail(metaData.postId).then(res => {
        setContent(prev => { return { ...prev, commentResponseList: res.data.commentResponseList} });
      });
    })
  }

  return <Component>
    <img src={profile.profileImg ? profile.profileImg : "/imgs/Profile.png"} width="50" height="50" alt="" />
    <Data>
      <Profile>
        <h1>{profile.name}</h1>
        <h2>{metaData.edited && "수정됨"}</h2>
      </Profile>
      <Content $edit={edit.edit}>
        <h1>{content}</h1>
        <textarea value={edit.content} onChange={handleChangeEdit} placeholder="수정할 댓글을 입력해주세요" ref={text} rows={1} />
        <Bottom $edit={edit.edit}>
          <Left $edit={edit.edit}>
            <div>
              <Like src="/imgs/icons/Like.svg" alt="" $liked={metaData.liked} onClick={handleLikeComment}/>
              <h1>{metaData.likes}</h1>
            </div>
            <div>
              <img src="/imgs/icons/Comment.svg" alt="" title={hidden ? "대댓글 펼치기" : "대댓글 접기"} onClick={handleVisible} />
            </div>
            <h2 onClick={handleEditComment}>수정</h2>
            <h2 onClick={handleDeleteComment}>삭제</h2>
          </Left>
          <Right $edit={edit.edit}>
            <EditButton onClick={handleEditComment}>취소</EditButton>
            <EditButton onClick={handleEditSubmit}>확인</EditButton>
          </Right>
        </Bottom>
      </Content>
      <SubContent $hidden={hidden}>
        <Comments>
          {subComments && !hidden && subComments.map(i => {
            return <SubComment author={i.username} content={i.content} />
          })}
        </Comments>
        <Write submitAction={handleSubmitComment} editAction={handleChange} value={comment} sub />
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
    display: ${({$edit}) => $edit && "none"};
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  & > textarea {
    display: ${({$edit}) => !$edit && "none"};
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    min-height: 30px;
    border-bottom: 1px solid black;
  }
`

const Bottom = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${({$edit})=> $edit && "end"};
`

const Left = styled.div`
  gap: 30px;
  display: ${({$edit}) => $edit ? "none" : "flex"};
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

const Right = styled.div`
  gap: 5px;
  display: ${({$edit}) => $edit ? "flex" : "none"};
  margin-top: 5px;
`

const EditButton = styled.button`
  background: ${theme.color.whitePink};
  width: 70px;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: ${theme.color.milkPink};
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

const Like = styled.img`
  cursor: pointer;
  filter: ${({$liked}) => $liked && "invert(80%)"};
`