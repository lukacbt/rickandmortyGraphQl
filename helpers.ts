import { ApolloClient, InMemoryCache } from "@apollo/client"

export const handlePaths = (array: (string | number)[]) => {
    const paths = array.map(item => ({
        params: { id: String(item) }
    }))
    return paths
}

export const client = new ApolloClient({
    uri: process.env.API_URI,
    cache: new InMemoryCache()
})
