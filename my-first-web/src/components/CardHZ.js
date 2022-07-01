const CardHZ = (props) => {
  const { img, title, content } = props;

  return (
    <div className="card-hz-container">
      <img src={img} alt="Not loading" />
      <div className="card-hz-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardHZ;
