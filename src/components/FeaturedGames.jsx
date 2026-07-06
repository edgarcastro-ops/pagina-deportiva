function FeaturedGames() {
  const games = [
    {
      league: "MLB",
      away: "Yankees",
      home: "Red Sox",
      time: "7:05 PM",
      pick: "Yankees ML",
      confidence: "67%",
    },
    {
      league: "MLB",
      away: "Dodgers",
      home: "Braves",
      time: "8:10 PM",
      pick: "Más de 8.5 carreras",
      confidence: "61%",
    },
    {
      league: "MLB",
      away: "Astros",
      home: "Rangers",
      time: "9:40 PM",
      pick: "Astros +1.5",
      confidence: "64%",
    },
  ];

  return (
    <section className="games">
      <div className="section-title">
        <span>🔥 Juegos Destacados</span>
        <p>Partidos clave con análisis rápido y nivel de confianza.</p>
      </div>

      <div className="games-container">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <div className="game-top">
              <span>{game.league}</span>
              <small>{game.time}</small>
            </div>

            <h3>{game.away}</h3>
            <p>VS</p>
            <h3>{game.home}</h3>

            <div className="pick-box">
              <small>Pick recomendado</small>
              <strong>{game.pick}</strong>
            </div>

            <div className="confidence">
              Confianza: <strong>{game.confidence}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedGames;