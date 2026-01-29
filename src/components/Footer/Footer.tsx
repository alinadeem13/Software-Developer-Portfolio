import { FiMail } from "react-icons/fi";
import styles from "./style.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Main footer content - 3 columns */}
            <div className={styles.footerMain}>

                {/* Left section - Contact Info */}
                <div className={styles.footerLeft}>
                    <p>
                        📧 <a href="mailto:ali13nadeem@gmail.com">ali13nadeem@gmail.com</a>
                    </p>
                    <p>
                        📱 <a href="tel:+923324414997">+44 7345 531519</a>
                    </p>
                    <p>📍 London, United Kingdom</p>
                </div>

                {/* Center section - Main Navigation */}
                <div className={styles.footerCenter}>
                    <div className={styles.footerLinks}>
                        <HashLink smooth to="/home#hero">Home</HashLink>
                        <HashLink smooth to="/home#about">About</HashLink>
                        <HashLink smooth to="/home#projects">Projects</HashLink>
                        <HashLink smooth to="/home#education">Education</HashLink>
                        <HashLink smooth to="/home#experience">Experience</HashLink>
                        <HashLink smooth to="/home#contact">Contact</HashLink>
                    </div>
                </div>

                {/* Right section - Social & Policies */}
                <div className={styles.footerRight}>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/alinadeem13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={27} />
                        </a>
                        <a href="https://www.linkedin.com/in/ali-nadeem-790a95214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
                        <HashLink smooth to="/home#privacy">Privacy Policy</HashLink>
                        <HashLink smooth to="/home#terms">Terms of Service</HashLink>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className={styles.footerBottom}>
                <p>&copy; 2025 Ali Nadeem. All rights reserved. Built with React & TypeScript.</p>
            </div>
        </footer>
    );
};
