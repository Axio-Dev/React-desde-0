import { data, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { useMemo } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useHeroStats } from "@/heroes/hooks/useHeroStats";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];

    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes", "page", { page, limit }], // Manando la page y el limit como objeto para que no importe la posición en el url
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // Caché fresca por 5 minutos
  });

  const { summary } = useHeroStats();

  console.log({ data });

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administrar SuperHéroes y Villanos"
        />

        <CustomBreadcrumbs currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  return prev;
                })
              }
            >
              All Characters ({summary?.total})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  return prev;
                })
              }
            >
              Heroes ({summary?.hero_count})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  return prev;
                })
              }
            >
              Villains ({summary?.villian_count})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* All Characters Grid */}
            <h1>Todos los personajes</h1>
            <HeroGrid heroes={heroesResponse?.results ?? []} />
          </TabsContent>
          {/* All Favorite Carachters */}
          <TabsContent value="favorites">
            <h1>Favoritos</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
          {/* All Heroes */}
          <TabsContent value="heroes">
            <h1>Héroes</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
          {/* All Villians */}
          <TabsContent value="villains">
            <h1>Villanos</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {}
        <CustomPagination totalPages={heroesResponse?.total_pages ?? 1} />
      </>
    </>
  );
};
