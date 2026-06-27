import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useSearchParams } from "react-router";
import {
  searchHeroesAction,
  type Options,
} from "@/heroes/actions/search-heroes.action";
import { useQuery } from "@tanstack/react-query";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const options: Options = {
    name: searchParams.get("name") ?? undefined,
    category: searchParams.get("category") ?? undefined,
    team: searchParams.get("team") ?? undefined,
    universe: searchParams.get("universe") ?? undefined,
    status: searchParams.get("status") ?? undefined,
    strength: searchParams.get("strength")
      ? Number(searchParams.get("strength"))
      : undefined,
  };

  const { data: searchedHeroData } = useQuery({
    queryKey: ["searched-hero", options],
    queryFn: () => searchHeroesAction(options),
  });

  console.log({ searchedHeroData });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administrar SuperHéroes y Villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: "Home1", to: "/" },
        //   { label: "Home2", to: "/" },
        //   { label: "Home3", to: "/" },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />
      {/* Filters and Search */}
      <SearchControls />

      {/* */}
      <HeroGrid heroes={searchedHeroData?.results ?? []} />
    </>
  );
};

export default SearchPage;
