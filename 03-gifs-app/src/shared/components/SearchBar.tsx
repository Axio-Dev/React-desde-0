import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState(""); // Se pone como un string vacío por defecto el query

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      /* Diciendo a react, cada que pasen 700 milesimas de segundo, guarda el query */
      onQuery(query);
    }, 700);

    // onQuery(query);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    /* Función para que se obtenga los strings que una usuario está ingresando
    en el searchBar */
    onQuery(query);
    setQuery(""); // Limpiando la caja de texto una vez que se pulsa el botón de buscar
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    /* Función para que cuando se presione "Enter" se dispare el evento onKeyDown */
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
