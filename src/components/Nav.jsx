import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = () => {
  return <Wrapper>
    <img src="/imgs/Logo.svg" title="Aster" alt="" />
    <Interactions>
      <Button to="/"><img src="/imgs/icons/Home.svg" alt="" /></Button>
      <Button to="/ranking"><img src="/imgs/icons/Trophy.svg" alt="" /></Button>
      <Button to="/message"><img src="/imgs/icons/Message.svg" alt="" /></Button>
      <Button to="/profile" style={{padding: 0}}><img src="/imgs/icons/DefaultProfile.svg" alt="" /></Button>
    </Interactions>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 85px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 0 20px 0;
  gap: 30px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
`

const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Button = styled(Link)`
  display: flex;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  background: #ffffff;
  transition: 0.2s all;
  &:hover { background: #f7f7f7; }
`