import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as _ from "../pages";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<_.HomePage />} />
        <Route path="/board" element={<_.BoardPage />} />
        <Route path="/detail/:id" element={<_.DetailPage />} />
        <Route path="/profile" element={<_.MyPage />} />
        <Route path="/ranking" element={<_.Ranking />} />
        <Route path="/result" element={<_.ResultPage />} />
        <Route path="/test" element={<_.TestPage />} />
        <Route path="/intest" element={<_.InTestPage />} />
      </Route>
      <Route path="/signUp" element={<_.SignUp />} />
    </Routes>
  </BrowserRouter >
}
