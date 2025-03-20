"use client";
import apiClient from "@/services/api-client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useGenres } from "@/hooks/useGenres";
import Image from "next/image";
import { Button } from "./ui/button";

const GenreList = () => {
  const { genres, error } = useGenres();

  return (
    <div className="text-black w-fit p-8">
      {error && <p className="text-black">{error}</p>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} className="flex gap-2 pb-4">
            <img
              src={genre.image_background}
              alt={genre.name}
              width={32}
              height={32}
              className="rounded-sm"
            />
            <Button
              key={genre.id}
              onClick={() => console.log(genres.map((genre) => genre.name))}
              variant="link"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
