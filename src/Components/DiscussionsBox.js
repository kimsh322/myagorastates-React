import Discussion from "./Discussion";
import agoraStatesDiscussions from "../data";

function DiscusstionsBox() {
  return (
    <ul className="discussions__container">
      {agoraStatesDiscussions.map((obj) => {
        return <Discussion key={obj.id} obj={obj} />;
      })}
    </ul>
  );
}

export default DiscusstionsBox;
