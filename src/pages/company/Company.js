import React from 'react';
import './Company.css';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';
import { useConnectModal } from '../../context/ConnectModalContext';
import { useShortcut } from '../../context/ShortcutContext';
import useWaveAnimation from '../../hooks/useWaveAnimation.js';

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

                        {/* <div className="about-highlight-card">
                            <p>
                                I’m a passionate Full Stack Developer currently completing my BSc (Hons) in Web & Mobile Development. As a proud contributor to Infinitus Interactive — my brother's innovative tech company — I specialize in building immersive, functional, and visually engaging digital experiences across web, mobile, and AR platforms.
                            </p>
                        </div> */}

                        <div className="about-cards-grid">
                            <div className="about-card">
                                <h3>💻 Front-End Expertise</h3>
                                <p>I specialize in developing responsive, intuitive user interfaces using:</p>
                                <ul>
                                    <li><span className="emoji">💡</span> <strong>React, JavaScript</strong> – Building dynamic and accessible web pages.</li>
                                    <li><span className="emoji">🎨</span> <strong>UI/UX Design</strong> – Crafting visually engaging user experiences.</li>
                                </ul>
                            </div>

                            <div className="about-card">
                                <h3>🎮 Game Development</h3>
                                <p>My background in <strong>C#</strong> and <strong>Unity</strong> allows me to creatively approach challenges:</p>
                                <ul>
                                    <li><span className="emoji">💡</span> <strong>Creative Problem Solving</strong> – Applying game design principles to coding problems.</li>
                                    <li><span className="emoji">🧠</span> <strong>Efficient Code Optimization</strong> – Writing performant, responsive systems.</li>
                                </ul>
                            </div>

                            <div className="about-card">
                                <h3>📱 Mobile Development</h3>
                                <p>I have hands-on experience developing mobile apps using:</p>
                                <ul>
                                    <li><span className="emoji">📱</span> <strong>Java & Kotlin</strong> – Building high-performance native apps using Android Studio.</li>
                                    <li><span className="emoji">🔁</span> <strong>Responsive UI/UX Design</strong> – Seamless experiences across all screen sizes.</li>
                                </ul>
                            </div>

                            <div className="about-card">
                                <h3>🗄️ Back-End Expertise</h3>
                                <p>I am proficient in database management and secure back-end development:</p>
                                <ul>
                                    <li><span className="emoji">🗃️</span> <strong>SQL & PHP</strong> – Managing robust databases and handling APIs requests.</li>
                                    <li><span className="emoji">🔐</span> <strong>Security</strong> – Developing secure applications with built-in admin panels, and protected routes for managing data.</li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section className="company-hero">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                From <span>student</span> to <span>industry innovator</span>
                            </h1>
                            <p className="hero-subtitle">
                                Currently completing my BSc (Hons) Web & Mobile Development at university, I'm proud to join the talented team at <strong>Infinitus Interactive</strong> — a cutting-edge digital solutions studio founded by Dylan Black. We create immersive environments, AR tools, and next-gen developer experiences.
                            </p>
                            <div className="cta-buttons">
                                <button onClick={openModal} className="primary-btn">Let’s Talk</button>
                                <button onClick={shortcutToWork} className="secondary-btn">View My Work</button>
                            </div>
                        </div>
                    </section>

                    <section className="company-values">
                        <h2>Our Mission & Vision</h2>
                        <div className="values-grid">
                            <div className="value-box">
                                <h3>Empowering Developers</h3>
                                <p>We build tools that help developers thrive in the digital age — whether they're indie coders or enterprise teams.</p>
                            </div>
                            <div className="value-box">
                                <h3>Immersive Technology</h3>
                                <p>From AR to real-time 3D environments, we create experiences that feel alive, connected, and forward-thinking.</p>
                            </div>
                            <div className="value-box">
                                <h3>Rooted in Collaboration</h3>
                                <p>As brothers building together, we believe in long-term, meaningful partnerships that grow with every project.</p>
                            </div>
                        </div>
                    </section>

                    <CallToAction
                        titleBeforeBold="Ready to build with"
                        boldTitle="Infinitus?"
                        description="We’re always exploring new possibilities — from collaborations to full-stack digital solutions. Let’s build something meaningful together."
                    />
                </div>
            </div>
        </>
    );
};

export default Company;
