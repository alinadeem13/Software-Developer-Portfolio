import { useState } from 'react';
import styles from './style.module.css';

const Experience = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const experienceData = [
        {
            title: "Freelance Software Developer & Tutor",
            company: "Self-Employed",
            duration: "Feb 2024 - Present",
            shortDescription: "Click to view details",
            description: [
                "Delivered end-to-end software development solutions including web applications, mobile apps, and custom e-commerce platforms for diverse clients across multiple industries.",
                "Specialized in WordPress and Shopify development, creating custom themes, plugins, and e-commerce solutions that increased client sales by up to 40%.",
                "Built responsive and scalable mobile applications using React Native and Flutter, ensuring cross-platform compatibility and optimal user experience.",
                "Provided comprehensive tutoring services in programming (Python, JavaScript, Java, C++) and advanced mathematics (Calculus, Linear Algebra, Discrete Mathematics) to college and BS-level students.",
                "Developed custom curriculum and teaching materials tailored to individual student needs, resulting in improved academic performance and programming proficiency.",
                "Managed multiple concurrent projects with strict deadlines while maintaining high code quality standards and client satisfaction rates above 95%.",
                "Collaborated with clients to gather requirements, provide technical consultation, and deliver solutions that align with business objectives and budget constraints."
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "PlanLab Solutions",
            duration: "July 2024 - Nov 2025",
            shortDescription: "Click to view details",
            description: [
                "Architected and developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), serving over 10,000+ active users.",
                "Led frontend development using React.js and Next.js, implementing server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO optimization.",
                "Designed and implemented RESTful APIs and GraphQL endpoints, ensuring efficient data flow between frontend and backend systems with PostgreSQL and MongoDB databases.",
                "Developed cross-platform mobile applications using React Native, successfully launching 3 apps on both iOS and Android platforms with 4.5+ star ratings.",
                "Built and deployed SaaS products from concept to production, implementing subscription-based models and multi-tenant architecture for scalability.",
                "Integrated third-party payment gateways including Stripe, PayPal, and local payment providers, handling secure transaction processing and subscription management.",
                "Managed cloud infrastructure on AWS and Google Cloud Platform, implementing CI/CD pipelines using GitHub Actions and Docker for automated testing and deployment.",
                "Collaborated in an agile development environment, participating in sprint planning, code reviews, and delivering weekly product demos to stakeholders and direct clients.",
                "Coordinated with cross-functional teams including designers, product managers, and QA engineers to ensure timely delivery of high-quality features.",
                "Mentored junior developers and conducted knowledge-sharing sessions on best practices, coding standards, and emerging technologies in the JavaScript ecosystem.",
                "Implemented comprehensive testing strategies using Jest, React Testing Library, and Cypress, achieving 85%+ code coverage across critical application modules."
            ]
        },
        {
            title: "IT Intern",
            company: "LESCO IT Directorate (Government IT Firm)",
            duration: "July 2024 - August 2024",
            shortDescription: "Click to view details",
            description: [
                "Gained hands-on experience in enterprise network infrastructure management at one of Pakistan's largest electricity distribution companies serving 6+ million consumers.",
                "Configured and maintained network devices including Cisco routers, switches, and firewalls to ensure secure and reliable connectivity across multiple departmental locations.",
                "Implemented and monitored IP protocols (TCP/IP, DNS, DHCP) and conducted network traffic analysis to optimize performance and troubleshoot connectivity issues.",
                "Assisted in firewall configuration and security policy enforcement using pfSense and FortiGate, protecting critical infrastructure from cyber threats and unauthorized access.",
                "Participated in network security audits and vulnerability assessments, documenting findings and recommending remediation strategies to enhance overall system security.",
                "Supported the IT team in managing Active Directory, user authentication systems, and group policy management for hundreds of government employees.",
                "Collaborated on the deployment and maintenance of enterprise-level monitoring tools for real-time network performance tracking and incident response.",
                "Gained valuable exposure to government IT operations, regulatory compliance requirements, and the unique challenges of managing critical utility infrastructure systems."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Softech Systems Pvt Ltd",
            duration: "July 2023 - Sep 2023",
            shortDescription: "Click to view details",
            description: [
                "Contributed to the development and maintenance of a large-scale enterprise banking and investment management application serving multiple financial institutions.",
                "Developed robust desktop application modules using Java (Swing/JavaFX) with Oracle Database as the backend, ensuring data integrity and transaction consistency.",
                "Implemented complex business logic for financial calculations, portfolio management, and risk assessment features used by banking professionals daily.",
                "Optimized database queries and stored procedures in Oracle PL/SQL, improving application response times by 30% and reducing server load.",
                "Performed bug fixes, code refactoring, and feature enhancements on legacy codebase while maintaining backward compatibility with existing client systems.",
                "Collaborated with senior developers in code reviews, learning industry best practices for writing maintainable, scalable, and secure enterprise-level Java applications.",
                "Participated in the complete software development lifecycle including requirements analysis, design documentation, development, testing, and deployment phases.",
                "Gained practical experience with version control systems (Git/SVN), issue tracking tools (JIRA), and agile development methodologies in a professional enterprise environment."
            ]
        }
    ];

    const toggleCard = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    const closeModal = () => {
        setActiveCard(null);
    };

    return (
        <section className={styles.experience}>
            <div className={styles.container}>
                <h2>Professional Experience</h2>
                <p className={styles.subtitle}>
                    A showcase of my professional journey, highlighting my contributions and achievements in various roles.
                </p>
                <div className={styles.grid}>
                    {experienceData.map((exp, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>{exp.title}</h3>
                                <span className={styles.projectType}>{exp.company}</span>
                            </div>
                            <div className={styles.cardFooter}>
                                <span
                                    className={styles.shortDescription}
                                    onClick={() => toggleCard(index)}
                                >
                                    {exp.shortDescription}
                                </span>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {activeCard !== null && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            ✕
                        </button>
                        <div className={styles.modalHeader}>
                            <h3>{experienceData[activeCard].title}</h3>
                            <span className={styles.modalCompany}>
                                {experienceData[activeCard].company}
                            </span>
                            <span className={styles.modalDuration}>
                                {experienceData[activeCard].duration}
                            </span>
                        </div>
                        <div className={styles.modalBody}>
                            <h4>Key Responsibilities & Achievements:</h4>
                            <ul className={styles.modalList}>
                                {experienceData[activeCard].description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;