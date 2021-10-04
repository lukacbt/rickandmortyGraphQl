import { useContext } from "react"
import { FC } from "react"
import { SearchContext } from "../../context"
import { Character, Props } from "../../pages"
import { CharacterCard } from "./CharacterCard"
import styles from "./Home.module.css"
import { Pagination } from "antd"
import 'antd/dist/antd.css';
import { Type } from "../../hooks"

export const HomeWrapper: FC<Props> = ({ characters, count }) => {
    const { searchData, current, searchedFor, handleSearch } = useContext(SearchContext)

    const handleChange = (page: number) => {
      handleSearch(page, Type.PAGINATION)
    }

    return (
      <>
        {
          searchedFor
          && <h2>You searched for "{searchedFor}"</h2>
        }
        <Pagination pageSize={20} current={current} showSizeChanger={false} onChange={handleChange} total={searchData.count ? searchData.count : count} />
        <div className={styles.container}>
          {
            searchData?.count > 0
            ?
            searchData.characters.map((ch: Character) => {
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
