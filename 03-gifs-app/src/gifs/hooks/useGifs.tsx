import { useState, useRef } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by.query.action";
import type { Gif } from "../interfaces/gif.interface";

// Moving outside of the main hook to avoid re-rendering and avoid duplicate HTTP calls
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    const queryFormatted = query.trim().toLowerCase();
    if (!queryFormatted) return;
    if (previousTerms.includes(queryFormatted)) return;
    setPreviousTerms([queryFormatted, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    console.log(gifs);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
    console.log(gifsCache);
  };

  return {
    // Values / Properties
    gifs,

    // Methods / actions
    previousTerms,
    handleSearch,
    handleTermClicked,
  };
};
