function InputBox() {
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
              required
            ></textarea>
            <div className="form__submit">
              <input id="add-discussion" type="submit" value="submit" />
            </div>
          </div>
        </div>
      </div>
      <div className="warning hide">이름, 제목, 질문을 작성하세요!</div>
    </form>
  );
}

export default InputBox;
