import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/list/list';


const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        const results = response.data.results;
        const promises = results.map(async pokemon => {
          const pokemonResponse = await axios.get(pokemon.url);
          return pokemonResponse.data;
        });
        const pokemonData = await Promise.all(promises);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <PokemonList pokemonList={pokemonList}/>
    </div>
  );
};

export default App;