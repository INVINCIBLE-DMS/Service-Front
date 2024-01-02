import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";
import { BoardPage } from "../pages/BoardPage";
import { MyPage } from "../pages/MyPage";
import { Ranking } from "../pages/Ranking";
import ResultPage from "../pages/ResultPage";
import TestPage from "../pages/TestPage";
import InTestPage from "../pages/InTestPage";
import { SignUp } from "../pages/SignUp";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/result/:name1/:name2" element={<ResultPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/intest" element={<InTestPage />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
