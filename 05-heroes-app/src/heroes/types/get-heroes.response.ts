import type { Hero } from "./hero.interface";

export interface HeroesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Hero[];
}
