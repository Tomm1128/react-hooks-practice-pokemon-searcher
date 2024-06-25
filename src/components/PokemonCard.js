import React, { useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({ pokemon: { id, name, hp, sprites } }) {
  const [sprite, setSprite] = useState(true)

  return (
    <Card>
      <div>
        <div className="image" onClick={() => setSprite(!sprite)}>
          <img src={sprite ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
