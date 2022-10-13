import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { heartCounter } from "../redux/modules/changer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Listing({ newId }) {
  console.log(newId);

  // 리듀서에서 댓글 구독
  const globalcomment = useSelector((state) => state.myChanger.comments);
  console.log(globalcomment);

  // 좋아요 누르기 버튼 만들기 액션ㄱㄱ
  const dispatch = useDispatch();
  const heartUp = () => {
    dispatch(heartCounter());
  };

  // 리듀서에서 좋아요 번튼 구독
  const globalHeart = useSelector((state) => state.myChanger.clicks);
  // console.log(globalHeart);

  return (
    <>
      {/* 상세페이지로 이동 */}
      <Link to={`/two/${newId}`}>두번째페이지로</Link>

      {/* 첫페이지에 댓글보여주기 / +좋아요버튼 */}
      {globalcomment.map((commentList) => {
        return (
          <Stdiv key={commentList.id}>
            <span>{commentList.date}</span>
            <h3>{commentList.word}</h3>
            <h4>{commentList.name}</h4>
            <Button onClick={heartUp}>
              {globalHeart === 0 ? "♡" : "❤️"} {globalHeart}
            </Button>
          </Stdiv>
        );
      })}
    </>
  );
}
Listing.propTypes = {
  newId: PropTypes.string,
};

const Button = styled.button`
  background-color: transparent;
  border: none;
`;
const Stdiv = styled.div`
  border: 2px solid black;
  width: fit-content;
  margin: 20px;

  float: left;
`;
