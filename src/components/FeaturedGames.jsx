import { useEffect, useState } from "react";
import { getTodayMLBGames } from "../services/mlbApi";

function FeaturedGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await getTodayMLBGames();
        setGames(data.slice(0, 3));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  return (
    <section className="games">
      <div className="section-title">
        <span>🔥 Juegos Destacados</span>
        <p>Los mejores partidos del día para análisis y picks.</p>
      </div>

      {loading && <p>Cargando juegos destacados...</p>}

      {!loading && games.length === 0 && (
        <p>No hay juegos disponibles para hoy.</p>
      )}

      <div className="games-container">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <div className="game-top">
              <span>{game.league}</span>
              <small>{game.time}</small>
            </div>

            <h3>{game.awayTeam}</h3>
            <p>VS</p>
            <h3>{game.homeTeam}</h3>

            <p className="stadium">📍 {game.stadium}</p>

            <div className="pick-box">
              <small>Estado</small>
              <strong>{game.status}</strong>
            </div>

            <div className="confidence">
              <strong>{game.reason}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedGames;