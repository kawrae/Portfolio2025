import React from 'react';
import windowsIcon from '../../assets/icons/windows-icon.png';

import nbj1 from '../../assets/images/showcase/nbj1.png';
import nbj2 from '../../assets/images/showcase/nbj2.png';
import nbj3 from '../../assets/images/showcase/nbj3.png';
import nbj4 from '../../assets/images/showcase/nbj4.png';
import nbj5 from '../../assets/images/showcase/nbj5.png';


import game2 from '../../assets/images/showcase/game2.png';
import game3 from '../../assets/images/showcase/game2.png';

import useWaveAnimation from '../../hooks/useWaveAnimation.js';
import gamepadIcon from '../../assets/images/other/gamepad.png';
import blogScreenshot from '../../assets/images/showcase/project-blog.png';
import portfolioScreenshot from '../../assets/images/showcase/portfolio2024.png';
import currentPortfolioScreenshot from '../../assets/images/showcase/portfolio2025.png';
import cartScreenshot from '../../assets/images/showcase/wst-project.png';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import './Portfolio.css';

const builds = [
	{
		title: 'NBJ Horror Story',
		releaseDate: '10-02-2024',
		version: '1.0.0',
		size: '1023.3 MB',
		description:
			'Horror Game Alpha V1.0 is an immersive first-person horror experience built in Unity and C#. Explore eerie environments, encounter jumpscares, and navigate through dark, atmospheric levels in this alpha release.',
		images: [nbj1, nbj2, nbj3, nbj4, nbj5],
		link: '#',
	},
	{
		title: 'NBJ Free Roam',
		releaseDate: '15-12-2023',
		version: '0.1.0',
		size: '519.7 MB',
		description:
			'Free Roam Game Project is an open-world prototype focused on car physics, player movement, and exploration. Inspired by the Grand Theft Auto series, it offers a realistic sandbox for driving and interaction.',
		images: [game2, game3],
		link: '#',
	},
];

const Portfolio = () => {
	useWaveAnimation();

	return (
		<>
			<div id="waves-container2">
				<div className="heading-container">
					<h1 className="heading-text pt-5" id="main-text">Portfolio</h1>
					<div className="heading-underline" id="sub-text"></div>
				</div>
				<canvas id="waveCanvas1"></canvas>
				<canvas id="waveCanvas2"></canvas>
			</div>

			<div className="portfolio-download-section">
				<div className="portfolio-content-container">

					{/* Game Builds */}
					<section className="latest-builds">
						<div className="content-heading">
							<span className="colored-bar"></span>
							<h2 style={{ marginBottom: '0px' }}>Game Development Projects</h2>
						</div>

						<div className="nbj-dev-card">
							<img src={gamepadIcon} alt="Gamepad Icon" className="nbj-dev-icon" />
							<div className="nbj-dev-content">
								<h3 className="nbj-dev-heading">
									<i className="fas fa-code"></i> Built with Unity & C#
								</h3>
								<p>
									These projects explore immersive gameplay mechanics, environments, and animation systems.
									They represent my technical and creative skills in game development using Unity.
								</p>
							</div>
							{/* <a
                href="https://github.com/kawrae/"
                target="_blank"
                rel="noopener noreferrer"
                className="nbj-dev-btn"
              >
                <i className="fab fa-github"></i> View on GitHub
              </a> */}
						</div>

						<div className="builds-grid">
							{builds.map((build, index) => (
								<div className="build-card-style" key={index}>
									<h3>{build.title}</h3>
									<p className="release-date">
										Released on <span className="release-date-highlight">{build.releaseDate}</span>
									</p>
									<p>{build.description}</p>
									<div className="meta">
										<span className="meta-tag"><strong>VER:</strong> {build.version}</span>
										<span className="meta-tag"><strong>Size:</strong> {build.size}</span>
									</div>

									<Swiper
										modules={[Navigation]}
										navigation
										spaceBetween={10}
										slidesPerView={1}
										className="build-carousel"
									>
										{build.images.map((img, idx) => (
											<SwiperSlide key={idx}>
												<img src={img} alt={`${build.title} Screenshot ${idx + 1}`} className="build-image" />
											</SwiperSlide>
										))}
									</Swiper>

									<button className="btn-download">
										<img src={windowsIcon} alt="Windows Icon" className="windows-icon" />
										Download for Windows
									</button>
								</div>
							))}
						</div>
					</section>
				</div>

				{/* Full-Width Web Dev Section */}
				<section className="project-gallery full-width-web">
					<div className="project-gallery-inner">
						<div className="content-heading">
							<span style={{ marginBottom: '20px' }} className="colored-bar"></span>
							<h2 style={{ marginBottom: '20px' }}>Explore My Web Projects</h2>
						</div>

						<div className="gallery-grid">
							{[1, 2, 3, 4].map((i) => {
								const isFirst = i === 1;
								const isSecond = i === 2;
								const isThird = i === 3;
								const isFourth = i === 4;

								return (
									<div className="project-tile" key={i}>
										<img
											src={
												isFirst
													? blogScreenshot
													: isSecond
														? cartScreenshot
														: isThird
															? portfolioScreenshot
															: currentPortfolioScreenshot
											}
											alt={
												isFirst
													? 'CRT Console Screenshot'
													: isSecond
														? 'E-Commerce Screenshot'
														: isThird
															? 'JS Portfolio Screenshot'
															: 'React Portfolio Screenshot'
											}
											className="tile-image"
										/>
										<div className="tile-content">
											<h4 className="tile-subtitle">
												{isFourth
													? 'Ongoing Personal Project'
													: isThird
														? 'Personal Project'
														: isSecond
															? 'University Coursework'
															: 'Personal Project'}
											</h4>
											<h3 className="tile-title">
												{isFourth
													? 'React Developer Portfolio'
													: isThird
														? 'Dynamic Portfolio Website'
														: isSecond
															? 'PHP E-Commerce Platform'
															: 'CRT Command Terminal'}
											</h3>
											<p>
												{isFourth
													? 'A modern, component-based portfolio built in React. Features dynamic routing, custom hooks, canvas effects, and a modular layout system styled with pure CSS.'
													: isThird
														? 'A responsive portfolio site built with custom JavaScript. Features dynamic wave and particle effects, dark mode, and a Bootstrap-based layout tailored for web showcase.'
														: isSecond
															? 'A full-stack PHP project featuring user authentication, dynamic product listings, and a shopping cart system. Includes admin and owner roles with add/edit product controls using a MySQL database.'
															: 'A CRT-inspired command console using PHP and MySQL. Allows admins to manage users, add/edit products, and execute role-based commands through a simulated terminal interface.'}
											</p>
											<div className="tile-tags">
												{isFourth ? (
													<>
														<span className="badge">React</span>
														<span className="badge">JavaScript</span>
														<span className="badge">CSS</span>
													</>
												) : isThird ? (
													<>
														<span className="badge">HTML</span>
														<span className="badge">CSS</span>
														<span className="badge">JavaScript</span>
														<span className="badge">Bootstrap</span>
													</>
												) : (
													<>
														<span className="badge">PHP</span>
														<span className="badge">MySQL</span>
														<span className="badge">JavaScript</span>
														{isSecond && <span className="badge">jQuery</span>}
													</>
												)}
											</div>
											<div className="tile-actions">
												<a
													href={
														isFourth
															? 'https://github.com/kawrae/Portfolio2025'
															: isThird
																? 'https://github.com/kawrae/Portfolio2024'
																: isSecond
																	? 'https://github.com/kawrae/wst-project'
																	: 'https://github.com/kawrae/wst-project/blob/main/scripts/terminal.js'
													}
													target="_blank"
													rel="noreferrer"
													className="btn-demo"
												>
													View Source
												</a>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>

			<CallToAction
				titleBeforeBold="Explore more on"
				boldTitle="GitHub"
				description="Browse the full source code for these projects and many more directly from my repositories."
				buttonText="Visit GitHub"
				buttonLink="https://github.com/kawrae"
			/>
		</>
	);
};

export default Portfolio;
