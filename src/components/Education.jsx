import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'MCA (Master of Computer Applications)',
            institution: 'Nitte Meenakshi Institute of Technology, Bengaluru, Karnataka',
            period: 'Aug 2024 - Current',
            grade: 'CGPA - 8.89',
            icon: '🎓'
        },
        {
            degree: 'BCA (Bachelor of Computer Applications)',
            institution: 'KLE S. Nijalingappa College, Bengaluru, Karnataka',
            period: 'Dec 2021 - May 2024',
            grade: 'CGPA - 9.38',
            icon: '📚'
        },
        {
            degree: 'PUC (Pre-University Course)',
            institution: 'Kiran PU college, Bengaluru, Karnataka',
            period: 'Jun 2019 - Jun 2021',
            grade: '85.16%',
            icon: '📖'
        },
        {
            degree: 'SSLC (Secondary School Leaving Certificate)',
            institution: 'Basaveshwara English High School, Bengaluru, Karnataka',
            period: 'Jun 2018 - Apr 2019',
            grade: '78.88%',
            icon: '🏫'
        }
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title fade-in">Education</h2>

                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="timeline-item fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-icon">{edu.icon}</div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{edu.degree}</h3>
                                    <span className="timeline-period">{edu.period}</span>
                                </div>
                                <p className="timeline-institution">{edu.institution}</p>
                                <div className="timeline-grade">
                                    <span className="grade-badge">{edu.grade}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
