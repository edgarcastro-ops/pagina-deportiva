const MLB_API_BASE_URL = "https://statsapi.mlb.com/api/v1";

export async function getTodayMLBGames() {
  const today = new Date().toISOString().split("T")[0];

  const response = await fetch(
    `${MLB_API_BASE_URL}/schedule?sportId=1&date=${today}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener juegos de MLB");
  }

  const data = await response.json();
  const games = data.dates?.[0]?.games || [];

  return games.map((game) => ({
    id: game.gamePk,
    league: "MLB TODAY",
    awayTeam: game.teams.away.team.name,
    homeTeam: game.teams.home.team.name,
    time: new Date(game.gameDate).toLocaleTimeString("es-DO", {
      hour: "numeric",
      minute: "2-digit",
    }),
    stadium: game.venue?.name || "Estadio no disponible",
    status: game.status?.detailedState || "Sin estado",
    reason: "Juego destacado del día",
  }));
}