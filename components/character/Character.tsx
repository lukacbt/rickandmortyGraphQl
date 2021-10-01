import styles from "./styles.module.css"
import Image from "next/image"
import { Episode } from "./Episode"
import { EachCharacter } from "../../pages/character/[id]"

export const Character = ({ character }: EachCharacter) => {

    return (
        character
        ?
        <div className={styles.wrapper}>
            <h1>{character.name}</h1>
            <div className={styles.flexedDiv}>
                <div className={styles.imgDiv}>
                    <Image
                        width={150}
                        height={180}
                        src={character.image}
                        alt="Image of the chosen character"
                    />
                </div>
                <div>
                    <h4>Gender: {character.gender} </h4>
                    <h4>Status: {character.status} </h4>
                    <h4>Species: {character.species} </h4>
                    <h4>Origin: {character.origin.name}</h4>
                </div>
            </div>
            <div className={styles.episodes}>
                {
                    character?.episode?.map(ep => <Episode key={ep.episode} episode={ep.episode} name={ep.name} />)
                }
            </div>
        </div>
        :
        <h1>Loading...</h1>
    )
}
