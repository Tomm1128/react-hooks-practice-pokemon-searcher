import React, { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"
import { getPokemon } from "../services/fetchers"

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    getPokemon().then((pokemons) => setPokemonList(pokemons))
  }, [])

  if (!pokemonList) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonList={pokemonList} />
    </Container>
  )
}

export default PokemonPage
