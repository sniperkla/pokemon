import axios from 'axios'

export const getPokemon = async () => {
  console.log('tets')
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
  }`

  const graphqlQuery = {
    operationName: 'pokemons',
    query: `query pokemons ($first: Int!) ${AllBuildingQuery}`,
    variables: { first: '2' }
  }

  const fetchPokemon = async () => {
    const response = await axios({
      url: endPoint,
      method: 'post',
      data: graphqlQuery,
      headers: headers
    })
    console.log(response)
    return response
  }

  return fetchPokemon()
    .then((res) => {
      console.log('response', res.data)
      return { name: '2', image: '2', number: '2' }
    }) // will return data object
    .catch((err) => {
      console.log('err', err)
      return null
    }) // err while fetching details
}
