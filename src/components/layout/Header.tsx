import Image from "next/image";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.name}>
                <Image
                src="/favicon.png"
                alt="ground"
                width={22}
                height={22}
                />
                <b>Ground</b>
            </span>
        </header>
    );
}

export default Header;