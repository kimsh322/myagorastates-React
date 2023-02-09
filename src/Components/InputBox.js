import { useState } from "react";

function InputBox({ discussion, setDiscussion }) {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [isTure, setIsTrue] = useState(true); // warning 메시지 상태

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg && name && title) {
      // 객체 생성
      const obj = {
        id: new Date(),
        createdAt: JSON.parse(JSON.stringify(new Date())),
        title,
        author: name,
        avatarUrl: "img/defaultImg.png",
        answer: null,
        url: "#",
        bodyHTML: msg,
      };

      // 로컬 스토리지 등록 처리
      const objJson = JSON.stringify(obj);
      localStorage.setItem(Date.now(), objJson);

      // 상태 변경
      setDiscussion([obj, ...discussion]);
      setName("");
      setTitle(""); // 초기화
      setMsg("");
      setIsTrue(true);
    } else setIsTrue(false);
  };

  const warning = isTure ? "" : "appear";

  return (
    <form action="" method="get" className="form">
      <div className="form__input--wrapper">
        <div className="form__input--name">
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="이름"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form__input--title">
          <label htmlFor="name">Enter your title: </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form__textbox">
          <label htmlFor="story">Your question: </label>
          <div id="textarea_box">
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              value={msg}
              onChange={handleChange}
              required
            ></textarea>
            <div className="form__submit"></div>
            <input
              id="add-discussion"
              type="submit"
              value="submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
      <div className={`warning ${warning}`}>이름, 제목, 질문을 작성하세요!</div>
    </form>
  );
}

export default InputBox;
