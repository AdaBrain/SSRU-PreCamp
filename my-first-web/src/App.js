import pxArt from "./assets/pxArt.jpeg";
import "./assets/ada.css";
import Card from "./components/Card";

function App() {
  const cardData = [
    {
      title: "AdaBrain.tv is the best!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      img: pxArt,
    },
    {
      title: "SSRU is the best!",
      content:
        "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      img: "https://i.pinimg.com/564x/ca/95/91/ca9591d56f610997411c547f1e401c6f.jpg",
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great",
      img: "https://toppng.com/uploads/preview/rid-pattern-pixel-art-pikachu-11563577328oxrymrm3bo.png",
    },
    {
      title: "1914 translation by H. Rackham",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      img: "https://c.tenor.com/WA6I2JcAUXoAAAAC/pixel-art-galaxy.gif",
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great",
      img: "https://toppng.com/uploads/preview/rid-pattern-pixel-art-pikachu-11563577328oxrymrm3bo.png",
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great",
      img: "https://toppng.com/uploads/preview/rid-pattern-pixel-art-pikachu-11563577328oxrymrm3bo.png",
    },
  ];

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
