import { createContext, FC, ReactNode } from "react"
import { useSearch } from "./hooks"

export const SearchContext = createContext<any>(null)

export const SearchContextProvider: FC<ReactNode> = ({ children }) => {
    const { handleSearch, searchData, search, searchedFor, handleChange, current } = useSearch("/api/searchCharacter")

    
    return (
        <SearchContext.Provider value={{ handleSearch, current, searchedFor, search, handleChange, searchData }}>
            {children}
        </SearchContext.Provider>
    )
}