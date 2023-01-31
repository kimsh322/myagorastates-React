import "./style.css";
import DiscusstionsBox from "./Components/DiscussionsBox";
import InputBox from "./Components/InputBox";
import { useState } from "react";
import agoraStatesDiscussions from "./data";

function App() {
  const [discussion, setDiscussion] = useState(agoraStatesDiscussions);
  return (
    <>
      <main>
        <h1>My Agora States</h1>
        <section className="form__container">
          <InputBox discussion={discussion} setDiscussion={setDiscussion} />
        </section>
        <section className="discussion__wrapper">
          <DiscusstionsBox discussion={discussion} />
        </section>
      </main>
    </>
  );
}

export default App;
