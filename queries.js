import { gql } from "@apollo/client"

export const GET_CHARACTERS = gql`
    query getCharacters($page: Int) {
        characters(page: $page) {
            info {
                count
            }
            results {
                id
                image
                name
                species
                gender
            }
        }
    }
`

export const GET_SEARCH_CHARACTERS = gql`
    query getSearchCharacters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                count
            }
            results {
                id
                image
                name
                species
                gender
            }
        }
    }
`

export const GET_CHARACTER = gql`
    query getCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            image
            gender
            origin {
                name
            }
            episode {
                name
                episode
            }
        }
    }
`