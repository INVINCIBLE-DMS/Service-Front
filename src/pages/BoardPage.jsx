import { styled } from "styled-components";
import { Post } from "../Components/BoardPage/Post";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { theme } from "../styles/theme";

export const BoardPage = () => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setModal(prev => !prev);
  }

  const handleModalClose = () => {
    document.body.style.overflow = "auto";
    setModal(prev => !prev);
  }

  return <>
    <Modal $modal={modal}>
      <ModalWrapper>
        <Top>
          <Upload>게시하기</Upload>
          <Close icon="ph:x-bold" width="30px" onClick={handleModalClose} />
        </Top>
      </ModalWrapper>
    </Modal>
    <Wrapper>
      <Post 
        title="저랑 마카롱 공구하실분!!" 
        img="/imgs/MC.png"
        content="아이폰을 잃어버렸는대 정멀 슬픈데 지금 저는..."
        metaData={{ likes: 0, comments: 0, id: 1 }}
        profile={{ img: "/imgs/Profile.png", name: "의지니님(나)", date: "1시간 전" }}
      />
      <Post 
        title="저랑 마카롱 공구하실분!!" 
        img="/imgs/MC.png"
        content="아이폰을 잃어버렸는대 정멀 슬픈데 지금 저는..."
        metaData={{ likes: 0, comments: 0, id: 2 }}
        profile={{ img: "/imgs/Profile.png", name: "의지니님(나)", date: "1시간 전" }}
      />
      <Button title="글 작성하기" onClick={handleModalOpen}>
        <Icon icon="uil:plus" width='40px' color='#FFFFFF' />
      </Button>
    </Wrapper>
  </>
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
  gap: 10px;
  display: flex;
  align-items: flex-start;
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

const Upload = styled.button`
  width: 150px;
  padding: 5px;
  border-radius: 50px;
  box-sizing: border-box;
  background: ${theme.color.strongPink};
  font-size: 20px;
  color: #FFFFFF;
`

const Close = styled(Icon)`
  cursor: pointer;
`