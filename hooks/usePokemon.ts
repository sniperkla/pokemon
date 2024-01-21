import { getPokemon } from '../lib/features/pokemonAction'
import { setPokemon } from '../lib/features/pokemonSlice'
import { useAppDispatch, useAppSelector } from '../lib/hooks'

export const usePokemon = () => {
  const dispatch = useAppDispatch()
  const pokemon = useAppSelector((state) => state.pokemon.pokemon)

  const handleGetPokemon = async () => {
    let result = await getPokemon()
    if (result) {
      dispatch(setPokemon(result))
    }
  }
  return { pokemon, handleGetPokemon }
}
