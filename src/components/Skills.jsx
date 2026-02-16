import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {/* Languages */}
                    <div className="skill-category fade-in-up">
                        <h3><i className="fas fa-code"></i> Languages</h3>
                        <div className="tags">
                            <span>Java</span>
                            <span>JavaScript</span>
                            <span>Python</span>
                        </div>
                    </div>
                    {/* Frameworks */}
                    <div className="skill-category fade-in-up delay-100">
                        <h3><i className="fas fa-layer-group"></i> Frameworks</h3>
                        <div className="tags">
                            <span>Spring Boot</span>
                            <span>Spring MVC</span>
                            <span>Hibernate</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                        </div>
                    </div>
                    {/* Web Tech */}
                    <div className="skill-category fade-in-up delay-200">
                        <h3><i className="fas fa-globe"></i> Web Technologies</h3>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>RESTful APIs</span>
                        </div>
                    </div>
                    {/* Databases */}
                    <div className="skill-category fade-in-up delay-300">
                        <h3><i className="fas fa-database"></i> Databases</h3>
                        <div className="tags">
                            <span>MySQL</span>
                            <span>MongoDB</span>
                        </div>
                    </div>
                    {/* Core & Tools */}
                    <div className="skill-category fade-in-up delay-400">
                        <h3><i className="fas fa-tools"></i> Tools & Concepts</h3>
                        <div className="tags">
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>VS Code</span>
                            <span>DSA</span>
                            <span>OOP</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
