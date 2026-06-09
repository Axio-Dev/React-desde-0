import { useEffect, useState } from "react";

interface Pokemom {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id }: Props) => {
  /**
   * Obtiene el nombre del Pokemón por su ID y actualiza el estado
   * @param id - Identificador del Pokemón
   */
  const [pokemon, setPokemon] = useState<Pokemom | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonById = async (id: number) => {
    setIsLoading(true);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      setPokemon(null);
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setPokemon({
      id: id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    // Properties
    isLoading,
    pokemon,

    // Computed
    formattedId: id.toString().padStart(3, "0"),
  };
};
