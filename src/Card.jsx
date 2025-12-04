import profilePhoto from "./assets/ronaldo.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePhoto} alt="Cristiano Ronaldo" />
      <h2 className="card-title">Cristiano Ronaldo</h2>
      <p className="card-text">I make money and play football</p>
    </div>
  );
}

export default Card;
