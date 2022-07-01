import "../assets/ada.css";

// Card Components
const Card = (props) => {
  const { title, content, img } = props

  return (
    <div className="card-container">
      <img className="pixel-img" src={img} alt="" />
      <h1>{title}</h1>
      <p>
        {content}
      </p>
    </div>
  );
};

export default Card;
