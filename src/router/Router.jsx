import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "../pages/Template";
import { SignUp } from "../pages/SignUp";
import { Ranking } from "../pages/Ranking";
import { MyPage } from "../pages/MyPage";
import { Layout } from "./Layout";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}> { }
        <Route path="/template" element={<Template />} />
      </Route>
      <Route path="/signUp" element={<SignUp />}></Route>
    </Routes>
  </BrowserRouter >
}
