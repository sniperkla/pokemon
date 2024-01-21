import { configureStore } from '@reduxjs/toolkit'
import pokemon from './features/pokemonSlice'

export const bookStore = () => {
  return configureStore({
    reducer: {
      pokemon: pokemon
    }
  })
}

export type AppStore = ReturnType<typeof bookStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
