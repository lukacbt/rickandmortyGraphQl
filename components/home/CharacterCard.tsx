import styles from "./styles.module.css"
import Link from "next/link"
import { FC } from "react"
import { Character } from "../../pages"
import Image from "next/image"

export const CharacterCard: FC<Character> = ({ name, image, id, species, gender }) => {
    const { card, breakk, div } = styles

    return (
        <Link href={`/character/${id}`} passHref>
            <div className={card}>
                <Image
                    src={image}
                    alt={`character image of ${name}`}
                    width={100}
                    height={100}
                    quality={100}
                />
                <div className={div}>
                    <h2>{name}</h2>
                    <div className={breakk}></div>
                    <h4>Gender: {gender}</h4>
                    <h4>Species: {species}</h4>
                </div>
            </div>
        </Link>
    )
}