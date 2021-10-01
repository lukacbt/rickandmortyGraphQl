import type { NextPage } from 'next'
import { GET_CHARACTERS } from "../queries"
import { client } from '../helpers'
import { HomeWrapper } from '../components/home/HomeWrapper'

export interface Character {
  id: number
  name: string
  species: string
  gender: string
  image: string
}

export interface Props {
  characters: Character[]
  count: number
}

const Home: NextPage<Props> = ({ characters, count }) => <HomeWrapper characters={characters} count={count} />

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: {
      page: 1
    }
  })

  return {
    props: {
      characters: data.characters.results,
      count: data.characters.info.count
    }
  }
}

export default Home
