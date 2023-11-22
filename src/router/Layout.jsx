import { Outlet } from "react-router";
import { Nav } from "../Components/Nav";
import { styled } from "styled-components";

export const Layout = () => {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
