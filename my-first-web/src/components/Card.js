import "../assets/ada.css";

// Card Components
const Card = (props) => {
  const { title, content, img } = props;

  return (
    <div className="card-container">
      <a href={img}>
        <img className="pixel-img" src={img} alt="" />
      </a>
      <h3>{title}</h3>
      <p>
        {content} <a href="#">see more</a>
      </p>
    </div>
  );
};

export default Card;
