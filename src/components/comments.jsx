import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { commentSaver } from "../redux/modules/changer";
import nextId from "react-id-generator";
import Listing from "./listing";

export default function Comments() {
  // 특정id를 받기
  const newId = nextId();
  // console.log(newId);

  // input박스입력값 받기
  const [mycomment, setComment] = useState({ id: "", name: "", word: "" });
  const inputBoxWriter = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setComment({ ...mycomment, id: newId, [name]: value });
  };

  // input박스에 입력된값 저장하기 액션 ㄱㄱ
  const dispatch = useDispatch();
  const inputBoxSaver = (e) => {
    e.preventDefault();
    if (mycomment.name.trim() === "" || mycomment.word.trim() === "") return;
    dispatch(commentSaver(mycomment));
    // input박스 비우기
    setComment({ id: "", name: "", word: "" });
  };

  return (
    <>
      {/* 닉네임 입력칸 */}
      <WriteBox onSubmit={inputBoxSaver}>
        <Nickname>
          <input
            type="text"
            name="name"
            value={mycomment.name}
            onChange={inputBoxWriter}
          />
        </Nickname>
        {/* 내 댓글 입력칸 */}
        <Mytext>
          <input
            type="text"
            name="word"
            value={mycomment.word}
            onChange={inputBoxWriter}
            // 인풋이 가지고 있는 속성 혹은 props만 넣어주수 있다!!
          />
        </Mytext>
        <button>저장하기</button>
      </WriteBox>
      <Listing newId={newId} />
    </>
  );
}

// 인풋박스2개 + 저장버튼
const WriteBox = styled.form``;
// 닉네임 인풋박스
const Nickname = styled.div``;
// 댓글 인풋박스
const Mytext = styled.div``;
