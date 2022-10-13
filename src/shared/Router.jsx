import React from "react";
// react-router-dom 사용을 위해 아래 API import
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 열어주고 싶은 페이지들의 컴포넌트를 import
// import TodoList from "../pages/TodoList";
// import ListInfo from "../pages/ListInfo";

import Likes from "../pages/likes";
import PageTwo from "../pages/pagetwo";

// router라는 함수를 만든다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Likes />} />
        <Route path="/two/:id" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
