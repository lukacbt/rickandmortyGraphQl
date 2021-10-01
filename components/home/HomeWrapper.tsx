import { FC } from "react"
import { useSearch } from "../../hooks"
import { Character, Props } from "../../pages"
import { CharacterCard } from "./CharacterCard"
import styles from "./Home.module.css"

export const HomeWrapper: FC<Props> = ({ characters, count }) => {
    const { handleSearch, search, searchData, handleChange } = useSearch("/api/searchCharacter")

    return (
      <>
        <div className={styles.searchHolder}>
          <input value={search} onChange={handleChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className={styles.container}>
          {
            searchData?.data?.characters?.results
            ?
            searchData.data.characters.results.map((ch: Character) => {
              return <CharacterCard key={ch.id} {...ch} />
            })
            :
            characters
            &&
            characters.map((ch: Character) => {
              return <CharacterCard key={ch.id} {...ch} />
            })
          }
        </div>
      </>
    )
}
