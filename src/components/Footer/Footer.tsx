import { FiMail } from "react-icons/fi";
import styles from "./style.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Main footer content - 3 columns */}
            <div className={styles.footerMain}>

                {/* Left section - Contact Info */}
                <div className={styles.footerLeft}>
                    <p>
                        📧 <a href="mailto:your.email@example.com">ali13@gmail.com</a>
                    </p>
                    <p>
                        📱 <a href="tel:+92 (332) 4414997">+92 (332) 4414997</a>
                    </p>
                    <p>📍 Pakistan, Lahore</p>
                </div>

                {/* Center section - Main Navigation */}
                <div className={styles.footerCenter}>
                    <div className={styles.footerLinks}>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                {/* Right section - Social & Policies */}
                <div className={styles.footerRight}>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={27} />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={27} />
                        </a>
                        <a href="https://x.com/alinadeem13_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter size={27} />
                        </a>
                        <a
                            href="mailto:alinadeem13@gmail.com?subject=Hello Ali&body=I wanted to reach out to you..."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiMail size={27} />
                        </a>
                    </div>

                    <div className={styles.policyLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className={styles.footerBottom}>
                {/* <span className={styles.footerLogo}>Ali Nadeem</span> */}
                <p>&copy; 2025 Ali Nadeem. All rights reserved. Built with React & TypeScript.</p>
            </div>
        </footer>
    );
};