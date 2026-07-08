import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/StatsCard";
import GameCard from "../components/GameCard";
import useMLBGames from "../hooks/useMLBGames";

function MLB() {
  const { games, loading, error } = useMLBGames();

  return (
    <MainLayout>
      <section className="mlb-hero">
        <div>
          <span className="page-badge">⚾ MLB CENTER</span>

          <h1>Partidos, Picks y Análisis de MLB</h1>

          <p>
            Consulta juegos destacados, horarios, estadísticas y pronósticos
            deportivos en un solo lugar.
          </p>
        </div>
      </section>

      <section className="stats-grid">
        <StatsCard
          icon="⚾"
          title="Partidos de hoy"
          value={loading ? "..." : games.length}
          description="Calendario MLB activo"
        />

        <StatsCard
          icon="🔥"
          title="Picks disponibles"
          value="Próximamente"
          description="Gratis y Premium"
        />

        <StatsCard
          icon="🎯"
          title="Confianza promedio"
          value="--"
          description="Cuando agreguemos pronósticos"
        />

        <StatsCard
          icon="⭐"
          title="Premium"
          value="Próximamente"
          description="Pronósticos exclusivos"
        />
      </section>

      <section className="mlb-page">
        <div className="section-title">
          <span>🔥 Juegos de Hoy</span>
          <p>Partidos reales cargados desde la API de MLB.</p>
        </div>

        {loading && <p>Cargando juegos...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && games.length === 0 && (
          <p>No hay juegos de MLB para hoy.</p>
        )}

        {!loading && !error && games.length > 0 && (
          <div className="games-container">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}

export default MLB;