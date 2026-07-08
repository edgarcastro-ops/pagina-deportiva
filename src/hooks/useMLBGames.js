import { useEffect, useState } from "react";
import { getTodayMLBGames } from "../services/mlbApi";

function useMLBGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await getTodayMLBGames();
        setGames(data);
      } catch (err) {
        setError("No se pudieron cargar los juegos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  return { games, loading, error };
}

export default useMLBGames;