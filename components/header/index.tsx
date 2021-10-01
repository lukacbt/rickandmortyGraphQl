import Link from "next/link"
import styles from "./styles.module.css"

export const Header = () => {
    const { header } = styles

    return (
        <div className={header}>
            <Link href="/">Home</Link>
        </div>
    )
}