import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvlvvrn";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
    const contactRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.2 }
        );

        if (contactRef.current) observer.observe(contactRef.current);
        return () => {
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);
        setSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok) {
                setStatus({ ok: true, msg: "Message sent successfully! I’ll get back to you within 1 business day." });
                form.reset();
            } else {
                const errMsg =
                    (data && (data.error || (data.errors && data.errors[0] && data.errors[0].message))) ||
                    "Failed to send message. Please try again.";
                setStatus({ ok: false, msg: errMsg });
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setStatus({ ok: false, msg: "Network error. Please check your connection and try again." });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            ref={contactRef}
            className={`contact-section fadeInUp ${isVisible ? "active" : ""}`}
        >
            <div className="contact-container">
                <h2 className="contact-title"> Get In Touch</h2>
                <p className="contact-subtitle">
                    Ready to collaborate on your next project? Let's build something amazing together.
                </p>

                <div className="contact-grid">
                    {/* Contact Form Card */}
                    <div className="contact-card form-card">
                        <div className="card-header">
                            <h3>Send Message</h3>
                            <span className="contact-type">Form</span>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Honeypot (spam protection) */}
                            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                            {/* Optional subject for easier inbox triage */}
                            <input type="hidden" name="_subject" value="New message from portfolio contact form" />

                            {/* (Optional) Page source */}
                            <input type="hidden" name="page" value={typeof window !== "undefined" ? window.location.href : "contact"} />

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder=" "
                                    name="name"
                                    required
                                />
                                <label className="form-label">Your Name</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder=" "
                                    name="email"
                                    required
                                />
                                <label className="form-label">Your Email</label>
                            </div>

                            <div className="form-group">
                                <textarea
                                    className="form-input textarea"
                                    placeholder=" "
                                    rows={4}
                                    name="message"
                                    required
                                ></textarea>
                                <label className="form-label">Your Message</label>
                            </div>

                            {/* Status message */}
                            {status && (
                                <div
                                    className="status"
                                    role="alert"
                                    aria-live="polite"
                                    style={{
                                        marginTop: 4,
                                        fontSize: "0.95rem",
                                        color: status.ok ? "#10b981" : "#f43f5e",
                                        fontWeight: 500,
                                    }}
                                >
                                    {status.msg}
                                </div>
                            )}

                            <div className="form-footer">
                                <button type="submit" className="submit-btn" disabled={submitting}>
                                    {submitting ? "Sending..." : "Send Message"}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Social Links Card */}
                    <div className="contact-card social-card">
                        <div className="card-header">
                            <h3>Connect With Me</h3>
                            <span className="contact-type">Social</span>
                        </div>

                        <p className="social-description">
                            Find me on these platforms for updates, collaborations, and tech discussions.
                        </p>

                        <div className="social-links-grid">
                            <a
                                href="https://www.linkedin.com/in/ali-nadeem-790a95214/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link-item"
                            >
                                <FaLinkedin className="social-icon" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/alinadeem13"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link-item"
                            >
                                <FaGithub className="social-icon" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://x.com/alinadeem13_"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link-item"
                            >
                                <FaTwitter className="social-icon" />
                                <span>Twitter</span>
                            </a>
                            <a
                                href="mailto:ali.nadeem@gmail.com"
                                className="social-link-item"
                            >
                                <FaEnvelope className="social-icon" />
                                <span>Email</span>
                            </a>
                        </div>

                        <div className="contact-footer">
                            <span className="response-time">
                                Usually responds within 24 hours
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-section {
          padding: 120px 2rem;
          background: linear-gradient(180deg,
              #0a0a0b 0%,
              #1a1a1d 100%);
          color: #f8fafc;
          position: relative;
          font-family: "Inter", system-ui, sans-serif;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .contact-title {
          text-align: center;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          margin-bottom: 20px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
          width: 100%;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
        }

        .contact-title::before {
          color: #6b7280;
          font-weight: 400;
          opacity: 0.6;
        }

        .contact-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 60px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.03));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }

        .contact-card:hover::before {
          opacity: 1;
        }

        .contact-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .contact-card:hover::after {
          transform: scaleX(1);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.2);
          box-shadow:
              0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 20px rgba(139, 92, 246, 0.1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .card-header h3 {
          font-size: 1.4rem;
          color: #f8fafc;
          margin: 0;
          font-weight: 600;
          line-height: 1.3;
          font-family: "Poppins", sans-serif;
        }

        .card-header h3::before {
          content: "// ";
          color: #6b7280;
          font-weight: 400;
          opacity: 0.6;
        }

        .contact-type {
          background: rgba(139, 92, 246, 0.1);
          color: #a78bfa;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(139, 92, 246, 0.2);
          white-space: nowrap;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-grow: 1;
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 15px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #f8fafc;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input.textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-input:focus {
          outline: none;
          border-color: #8b5cf6;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
        }

        .form-label {
          position: absolute;
          left: 20px;
          top: 15px;
          color: #94a3b8;
          transition: all 0.3s ease;
          pointer-events: none;
          background: #0a0a0b;
          padding: 0 8px;
          border-radius: 4px;
        }

        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label {
          top: -10px;
          left: 15px;
          font-size: 0.85rem;
          color: #8b5cf6;
        }

        .form-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px 24px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .submit-btn[disabled] {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
          background: linear-gradient(135deg, #7c3aed, #0891b2);
        }

        .submit-btn svg {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover svg {
          transform: translate(2px, -2px);
        }

        .social-description {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .social-links-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 25px;
        }

        .social-link-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          text-decoration: none;
          color: #cbd5e1;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .social-link-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #06b6d4;
          border-color: rgba(139, 92, 246, 0.2);
          transform: translateX(4px);
        }

        .social-icon {
          font-size: 1.2rem;
        }

        .contact-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .response-time {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .response-time svg {
          width: 16px;
          height: 16px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 1rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-card {
            padding: 25px 20px;
            min-height: 350px;
          }

          .card-header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          .contact-subtitle {
            font-size: 1rem;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .contact-card {
            padding: 20px 15px;
          }

          .form-input {
            padding: 12px 16px;
          }
        }

        /* Animation classes */
        .fadeInUp {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .fadeInUp.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </section>
    );
};

export default Contact;
