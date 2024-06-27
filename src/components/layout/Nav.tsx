import Link from "next/link";
import styles from "./Nav.module.css"
import { gnb_nav } from "@/util/nav";

const Nav = () => {



    return (
        <nav className={styles.container}>
            {gnb_nav.map(({
                title, list
            }) => (
            <article key={`nav_${title}`}>
                <h5>{title}</h5>
                <ul>
                    {list.map(({
                        name, path
                    }) => (
                    <li key={`nav_${title}_${name}`}>
                        <Link href={path}>{name}</Link>
                    </li>
                    ))}
                </ul>
            </article>
            ))}
        </nav>
    );
}

export default Nav;

