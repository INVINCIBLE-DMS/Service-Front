import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "../pages/Template";
import { SignUp1 } from "../pages/SignUp1";
import { Layout } from "./Layout";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}> {/* 네비게이션 바가 필요하면 이 컴포넌트에 넣으면 돼 */}
        <Route path="/template" element={<Template />} />
      </Route>
      <Route path="/SignUp1" element={<SignUp1 />}></Route>
    </Routes>
  </BrowserRouter>
}
