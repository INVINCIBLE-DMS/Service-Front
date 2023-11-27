import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const ModalInput = () => {
  return <Input placeholder="제목을 입력하세요" />
}

export const ModalTextArea = () => {
  return <TextArea placeholder="내용을 입력하세요" />
}

const Input = styled.input`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${theme.color.darkGray};
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${theme.color.darkGray};
`