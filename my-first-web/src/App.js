import pxArt from "./assets/pxArt.jpeg"
import "./assets/ada.css"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <h1>AdaBrain is HERE</h1>
      <p>
        A Leader in the 2021 Gartner Magic Quadrant for Meeting Solutions
        Gartner, the world's leading information technology research and
        advisory firm, has named Zoom a Leader in the 2021 Magic Quadrant for
        Meeting Solutions. Read the report to learn why we're a Leader!
      </p>

      <a href="https://google.com">Google.com</a>

      <img id="ada-img" className="pixel-img" src={pxArt} alt="Pixel Art" />
      <img className="pixel-img" src={pxArt} alt="Pixel Art" />

      <Card title="AdaBrain.tv is the best!" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" img={pxArt} />
      
    </div>
  );
}

export default App;
