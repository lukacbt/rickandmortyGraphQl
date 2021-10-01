import { ChangeEvent, useState } from "react"

export const useSearch = (api: string) => {
    const [ search, setSearch ] = useState("")
    const [ searchData, setSearchData ] = useState({
        count: 0,
        characters: []
    })

    const handleSearch = async () => {
        const JSONdata = await fetch(api, {
            method: "POST",
            body: search
        })
        const data = await JSONdata.json()
        setSearchData(data)
        setSearch("")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return {
        search,
        searchData,
        handleSearch,
        handleChange
    }
}