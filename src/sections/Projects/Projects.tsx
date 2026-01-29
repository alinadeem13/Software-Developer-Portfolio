import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const projects = [
    {
        title: "Invest Play",
        description: "Investing and Gaming platform with real-time data processing and secure payment integration.",
        url: "https://www.invplay.com",
        tech: ["React", "Node.js", "PostgreSQL"],
        type: "Full Stack"
    },
    {
        title: "NOW V Play",
        description: "Comprehensive sports platform with live streaming, analytics, and user management.",
        url: "https://www.nowvplay.com/",
        tech: ["Next.js", "MongoDB", "Socket.io"],
        type: "Web App"
    },
    {
        title: "Good Fynd",
        description: "E-commerce platform with advanced search, inventory management, and payment processing.",
        url: "https://www.goodfynd.com/",
        tech: ["React", "Express", "MySQL"],
        type: "E-commerce"
    },
    {
        title: "Atypically Me",
        description: "Mental health platform with secure user profiles, session management, and data analytics.",
        url: "https://atypicallyme.com/",
        tech: ["Vue.js", "Firebase", "PWA"],
        type: "Web App"
    },
    {
        title: "u4ria",
        description: "Meditation app with offline capability, progress tracking, and user personalization.",
        url: "https://u4riahub.com/",
        tech: ["React", "Node.js & Nest.js", "Redux", "API", "MongoDB"],
        type: "Mobile App"
    },
    {
        title: "Inspector - Real Wealdity",
        description: "Inspector App to Inspect the Homes with image recognition and report generation features.",
        url: "https://sbx-inspector.realwealtdy.net/login",
        tech: ["React Native", "Redux", "API", "Node.js", "Nest.js", "MongoDB"],
        type: "Web & Mobile App"
    },
];

const Projects = () => {
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
            { threshold: 0.2 }
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
            className={`${styles.projects} fadeInUp ${isVisible ? "active" : ""}`}
        >
            <div className={styles.container}>
                <h2>Featured Projects</h2>
                <p className={styles.subtitle}>
                    A selection of projects showcasing my technical expertise and problem-solving approach
                </p>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.cardHeader}>
                                <h3>{project.title}</h3>
                                <span className={styles.projectType}>{project.type}</span>
                            </div>

                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.techStack}>
                                {project.tech.map((technology, techIndex) => (
                                    <span key={techIndex} className={styles.techTag}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.cardFooter}>
                                <span className={styles.viewProject}>
                                    View Project
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;