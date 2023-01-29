import DiscusstionsBox from "./Components/DiscussionsBox";
import "./style.css";

function App() {
  return (
    <div>
      <h1>My Agora States</h1>
      <section class="form__container">{/* 인풋박스자리 */}</section>
      <section class="discussion__wrapper">
        <DiscusstionsBox />
      </section>
    </div>
  );
}

export default App;
