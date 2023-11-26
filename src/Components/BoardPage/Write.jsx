import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { useRef } from "react";

export const Write = ({ sub }) => {
  const text = useRef();

  const handleResize = () => {
    text.current.style.height = "auto";
    text.current.style.height = text.current.scrollHeight + "px";
  }

  return <Component $sub={sub}>
    <textarea onChange={handleResize} rows={1} placeholder="댓글 작성" ref={text} />
    <Button $sub={sub}>등록</Button>
  </Component>
}

const Component = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({$sub}) => $sub ? 2 : 3}px solid ${({$sub}) => $sub ? theme.color.milkPink : theme.color.whitePink};
  background: white;
  border-radius: ${({$sub}) => $sub ? "0 0 10px 10px" : "50px"};
  padding-left: 25px;
  & > textarea {
    margin: 15px 0 15px 0;
    width: 100%;
    font-size: 15px;
  }
`

const Button = styled.button`
  border-radius: ${({$sub}) => $sub ? "50px 0 15px 50px" : "50px"};
  background: ${theme.color.whitePink};
  width: 90px;
  height: 56px;
  cursor: pointer;
`