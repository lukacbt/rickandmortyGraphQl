import styles from "./styles.module.css"
import { Type } from "../../hooks"
import { useContext } from "react"
import { SearchContext } from "../../context"

export const HeaderInput = () => {
    const { search, handleChange, handleSearch } = useContext(SearchContext)

    return (
    <div className={styles.searchHolder}>
        <input value={search} onChange={handleChange} />
        <button onClick={() => handleSearch(1, Type.SEARCH)}>Search</button>
    </div>
    )
}