import './item.css'

function PokemonInfo( {pokemon} ) {
    return (
        <div className="items">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
          {/* Другие характеристики покемона */}
        </div>
      );
}

export default PokemonInfo;