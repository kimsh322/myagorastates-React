import "./style.css";
import DiscusstionsBox from "./Components/DiscussionsBox";
import InputBox from "./Components/InputBox";
import { useEffect, useState } from "react";
// import agoraStatesDiscussions from "./data";

function App() {
  // 로컬 스토리지 정렬
  let localArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    localArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  localArr.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  const [discussion, setDiscussion] = useState([...localArr]);

  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((res) => {
        setDiscussion([...localArr, ...res]);
      });
    // eslint-disable-next-line
  }, []);

  // 로컬 스토리지 클리어함수
  const clear = () => {
    localStorage.clear();
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((res) => {
        setDiscussion(res);
      });
  };

  return (
    <>
      <main>
        <h1>My Agora States</h1>
        <section className="form__container">
          <InputBox discussion={discussion} setDiscussion={setDiscussion} />
        </section>
        <section className="discussion__wrapper">
          <button id="clear" onClick={clear}>
            로컬스토리지 클리어
          </button>
          <DiscusstionsBox discussion={discussion} />
        </section>
      </main>
    </>
  );
}

export default App;

// 더미데이터로 데이터 불러오는 코드
// // 로컬 스토리지 정렬
// const originArr = JSON.parse(JSON.stringify(agoraStatesDiscussions));
// let localArr = [];
// for (let i = 0; i < localStorage.length; i++) {
//   localArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
// }
// localArr.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

// // 로컬 스토리지 클리어함수
// const clear = () => {
//   localStorage.clear();
//   setDiscussion([...originArr]);
// };

// const [discussion, setDiscussion] = useState([...localArr, ...originArr]);
