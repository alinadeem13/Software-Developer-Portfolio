import styles from './style.module.css';
// import profilePic from "../assets/Upwork Photo.png";
import profilePic from '../../assets/Upwork Photo.png';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Profile Image */}
            <div className={styles.heroImage}>
                <img src={profilePic} alt="Ali Nadeem" className={styles.profilePic} />
            </div>

            {/* Hero Content */}
            <div className={styles.heroContent}>
                <h1>
                    Hi, I’m <span className={styles.highlight}>Ali Nadeem</span>
                </h1>
                <h2>MERN Stack - Full Stack Developer & AI Enthusiast </h2>
                <p>
                    I craft modern web applications with MERN Stack, Shopify, and WordPress.
                    With 2+ years of experience, I’ve delivered multiple projects worldwide.
                </p>

                <div className={styles.heroButtons}>
                    <a href="#projects" className={styles.primaryBtn}>View Projects</a>
                    <a href="#contact" className={styles.secondaryBtn}>Hire Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
