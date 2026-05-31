import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by.query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = async (term: string) => {
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
