import DiscusstionsBox from "./Components/DiscussionsBox";
import InputBox from "./Components/InputBox";
import "./style.css";

function App() {
  return (
    <main>
      <h1>My Agora States</h1>
      <section className="form__container">
        <InputBox />
      </section>
      <section className="discussion__wrapper">
        <DiscusstionsBox />
      </section>
    </main>
  );
}

export default App;
