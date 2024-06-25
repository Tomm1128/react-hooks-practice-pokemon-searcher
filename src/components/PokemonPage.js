import React, { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"
import { getPokemon } from "../services/fetchers"

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState(null)
  const [search, setSearch] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  useEffect(() => {
    getPokemon().then((pokemons) => {
      setPokemonList(pokemons)
    })
  }, [fetchTrigger])

  if (!pokemonList) {
    return <h1>Loading...</h1>
  }

  const triggerFetch = () => {
    setFetchTrigger(!fetchTrigger)
  }

  const filteredPokemon = pokemonList.filter((pokemon) => {
    return search === "" ? true : pokemon.name.includes(search)
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm reloadPokemon={triggerFetch} />
      <br />
      <Search searchInput={search} onSearch={setSearch} />
      <br />
      <PokemonCollection pokemonList={filteredPokemon} />
    </Container>
  )
}

export default PokemonPage
