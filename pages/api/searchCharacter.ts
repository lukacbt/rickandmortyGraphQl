import { client } from "../../helpers"
import { GET_SEARCH_CHARACTERS } from "../../queries"

const handler = async (req, res) => {
    const search = req.body
        const { data } = await client.query({
            query: GET_SEARCH_CHARACTERS,
            variables: {
                page: 1,
                filter: {
                    name: search
                }
            }
        })
        res.status(200).json({data})
}

export default handler
