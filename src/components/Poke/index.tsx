import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PropsPoke, StateType } from './type'

const Poke: React.FC = () => {
  const [poke, setPoke] = useState<StateType[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10')
      const currentData = res.data.results
      currentData.forEach(async (pokeData: PropsPoke) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeData.name}`)
        console.log(poke.data.name)
        setPoke((prevData) => [...prevData, poke.data])
      })
    }
    getData()
  }, [])

  return (
    <div className="container d-flex align-content-start flex-wrap">
      {poke.map((pokeDataMap,id) => (
        <ul key={id}>
          <li>{pokeDataMap.name}</li>
          <ul className="border-0 container d-flex flex-row">
            <p> Ability:</p>
            {pokeDataMap.abilities.map((abi, id) => (
              <li className="ms-2 border-0 mb-0" key={id}>
                <p>{abi.ability.name}</p>
              </li>
            ))}
          </ul>
          <img src={pokeDataMap.sprites.front_shiny} alt={pokeDataMap.name} />
        </ul>
      ))}
    </div>
  )
}

export default Poke
