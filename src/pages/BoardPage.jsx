import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { theme } from "../styles/theme";
import { getPosts, postImage, postPost } from "../apis/Board";
import { Posts } from "../Components/BoardPage/Posts";

export const BoardPage = () => {
  const [posts, setPosts] = useState(undefined);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
    feedImgUrl: ""
  })

  useEffect(() => {
    getPosts().then(res => {
      res.data && setPosts(res.data);
    })
  }, [])

  const [file, setFile] = useState(undefined);

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setModal(prev => !prev);
  }

  const handleModalClose = () => {
    document.body.style.overflow = "auto";
    setData({
      title: "",
      content: "",
      feedImgUrl: ""
    })
    setFile(undefined);
    setModal(prev => !prev);
  }

  const handleFile = (e) => {
    const form = new FormData;
    form.append("image", e.target.files[0]);
    postImage(form).then(res => {
      if(res.data){
        setFile(e.target.files[0]);
        setData(prev => { return {...prev, feedImgUrl: res.data.imageUrl} });
      } 
    })
  }

  const handleChange = (e) => {
    setData(prev => { return {...prev, [e.target.id]: e.target.value} })
  }

  const handleSubmit = () => {
    if(data.title !== "" && data.content !== "") {
      postPost(data).then(() => {
        getPosts().then(res => {
          handleModalClose();
          res.data && setPosts(res.data);
        })
      })
    }
  }

  return <>
    <Modal $modal={modal}>
      <ModalWrapper>
        <Top>
          <Upload onClick={handleSubmit}>게시하기</Upload>
          <Close icon="ph:x-bold" width="30px" onClick={handleModalClose} />
        </Top>
        <Middle>
          <ModalInput placeholder="제목을 입력하세요" onChange={handleChange} value={data.title} id="title" />
          <ModalTextArea placeholder="내용을 입력하세요" onChange={handleChange} value={data.content} id="content" />
        </Middle>
        <Image htmlFor="image" $file={file}>
          { !file && <Icon icon="ph:camera-light" color="#FFFFFF" width="35px" /> }
          <h1>{file ? file.name : "사진을 추가할 수 있어요"}</h1>
          <input type="file" id="image" accept="image/*" onChange={handleFile} />
        </Image>
      </ModalWrapper>
    </Modal>
    <Wrapper>
      <Posts posts={posts} />
      <Button title="글 작성하기" onClick={handleModalOpen}>
        <Icon icon="uil:plus" width='40px' color='#FFFFFF' />
      </Button>
    </Wrapper>
  </>
}

const Wrapper = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
`

const Modal = styled.div`
  display: ${({$modal}) => $modal ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  width: 60px;
  height: 60px;
  bottom: 60px;
  cursor: pointer;
  position: fixed;
  border-radius: 100%;
  align-self: flex-end;
  transition: 0.2s all;
  background: ${theme.color.normalPink};
  border: 1px solid ${theme.color.milkPink};
  &:hover {
    background: ${theme.color.strongPink};
  }
`

const ModalWrapper = styled.div`
  background: #FFFFFF;
  width: 1200px;
  height: 680px;
  gap: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 20px;
`

const Top = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const Middle = styled(Top)`
  height:100%;
  flex-direction: column;
`

const Upload = styled.button`
  width: 150px;
  padding: 5px;
  cursor: pointer;
  border-radius: 50px;
  box-sizing: border-box;
  background: ${theme.color.strongPink};
  font-size: 20px;
  color: #FFFFFF;
`

const Close = styled(Icon)`
  cursor: pointer;
`

const Image = styled.label`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  cursor: pointer;
  background: ${({$file}) => $file ? theme.color.strongPink : theme.color.normalPink};
  border-radius: 50px;
  & > h1 {
    color: #FFFFFF;
    font-weight: 300;
    font-size: 20px;
  }
  & > input {
    display: none;
  }
`

const ModalInput = styled.input`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${theme.color.darkGray};
`

const ModalTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${theme.color.darkGray};
`