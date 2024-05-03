import Link from "next/link";
import styles from "./Nav.module.css"

const Nav = () => {

    const nav_list = [
        {
            title: 'Layout',
            list: [
                {
                    name: 'Grid',
                    path: '',
                },
                {
                    name: 'Flex',
                    path: '',
                },
                
            ]
        }
    ]

    return (
        <nav className={styles.container}>
            {nav_list.map(({
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