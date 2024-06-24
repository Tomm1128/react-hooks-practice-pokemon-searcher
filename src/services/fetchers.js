const api = "http://localhost:3001/pokemon/"

const getPokemon = () => {
  return fetch(api).then((resp) => resp.json())
}

export { getPokemon }
