import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

export const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 } // triggers when 20% of section is visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <section
            ref={aboutRef}
            className={`${styles.about} fadeInUp ${isVisible ? "active" : ""}`}
        >
            <div className={styles.container}>
                <h2>About Me</h2>
                <p>
                    Hi, I’m Ali 👋 — a passionate Full Stack / MERN developer. I love
                    building modern, scalable, and user-friendly web apps.
                </p>
                <p>
                    I specialize in MERN Stack (MongoDB, Express.js, React.js Next.js, Node.js, Oracle), Shopify Development, and WordPress/LMS solutions, helping businesses and startups achieve their digital goals.
                </p>
                <p>
                    When I’m not coding, I enjoy exploring new tech, learning AI tools,
                    and helping people through software solutions.
                </p>

            </div>
        </section>
    );
};
