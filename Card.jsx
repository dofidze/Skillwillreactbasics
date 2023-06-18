const Card = ({ name, image, action, description }) => {
  return (
    <div className="card">
      <h1 className="card-title"> {name} </h1>
      <div className="img-box">
        <img src={image} alt={name} />
      </div>
      <h2>More Details</h2>
      <p>{description}</p>
      <button onClick={() => action(name, description)} className="btn">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
