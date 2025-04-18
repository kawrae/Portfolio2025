import React from 'react';
import './Company.css';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';
import { useConnectModal } from '../../context/ConnectModalContext';
import { useShortcut } from '../../context/ShortcutContext';
import useWaveAnimation from '../../hooks/useWaveAnimation.js';
import meImage from '../../assets/images/other/me.png';

const Company = () => {
    const { openModal } = useConnectModal();
    const { shortcutToWork } = useShortcut();
    useWaveAnimation();

    return (
        <>
            <div id="waves-container2">
                <div className="heading-container">
                    <h1 className="heading-text pt-5" id="main-text">Company</h1>
                    <div className="heading-underline" id="sub-text"></div>
                </div>
                <canvas id="waveCanvas1"></canvas>
                <canvas id="waveCanvas2"></canvas>
            </div>

            <div className="company">
                <div className="company-content-container">
                    <section className="company-about">
                        <div className="content-heading">
                            <span className="colored-bar"></span>
                            <h2 style={{ marginBottom: '0px' }}>About Me & Infinitus Interactive</h2>
                        </div>

                        <div className="about-card with-avatar" id="aboutTop">
                            <img src={meImage} alt="Corey Black Avatar" className="avatar-img" />
                            <div className="text-content">
                                <h3><i className="fas fa-user"></i>Corey Black</h3>
                                <p>
                                    I am a passionate <strong>Full Stack Developer</strong> with a diverse skill set in front-end, back-end, and mobile technologies. My aim is to deliver high-quality digital solutions that merge both functionality and aesthetics.
                                </p>
                            </div>
                        </div>

                        <div className="about-cards-grid">
                            <div className="about-card">
                                <h3>💻 Front-End Expertise</h3>
                                <p>
                                    I specialize in developing responsive user interfaces using modern JavaScript libraries and design principles. My focus is on creating clean web pages that adapt across devices and screen sizes.
                                </p>
                                <ul>
                                    <li><span className="emoji">💡</span> <strong>React, JavaScript</strong> – Building dynamic and accessible web pages with reusable components.</li>
                                    <li><span className="emoji">🎨</span> <strong>UI/UX Design</strong> – Crafting visually engaging and user-friendly experiences, using Figma and accessibility-first design thinking.</li>
                                    <li><span className="emoji">🧪</span> <strong>Testing</strong> – Ensuring stable releases through unit testing (Jest) and responsive cross-browser testing.</li>
                                </ul>
                            </div>

                            <div className="about-card">
                                <h3>🎮 Game Development</h3>
                                <p>
                                    My background in game development allows me to engineer immersive, interactive experiences using Unity and C#. I specialize in physics-based mechanics, UI design, and level-building.
                                </p>
                                <ul>
                                    <li><span className="emoji">💡</span> <strong>Creative Problem Solving</strong> – Applying game logic and systemic design to code challenges.</li>
                                    <li><span className="emoji">🧠</span> <strong>Efficient Code Optimization</strong> – Writing scalable update loops and memory-conscious gameplay logic.</li>
                                    <li><span className="emoji">🎬</span> <strong>Animation & Interaction</strong> – Implementing timelines, player feedback systems, and interactive UI.</li>
                                </ul>
                            </div>

                            <div className="about-card">
                                <h3>📱 Mobile Development</h3>
                                <p>
                                    I build responsive and performant mobile applications using Android Studio with Java and Kotlin. My apps are designed to be smooth, accessible, and user-centric.
                                </p>
                                <ul>
                                    <li><span className="emoji">📱</span> <strong>Java & Kotlin</strong> – Developing high-performance native applications with Material Design UI.</li>
                                    <li><span className="emoji">🔁</span> <strong>Responsive UI/UX Design</strong> – Designing scalable layouts with XML and Jetpack Compose.</li>
                                    <li><span className="emoji">🧰</span> <strong>Firebase & APIs</strong> – Integrating real-time data sync, authentication, and cloud storage.</li>
                                </ul>
                            </div>

                            <div className="about-card">
                                <h3>🗄️ Back-End Expertise</h3>
                                <p>
                                    I design secure, scalable, and maintainable back-end solutions using modern PHP and SQL practices. From user auth to admin dashboards, I build efficient full-stack systems.
                                </p>
                                <ul>
                                    <li><span className="emoji">🗃️</span> <strong>SQL & PHP</strong> – Managing robust databases, crafting REST APIs, and optimizing query performance.</li>
                                    <li><span className="emoji">🔐</span> <strong>Security</strong> – Implementing session-based auth, data validation, and secure form handling.</li>
                                    <li><span className="emoji">🧩</span> <strong>Modular Code</strong> – Building reusable server components and integrating third-party services.</li>
                                </ul>
                            </div>
                        </div>

                    </section>


                    <section className="company-hero">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Developer at <span>Infinitus Interactive</span>
                            </h1>
                            <p className="hero-subtitle">
                                Currently completing my BSc (Hons) Web & Mobile Development at university, I'm proud to join the talented team at <strong>Infinitus Interactive</strong> — a cutting-edge digital solutions studio founded by Dylan Black. We create immersive environments, AR tools, and next-gen developer experiences.
                            </p>
                            <div className="cta-buttons">
                                <a
                                    href="https://infinitusinteractive.com/company"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="primary-btn"
                                >
                                    The Team
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/corey-black-92526532b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="secondary-btn"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="company-values">
                        <h2>Our Mission & Vision</h2>
                        <div className="values-grid">
                            <div className="value-box">
                                <h3>Empowering Developers</h3>
                                <p>We craft developer-first tools and frameworks that simplify workflows, support learning, and fuel creativity in tech communities.</p>
                            </div>
                            <div className="value-box">
                                <h3>Immersive Technology</h3>
                                <p>From AR overlays to 3D digital twins, we design experiences that push the boundaries of what's possible in real-time environments.</p>
                            </div>
                            <div className="value-box">
                                <h3>Rooted in Collaboration</h3>
                                <p>Built by brothers, powered by vision. Our approach is grounded in shared goals, transparency, and building long-term partnerships.</p>
                            </div>
                            <div className="value-box">
                                <h3>Creative Innovation</h3>
                                <p>We believe in creative experimentation — prototyping new concepts that blur the line between function and imagination.</p>
                            </div>
                            <div className="value-box">
                                <h3>Future-Ready Design</h3>
                                <p>Every project is engineered to scale with future trends in AI, XR, and the evolving digital landscape.</p>
                            </div>
                            <div className="value-box">
                                <h3>Human-Centered Outcomes</h3>
                                <p>At the heart of all we do is people — ensuring the tech we build is meaningful, inclusive, and intuitive for everyone.</p>
                            </div>
                        </div>
                    </section>

                    <CallToAction
                        titleBeforeBold="Ready to build with"
                        boldTitle="Infinitus?"
                        description="We’re always exploring new possibilities — from collaborations to full-stack digital solutions. Let’s build something meaningful together."
                        buttonLink="https://dev.infinitusinteractive.com/portfolio#work"
                    />

                </div>
            </div>
        </>
    );
};

export default Company;
