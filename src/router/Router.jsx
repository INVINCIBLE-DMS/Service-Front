import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "../pages/Template";
import { SignUp } from "../pages/SignUp";
import { Ranking } from "../pages/Ranking";
import { MyPage } from "../pages/MyPage";
import { Layout } from "./Layout";
import { DetailPage } from "../pages/DetailPage";
import { BoardPage } from "../pages/BoardPage";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/profile" element={<MyPage />} />
        <Route path="/ranking" element={<Ranking />}></Route>
      </Route>
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter >
}
