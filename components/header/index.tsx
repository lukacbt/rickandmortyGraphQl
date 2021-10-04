import Link from "next/link"
import { HeaderInput } from "./Input"
import styles from "./styles.module.css"

export const Header = () => {
    const { header } = styles

    return (
        <header className={header}>
            <Link href="/">Home</Link>
            <HeaderInput />
        </header>
    )
}