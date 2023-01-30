function Discussion({ obj }) {
  // 각각의 게시물
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={obj.avatarUrl}
          alt={`avatar of + ${obj.author}`}
        ></img>
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={obj.url}>{obj.title}</a>
        </h2>
        <div className="discussion__information">{obj.createdAt}</div>
      </div>
      <div className="discussion__answered">{obj.answer ? "🅅" : "🅇"}</div>
    </li>
  );
}

export default Discussion;
