import pxArt from "./assets/pxArt.jpeg";
import "./assets/ada.css";
import Card from "./components/Card";
import cardData from "./assets/data/cardsData.json";

function App() {
  return (
    <div className="App">
      {/* <img id="ada-img" className="pixel-img" src={pxArt} alt="Pixel Art" />
      <img className="pixel-img" src={pxArt} alt="Pixel Art" /> */}

      {/* Render Cards Components */}
      {cardData.map((data, idx) => (
        <Card
          key={idx}
          title={data.title}
          content={data.content}
          img={data.img}
        />
      ))}
    </div>
  );
}

export default App;
