import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "../pages/Template";
import { SignUp1 } from "../pages/SignUp1";
import { SignUp2 } from "../pages/SignUp2";
import { Ranking } from "../pages/Ranking";
import { Layout } from "./Layout";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}> {<Route path="/ranking" element={<Ranking />}></Route>}
        <Route path="/template" element={<Template />} />
      </Route>
      <Route path="/SignUp1" element={<SignUp1 />}></Route>
      <Route path="/SignUp2" element={<SignUp2 />}></Route>

    </Routes>
  </BrowserRouter>
}
