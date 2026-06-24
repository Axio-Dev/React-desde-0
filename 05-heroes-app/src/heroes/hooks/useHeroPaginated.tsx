import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

export const useHeroPaginated = (page: number, limit: number) => {
  const query = useQuery({
    queryKey: ["heroes", "page", { page, limit }],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5,
  });

  return {
    ...query,
    heroesResponse: query.data,
  };
};
