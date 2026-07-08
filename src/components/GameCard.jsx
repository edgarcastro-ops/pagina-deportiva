function GameCard({ game }) {
  return (
    <article className="game-card">
      <div className="game-top">
        <span>{game.status}</span>
        <small>{game.time}</small>
      </div>

      <div className="teams">
        <h3>{game.awayTeam}</h3>
        <p>VS</p>
        <h3>{game.homeTeam}</h3>
      </div>

      <p className="stadium">📍 {game.stadium}</p>

      <div className="pick-box">
        <small>Pick recomendado</small>
        <strong>{game.prediction}</strong>
      </div>

      <div className="confidence">
        <span>Confianza: <strong>{game.confidence}%</strong></span>

        <div className="confidence-bar">
          <div
            className="confidence-fill"
            style={{ width: `${game.confidence}%` }}
          ></div>
        </div>
      </div>
    </article>
  );
}

export default GameCard;