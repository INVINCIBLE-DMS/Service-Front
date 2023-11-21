import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "../pages/Template";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template />} />
    </Routes>
  </BrowserRouter>
}