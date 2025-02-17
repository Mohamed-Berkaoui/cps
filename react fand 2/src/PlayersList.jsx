import React from 'react'
import players from './players'
import Player from './Player'

function PlayersList() {
  return (
    <div>
        {players.map(player=><Player key={player.id} {...player}  />)}
    </div>
  )
}

export default PlayersList