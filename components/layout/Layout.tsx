import styles from "./styles.module.css"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}