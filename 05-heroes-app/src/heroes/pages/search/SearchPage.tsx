import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administrar SuperHéroes y Villanos"
      />
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Filters and Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
