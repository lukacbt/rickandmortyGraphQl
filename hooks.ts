import { ChangeEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"

export enum Type {
    PAGINATION = "PAGINATION",
    SEARCH = "SEARCH"
}

export const useSearch = (api: string) => {
    const [ search, setSearch ] = useState("")
    const [ current, setCurrent ] = useState(1)
    const [ searchedFor, setSearchedFor ] = useState("")
    const [ searchData, setSearchData ] = useState({
        count: 0,
        characters: []
    })
    const router = useRouter()

    const fetchSearch = async () => {
        const body = { 
            search: router.query.search,
            page: Number(router.query.page)
        }
        const JSONdata = await fetch(api, {
            method: "POST",
            body: JSON.stringify(body)
        })
        const { data } = await JSONdata.json()
        setSearchData({
            count: data.characters.info.count,
            characters: data.characters.results
        })
    }

    useEffect(() => {
        fetchSearch()
        router.query.search && setSearchedFor(String(router.query.search))
        router.query.page && setCurrent(Number(router.query.page))
    }, [router.query.search, router.query.page])
    
    
    const handleSearch = (page: number, type: Type) => {
        if (type === Type.SEARCH) {
            setSearchedFor(search)
            if (search) {
                router.push(`/?search=${search}&page=${page}`)
            } else {
                router.push("/")
                setCurrent(1)
            }
        }
        if (type === Type.PAGINATION) {
            router.push(`/?search=${searchedFor}&page=${page}`)
        }
        setSearch("")
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return {
        search,
        searchData,
        handleSearch,
        handleChange,
        searchedFor,
        current
    }
}