import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card fade-in-up">
                        <div className="project-info">
                            <h3>Student Management System</h3>
                            <p className="tech-stack">Java, Spring Boot, MySQL</p>
                            <ul>
                                <li>Developed a RESTful backend system to manage student records and academic data.</li>
                                <li>Implemented CRUD operations with input validation and global exception handling.</li>
                                <li>Designed normalized relational database schema using MySQL.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="project-card fade-in-up delay-100">
                        <div className="project-info">
                            <h3>Online Quiz Application</h3>
                            <p className="tech-stack">Java, Spring Boot, REST APIs</p>
                            <ul>
                                <li>Built a multi-user quiz platform supporting dynamic question management.</li>
                                <li>Implemented role-based access control for admin and user functionalities.</li>
                                <li>Designed REST APIs to enable seamless frontend-backend communication.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="project-card fade-in-up delay-200">
                        <div className="project-info">
                            <h3>Portfolio Website</h3>
                            <p className="tech-stack">HTML, CSS, JavaScript</p>
                            <ul>
                                <li>Designed and developed a responsive personal portfolio website.</li>
                                <li>Ensured cross-browser compatibility and optimized page load performance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
