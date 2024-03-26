import React, { useState } from 'react';
import PokemonInfo from "../item/item";
import './list.css';

function PokemonList({ pokemonList }) {
  const [filter, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Функция для обновления фильтра по имени
  const handleNameFilterChange = event => {
    setFilter(event.target.value);
  };

  // Функция для обновления фильтра по типу
  const handleTypeFilterChange = event => {
    setTypeFilter(event.target.value);
  };

  // Применение фильтров к списку покемонов
  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase()) &&
    (typeFilter === '' || pokemon.types.some(type => type.type.name.toLowerCase() === typeFilter.toLowerCase()))
  );

  // Получение уникальных типов покемонов
  const uniqueTypes = Array.from(new Set(pokemonList.flatMap(pokemon => pokemon.types.map(type => type.type.name))));

  return (
    <div className="container">
      <div className="text">
        <h1>All Pokemon</h1>
      </div>
      {/* Форма для фильтрации по имени */}
     <div className="search-area">
     <form>
        <input
          type="text"
          placeholder="Search Pokemon by name"
          value={filter}
          onChange={handleNameFilterChange}
        />
      </form>
      {/* Форма для фильтрации по типу */}
      <form>
        <select value={typeFilter} onChange={handleTypeFilterChange}>
          <option value="">All Types</option>
          {uniqueTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </form>
     </div>
      <div className="area">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map(pokemon => <PokemonInfo key={pokemon.id} pokemon={pokemon} />)
        ) : (
          <p>No matching Pokemon found.</p>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
