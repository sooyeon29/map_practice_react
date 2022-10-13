import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { heartCounter } from "../redux/modules/changer";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>

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
