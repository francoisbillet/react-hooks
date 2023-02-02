import * as React from 'react'
import {
  PokemonForm,
  fetchPokemon,
  PokemonDataView,
  PokemonInfoFallback,
} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [pokemon, setPokemon] = React.useState(null)

  React.useEffect(() => {
    if (!pokemonName) {
      return
    }

    // This is to enable the loading state when switching between different pokemon.
    setPokemon(null)
    fetchPokemon(pokemonName).then(pokemonData => setPokemon(pokemonData))
  }, [pokemonName])

  if (!pokemonName) {
    return 'Submit a pokemon'
  }

  return pokemon ? (
    <PokemonDataView pokemon={pokemon} />
  ) : (
    <PokemonInfoFallback name={pokemonName} />
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
