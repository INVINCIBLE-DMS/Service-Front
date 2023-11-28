import { styled } from "styled-components";
import { Profile } from "../Components/BoardPage/Profile";
import { Comment } from "../Components/BoardPage/Comment";
import { Write } from "../Components/BoardPage/Write";
import { useEffect, useState } from "react";

export const DetailPage = () => {
  const [comment, setComment] = useState("");
  const [content, setContent] = useState({
    author: {
      name: "아무개님(나)",
      profileImg: "/imgs/Profile.png",
    },
    title: "제목",
    content: "내용",
    date: "0시간 전",
    image: undefined,
    likes: 0,
    comments: []
  })

  useEffect(() => {
    // 가져오는 함수
  }, [])

  const handleComment = () => {
    // 댓글 작성 함수
  }

  const handleLike = () => {
    // 좋아요 버튼 함수
  }

  return <Wrapper>
    <Section>
      <Top>
        <Profile img={content.author.profileImg} name={content.author.name} date={content.date} />
        <h1>{content.title}</h1>
        <Line />
      </Top>
      <Middle>
        { content.image && <img src={content.image} alt="" /> }
        <h1>{content.content}</h1>
      </Middle>
      <Bottom>
        <div>
          <img src="/imgs/icons/Like.svg" alt="" />
          <h1>{content.likes}개</h1>
        </div>
        <div>
          <img src="/imgs/icons/Comment.svg" alt="" />
          <h1>{content.comments.length}개</h1>
        </div>
      </Bottom>
    </Section>
    <Write />
    <SectionComment>
      <Comment 
        profile={{
          name: "아무개",
          profileImg: ""
        }}
        content="test"
        metaData={{
          edited: false,
          likes: 0
        }}
      />
    </SectionComment>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 40px;
  box-sizing: border-box;
`

const Section = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
`

const SectionComment = styled(Section)`
  gap: 30px;
`

const Top = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  & > h1 { // 제목
    font-weight: 600;
  }
`

const Middle = styled.div`
  width: 100%;
  & > h1 { // 글
    font-size: 25px;
    font-weight: 200;
    line-height: 35px;
  }
`

const Bottom = styled.div`
  gap: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    & > h1 {
      font-weight: 300;
      font-size: 25px;
    }
  }
  & > div:nth-child(1) {
    & > img { cursor: pointer; }
  }
`

const Line = styled.div`
  height: 2px;
  width: 100%;
  background: black;
`