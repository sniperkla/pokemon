import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface pokemonDetail {
  name: string
  image: string
  number: string
}

interface State {
  pokemon: pokemonDetail
}

const initialState: State = {
  pokemon: { name: '', image: '', number: '' }
}

export const pokemon = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<pokemonDetail>) => {
      state.pokemon = action.payload
    }
  }
})

export const { setPokemon } = pokemon.actions
export default pokemon.reducer
