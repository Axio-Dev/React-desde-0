import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes.response";

export interface Options {
  name?: string;
  status?: string;
  team?: string;
  category?: string;
  universe?: string;
  strength?: number;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (options: Options) => {
  const { data } = await heroApi.get<HeroesResponse>("/search", {
    params: options,
  });

  const searchedHero = data.results.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/media/heroes/${hero.image}`,
  }));

  return {
    ...data,
    results: searchedHero,
  };
};
