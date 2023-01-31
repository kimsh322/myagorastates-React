import "./style.css";
import DiscusstionsBox from "./Components/DiscussionsBox";
import InputBox from "./Components/InputBox";
import { useState } from "react";
import agoraStatesDiscussions from "./data";

function App() {
  // 로컬 스토리지 정렬
  const originArr = JSON.parse(JSON.stringify(agoraStatesDiscussions));
  let localArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    localArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  localArr.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  // 로컬 스토리지 클리어함수
  const clear = () => {
    localStorage.clear();
    setDiscussion([...originArr]);
  };

  const [discussion, setDiscussion] = useState([...localArr, ...originArr]);

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
