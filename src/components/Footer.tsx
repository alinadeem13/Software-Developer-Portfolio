import styles from "./style.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 My Website. All rights reserved.</p>

      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/ali-nadeem-790a95214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={27} />
        </a>
        <a
          href="https://github.com/alinadeem13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={27} />
        </a>
        <a
          href="https://instagram.com/alinadeem13_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={27} />
        </a>
        <a
          href="mailto:alinadeem13@gmail.com?subject=Hello Ali&body=I wanted to reach out to you..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail size={27} />
        </a>
      </div>

      <div className={styles.footerLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};
