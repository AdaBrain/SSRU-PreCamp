import "../assets/ada.css";
import pxArt from "../assets/pxArt.jpeg"

// Card Components
const Card = () => {
  return (
    <div className="card-container">
      <img className="pixel-img" src={pxArt} alt="" />
      <h1>This is my Card!</h1>
      <p>
        Runs the app in the development mode. Open http://localhost:3000 to view
        it in your browser. The page will reload when you make changes. You may
        also see any lint errors in the console.
      </p>
    </div>
  );
};

export default Card;
