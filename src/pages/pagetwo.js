import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageTwo() {
  const navigate = useNavigate();
  return (
    <>
      <h1>hello!!!!!</h1>
      <button onClick={() => navigate("/")}>이전으로</button>
    </>
  );
}
