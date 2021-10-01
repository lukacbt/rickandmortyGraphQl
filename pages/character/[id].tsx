import { client, handlePaths } from "../../helpers"
import { GET_CHARACTER } from "../../queries"
import { Episode } from "../../components/character/Episode"
import { Character } from "../../components/character/Character"

interface Params {
    params: {
        id: string
    }
}

interface Resident {
    name: string
}

interface Origin {
    name: string
    residents: Resident[]
}

export interface Episode {
    name: string
    episode: string
}

export interface EachCharacter {
    character: {
        id: string
        name: string
        image: string
        status: string
        species: string
        gender: string
        origin: Origin
        episode: Episode[]

    }
}

const CharacterPage = ({ character }: EachCharacter) => <Character character={character} />

export const getStaticPaths = () => {
    const ids = [1, 2, 3, 4, 5, 6]

    return {
        paths: handlePaths(ids),
        fallback: true
    }
}

export const getStaticProps = async ({ params }:Params ) => {
    const { id } = params

    const { data: { character } } = await client.query({
        query: GET_CHARACTER,
        variables: {
            id
        }
    })

    return {
        props: {
            character
        }
    }
}

export default CharacterPage
