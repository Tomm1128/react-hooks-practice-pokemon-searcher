const database = "http://localhost:3001/pokemon/"
const api = "https://pokeapi.co/api/v2/pokemon/"

const getPokemon = () => {
  return fetch(database).then((resp) => resp.json())
}

const createPokemon = (newPokemon) => {
  return fetch(database, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  }).then((resp) => resp.json())
}

export { getPokemon, createPokemon }
