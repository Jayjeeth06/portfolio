import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        const mailtoLink = `mailto:jayjeeth.u06@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        window.location.href = mailtoLink;

        setStatus('Opening your email client...');
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setStatus('');
        }, 3000);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title fade-in">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info slide-in-left">
                        <h3>Let's Connect!</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:jayjeeth.u06@gmail.com" className="contact-method">
                                <div className="method-icon">📧</div>
                                <div className="method-content">
                                    <h4>Email</h4>
                                    <p>jayjeeth.u06@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:8310596262" className="contact-method">
                                <div className="method-icon">📱</div>
                                <div className="method-content">
                                    <h4>Phone</h4>
                                    <p>8310596262</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/jayjeeth06"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-method"
                            >
                                <div className="method-icon">💼</div>
                                <div className="method-content">
                                    <h4>GitHub</h4>
                                    <p>github.com/jayjeeth06</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            <span>Send Message</span>
                            <span>→</span>
                        </button>

                        {status && <p className="form-status">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
