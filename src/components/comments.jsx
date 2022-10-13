import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { commentSaver } from "../redux/modules/changer";

export default function Comments() {
  const [mycomment, setComment] = useState({ name: "", word: "" });
  const inputBoxWriter = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setComment({ ...mycomment, [name]: value });
  };
  const dispatch = useDispatch();
  const inputBoxSaver = (e) => {
    e.preventDefault();
    if (mycomment.name.trim() === "" || mycomment.word.trim() === "") return;
    dispatch(commentSaver(mycomment));
    setComment({ name: "", word: "" });
  };

  return (
    <>
      <WriteBox onSubmit={inputBoxSaver}>
        <Nickname>
          <input
            type="text"
            name="name"
            value={mycomment.name}
            onChange={inputBoxWriter}
          />
        </Nickname>
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
    </>
  );
}

const WriteBox = styled.form``;
const Nickname = styled.div``;
const Mytext = styled.div``;
