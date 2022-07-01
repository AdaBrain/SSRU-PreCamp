import "./assets/ada.css";
import Card from "./components/Card";
import cardData from "./assets/data/cardsData.json";
import CardHZ from "./components/CardHZ";

function App() {
  return (
    <div className="App">
      {/* <img id="ada-img" className="pixel-img" src={pxArt} alt="Pixel Art" />
      <img className="pixel-img" src={pxArt} alt="Pixel Art" /> */}

      <CardHZ
        img="https://i.pinimg.com/originals/6f/e6/83/6fe683d1b0c6d53cef3f4377e3a3f520.jpg"
        title="My Personality"
        content="magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
      />    

      <CardHZ
        img="https://i.pinimg.com/originals/6f/e6/83/6fe683d1b0c6d53cef3f4377e3a3f520.jpg"
        title="My Personality"
        content="magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
      />    
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
