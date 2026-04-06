import { useEffect, useEffectEvent, useState } from "react";
import GifList from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by.query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [previousGifs, setGifs] = useState<Gif[]>([]);

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

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />
      {/* Search */}
      <SearchBar placeholder="Busca tu emoción" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={previousGifs} />
    </>
  );
};
