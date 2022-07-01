const CardHZ = (props) => {
    const {img, title, content} = props
    
    return (
        <div className="card-hz-container">
            <img src={img} alt="Not loading" />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default CardHZ