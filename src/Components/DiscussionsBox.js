import Discussion from "./Discussion";
import { useState } from "react";
import Pagination from "./Pagination";

function DiscusstionsBox({ discussion }) {
  const [page, setPage] = useState(1); // 현재 페이지 상태
  const limitDiscuss = 6; // 페이지당 글 개수
  const offset = (page - 1) * limitDiscuss; // 페이지의 첫 게시물 번호
  return (
    <>
      <ul className="discussions__container">
        {discussion.slice(offset, offset + limitDiscuss).map((obj) => {
          return <Discussion key={obj.id} obj={obj} />;
        })}
      </ul>
      <Pagination
        total={discussion.length}
        limitDiscuss={limitDiscuss}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default DiscusstionsBox;
