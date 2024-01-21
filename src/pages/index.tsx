import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  // const name = useAppSelector((state) => state.setNameSlice.name)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(setName('aun'))
  //   }, 1000)
  // })

  const endPoint = 'https://graphql-pokemon2.vercel.app'
  const headers = {
    'Content-Type': 'application/json'
  }

  const AllBuildingQuery = `{
    pokemons(first: $first){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }` // graphQl Query

  const graphqlQuery = {
    operationName: 'pokemons',
    query: `query pokemons ($first: Int!)${AllBuildingQuery}`,
    variables: { first: '1' }
  }

  const fetchAllBuildingInfo = () => {
    const response = axios({
      url: endPoint,
      method: 'post',
      data: graphqlQuery,
      headers: headers
    })
    return response
  }

  fetchAllBuildingInfo()
    .then((res) => console.log('response', res.data)) // will return data object
    .catch((err) => console.log('err', err)) // err while fetching details
  return <div className=" h-screen bg-white ">{}</div>
}

export default Home
