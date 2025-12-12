import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content fade-in-up">
                    <div className="hero-greeting">
                        <span className="wave">👋</span> Hello, I'm
                    </div>
                    <h1 className="hero-title">Jayjeeth U</h1>
                    <p className="hero-subtitle">
                        Aspiring <span className="text-gradient">Software Engineer</span>
                    </p>
                    <p className="hero-description">
                        Passionate about software development, data structures, algorithms, and web technologies.
                        Building innovative solutions and learning to grow as a professional.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-value">CGPA 8.89</div>
                            <div className="stat-label">MCA Student</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">Full Stack</div>
                            <div className="stat-label">Development</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">Java & Web</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            <span>Get In Touch</span>
                            <span>→</span>
                        </a>
                        <a href="#projects" className="btn btn-outline">
                            <span>View Projects</span>
                        </a>
                    </div>

                    <div className="hero-social">
                        <a
                            href="mailto:jayjeeth.u06@gmail.com"
                            className="social-link"
                            aria-label="Email"
                        >
                            📧
                        </a>
                        <a
                            href="https://github.com/jayjeeth06"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="scroll-text">Scroll Down</div>
            </div>
        </section>
    );
};

export default Hero;
