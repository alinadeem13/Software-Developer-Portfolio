import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(`.${styles.navbar}`);
            if (window.scrollY > 50) {
                navbar?.classList.add(styles.scrolled);
            } else {
                navbar?.classList.remove(styles.scrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Software Developer</h1>

            <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
            >
                {isOpen ? "✖" : "☰"}
            </button>

            <ul
                id="primary-navigation"
                className={`${styles.navList} ${isOpen ? styles.active : ""}`}
            >
                <li><HashLink smooth to="/home#hero" onClick={closeMenu}>Home</HashLink></li>
                <li><HashLink smooth to="/home#about" onClick={closeMenu}>About</HashLink></li>
                <li><HashLink smooth to="/home#projects" onClick={closeMenu}>Projects</HashLink></li>
                <li><HashLink smooth to="/home#contact" onClick={closeMenu}>Contact</HashLink></li>
            </ul>
        </nav>
    );
};
