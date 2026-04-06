import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const params = new URLSearchParams({
    q: query,
    limit: "10",
    lang: "es",
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
  });

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?${params}`,
  );

  const { data } = await response.json();

  console.log(data);

  return data.map((gif: any) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: gif.images.original.width,
    height: gif.images.original.height,
  }));
};
