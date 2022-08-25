export type PropsPoke = {
  name: string
  url: string
}

export type AbilityType = {
  ability: PropsPoke
  is_hidden: boolean
}

export interface StateType {
  id: number
  name: string
  sprites: {
    front_shiny: string
  }
  abilities: AbilityType[]
}
