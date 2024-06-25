import React, { useState } from "react"
import { Form } from "semantic-ui-react"
import { createPokemon } from "../services/fetchers"

const initializeForm = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: "",
}

function PokemonForm({ reloadPokemon }) {
  const [formData, setFormData] = useState(initializeForm)

  const updateFormData = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    }

    setFormData(newFormData)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      },
    }

    createPokemon(newPokemon).then(() => reloadPokemon())
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={onSubmitForm}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={updateFormData}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={updateFormData}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={updateFormData}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={updateFormData}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
