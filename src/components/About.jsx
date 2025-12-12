import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>

                <div className="about-content">
                    <div className="about-text slide-in-left">
                        <h3>Career Objective</h3>
                        <p>
                            Aspires to be a software engineer with experience in software development,
                            data structures, algorithms and web technologies, where I can work on my
                            technical skills and problem solving skills for learning and grow as a professional.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎓</div>
                                <div className="highlight-content">
                                    <h4>Education</h4>
                                    <p>MCA from Nitte Meenakshi Institute of Technology</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">💻</div>
                                <div className="highlight-content">
                                    <h4>Expertise</h4>
                                    <p>Full Stack Development with Java & Modern Web Technologies</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">🚀</div>
                                <div className="highlight-content">
                                    <h4>Focus</h4>
                                    <p>Building scalable applications with clean architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-info slide-in-right">
                        <div className="info-card">
                            <h4>Contact Information</h4>
                            <div className="info-list">
                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div>
                                        <div className="info-label">Email</div>
                                        <a href="mailto:jayjeeth.u06@gmail.com">jayjeeth.u06@gmail.com</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📱</span>
                                    <div>
                                        <div className="info-label">Phone</div>
                                        <a href="tel:8310596262">8310596262</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">💼</span>
                                    <div>
                                        <div className="info-label">GitHub</div>
                                        <a href="https://github.com/jayjeeth06" target="_blank" rel="noopener noreferrer">
                                            github.com/jayjeeth06
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
