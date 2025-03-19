"use client";
import apiClient from "@/services/api-client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useGenres } from "@/hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();

  return (
    <div className="text-black w-[320px]">
      {error && <p className="text-black">{error}</p>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
