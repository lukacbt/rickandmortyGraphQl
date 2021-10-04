import { client } from "../../helpers"
import { GET_SEARCH_CHARACTERS } from "../../queries"

const handler = async (req, res) => {
    const { search, page } = JSON.parse(req.body)
    console.log(search)
        const { data } = await client.query({
            query: GET_SEARCH_CHARACTERS,
            variables: {
                page,
                filter: {
                    name: search
                }
            }
        })
        res.status(200).json({data})
}

export default handler
