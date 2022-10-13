// import { formatDate } from "./utils";

// 액션명
const COMMENT_SAVE = "COMMENT_SAVE";
// const RETURN_COMMENT = "RETURN_COMMENT"
const CLICK_HEART = "CLICK_HEART";

// 액션크리에이터
export const commentSaver = (comInput) => {
  return {
    type: COMMENT_SAVE,
    comInput,
  };
};
export const heartCounter = () => {
  return {
    type: CLICK_HEART,
  };
};

// export const commentReturner = (globalcomment) => {
//     return{
//         type: commentReturner,
//         globalcomment
//     }

// }

// 초기값
const initialState = {
  comments: [{ id: "2022.10.12 오후 7:16:01", name: "홍길동", word: "화이팅" }],
  clicks: 0,
};
const date =
  //   // formatDate(new Date());
  new Date().getFullYear() +
  "." +
  new Date().getMonth() +
  1 +
  "." +
  new Date().getDate() +
  " 오후 " +
  new Date().getHours() +
  ":" +
  new Date().getMinutes() +
  ":" +
  new Date().getSeconds();
// 리듀서
const myChanger = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_SAVE:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: date,
            name: action.comInput.name,
            word: action.comInput.word,
          },
        ],
      };
    case CLICK_HEART:
      return { ...state, clicks: state.clicks + 1 };

    default:
      return state;
  }
};

// 리듀서익스포트
export default myChanger;
