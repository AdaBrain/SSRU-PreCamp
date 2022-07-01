import pxArt from "./assets/pxArt.jpeg"

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

      <img src={pxArt} alt="Pixel Art" />
    </div>
  );
}

export default App;
