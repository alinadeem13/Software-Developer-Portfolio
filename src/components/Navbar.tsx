import { useEffect, useState } from "react";
import styles from "./style.module.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // (optional) close on ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // (optional) prevent body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Software Developer</h1>

            {/* Hamburger */}
            <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
            >
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Nav list */}
            <ul
                id="primary-navigation"
                className={`${styles.navList} ${isOpen ? styles.active : ""}`}
            >
                <li>
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};
