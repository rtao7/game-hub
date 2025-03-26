"use client";
import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { games, error, isLoading };
};
