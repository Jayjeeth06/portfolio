import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Blood Donation Web Application',
            tech: 'Java Full Stack',
            description: 'Developed a Java-based web application using full-stack technologies with JSP and MySQL. Designed user-friendly forms to capture donor details with server-side validation. Implemented backend functionality using Servlets for data processing and storage. Features organized storage, retrieval, and a responsive user experience.',
            tags: ['Java', 'JSP', 'MySQL', 'Servlets'],
            icon: '🩸'
        },
        {
            title: 'Library Management System',
            tech: 'Java Full Stack',
            description: 'Developed a Library Management System using Java Servlets, JSP, and MySQL, following MVC architecture. The system supports role-based access for Admin, Librarian, and Members with secure login and session management. Implemented book inventory management with CRUD operations, search/filter, and cover image upload, along with a borrowing system featuring due date tracking, fine calculation, and borrowing history.',
            tags: ['Java', 'Servlets', 'JSP', 'MySQL', 'MVC', 'CSS', 'Bootstrap'],
            icon: '📚'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title fade-in">Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-icon">{project.icon}</div>

                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-tech">{project.tech}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="badge">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
