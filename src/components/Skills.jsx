import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: ['Java', 'Python', 'C']
        },
        {
            title: 'Developer Tools',
            icon: '🛠️',
            skills: ['VS Code', 'NetBeans']
        },
        {
            title: 'Web Technologies',
            icon: '🌐',
            skills: ['HTML', 'CSS']
        },
        {
            title: 'Database',
            icon: '🗄️',
            skills: ['MongoDB', 'MySQL']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title fade-in">Technical Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="category-header">
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <span className="skill-name">{skill}</span>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: '85%',
                                                    animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
