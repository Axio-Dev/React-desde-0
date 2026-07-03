import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { HeroStats } from "./HeroStats";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useHeroSummary } from "../hooks/useHeroSummary";
import type { SummaryInformationResponse } from "../types/summary-information.response";

vi.mock("../hooks/useHeroSummary");
const mockUseHeroSummary = vi.mocked(useHeroSummary);

const mockSummaryData: SummaryInformationResponse = {
  strongest_hero: {
    id: "0b8ad276-79c9-4a6c-b6a7-74ca8efcf545",
    slug: "clark-kent",
    name: "Clark Kent",
    alias: "Superman",
    powers: [
      "Súper fuerza",
      "Vuelo",
      "Visión de calor",
      "Visión de rayos X",
      "Invulnerabilidad",
      "Súper velocidad",
    ],
    description:
      "El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.",
    strength: 10,
    intelligence: 8,
    speed: 9,
    durability: 10,
    team: "Liga de la Justicia",
    image: "1.jpeg",
    first_appearance: "1938",
    status: "Active",
    category: "Hero",
    universe: "DC",
  },
  smartest_hero: {
    id: "cca55be1-1e8e-46ad-8112-7816c2eed97c",
    slug: "bruce-wayne",
    name: "Bruce Wayne",
    alias: "Batman",
    powers: [
      "Artes marciales",
      "Habilidades de detective",
      "Tecnología avanzada",
      "Sigilo",
      "Genio táctico",
    ],
    description:
      "El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.",
    strength: 6,
    intelligence: 10,
    speed: 6,
    durability: 7,
    team: "Liga de la Justicia",
    image: "2.jpeg",
    first_appearance: "1939",
    status: "Active",
    category: "Hero",
    universe: "DC",
  },
  hero_count: 18,
  villian_count: 7,
  total: 25,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderHeroStats = (mockData?: Partial<SummaryInformationResponse>) => {
  if (mockData) {
    mockUseHeroSummary.mockReturnValue({
      data: mockData,
    } as unknown as ReturnType<typeof useHeroSummary>);
  } else {
    mockUseHeroSummary.mockReturnValue({
      data: undefined,
    } as unknown as ReturnType<typeof useHeroSummary>);
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <HeroStats />
    </QueryClientProvider>,
  );
};

describe("heroStats", () => {
  test("should render component with default values", () => {
    renderHeroStats();

    expect(screen.getByText("Loading...")).toBeDefined();
  });

  test("should render HeroStats with mockData", () => {
    const { container } = renderHeroStats(mockSummaryData);

    expect(container).toMatchSnapshot();
    expect(screen.getByText("Total de personajes")).toBeDefined();
    expect(screen.getByText("Favoritos")).toBeDefined();
    expect(screen.getByText("Fuerte")).toBeDefined();
    expect(screen.getByText("Inteligente")).toBeDefined();
  });
});
