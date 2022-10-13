import React from "react";
import Comments from "../components/comments";
import Listing from "../components/listing";
import KakaoMap from "../mytools/kakaomap";

export default function Likes() {
  return (
    <div>
      <KakaoMap />
      <Comments />
      {/* <Listing /> */}
    </div>
  );
}
