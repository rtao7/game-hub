import apiClient from "@/services/api-client";
import React, { use, useEffect, useState } from "react";

interface fetchGenresResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGenresResponse>("/genres")
      .then((response) => setGenres(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return { genres, error };
};
