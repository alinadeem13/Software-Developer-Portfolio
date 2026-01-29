import { useState } from 'react';
import styles from './style.module.css';

const Education = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const educationData = [
        {
            title: "MS CS from Ulster University",
            degree: "Master's Degree in Computer Science",
            institution: "Ulster University",
            year: "Jan 2026 - present",
            location: "Central London, United Kingdom",
            description: "Specializing in Artificial Intelligence, Machine Learning & Software Development along with research on 'AI for Healthcare Applications' and 'Advanced Machine Learning Algorithms'."
        },
        {
            title: "BS CS from UMT",
            degree: "Bachelor's Degree in Computer Science",
            institution: "University of Management and Technology (UMT)",
            year: "Oct 2020 - July 2024",
            location: "Lahore, Pakistan",
            description: "Focused on Advanced Software Development, Full Stack & Mobile App Development,  Data Structures, and Algorithms, Scalable Databases, Mathematics (Calculus I & II, Linear Algebra, Numerical Analysis, Differential Equations) and programming languages (C++, Java, Python, Javascript, Kotlin). Developed a capstone project on 'Web Application Education Portal Integrated with Advanced AI Integrations'."
        },
        {
            title: "A-Levels from Punjab Group of Colleges",
            degree: "A-Levels in Pre-Engineering",
            institution: "Punjab Group of Colleges",
            year: "2017 - 2019",
            location: "Lahore, Pakistan",
            description: "Built a strong foundation in mathematics and science, which paved the way for a career in technology."
        }
    ];

    const toggleCard = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section id="education" className={styles.education}>
            <h2 className={styles.title}>Education</h2>
            <p className={styles.subtitle}>
                A showcase of my academic journey and qualifications.
            </p>
            <div className={styles.cardContainer}>
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className={`${styles.card} ${activeCard === index ? styles.active : ''}`}
                        onClick={() => toggleCard(index)}
                    >
                        <div className={styles.cardHeader}>
                            <h3>{edu.title}</h3>
                        </div>
                        {activeCard === index && (
                            <div className={styles.cardDetails}>
                                <p><strong>Degree:</strong> {edu.degree}</p>
                                <p><strong>Institution:</strong> {edu.institution}</p>
                                <p><strong>Year:</strong> {edu.year}</p>
                                <p><strong>Location:</strong> {edu.location}</p>
                                <p><strong>Description:</strong> {edu.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;