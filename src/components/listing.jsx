import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { heartCounter } from "../redux/modules/changer";

export default function Listing() {
  const globalcomment = useSelector((state) => state.myChanger.comments);
  console.log(globalcomment);
  const dispatch = useDispatch();
  const heartUp = () => {
    dispatch(heartCounter());
  };
  const globalHeart = useSelector((state) => state.myChanger.clicks);
  console.log(globalHeart);
  return (
    <>
      {globalcomment.map((commentList) => {
        return (
          <div key={commentList.id}>
            <span>{commentList.id}</span>
            <h3>{commentList.word}</h3>
            <h4>{commentList.name}</h4>
            <Button onClick={heartUp}>
              {globalHeart === 0 ? "♡" : "❤️"} {globalHeart}
            </Button>
          </div>
        );
      })}
    </>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
`;
