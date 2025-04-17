import React from 'react';
import nbj1 from '../../assets/images/showcase/nbj1.png';
import game2 from '../../assets/images/showcase/game2.png';
import useWaveAnimation from '../../hooks/useWaveAnimation.js';
import gamepadIcon from '../../assets/images/other/gamepad.png';
import './Portfolio.css';

const builds = [
	{
		title: 'NBJ Horror Story',
		releaseDate: '10-02-2024',
		version: '1.0.0',
		size: '1023.3 MB',
		description:
			'Horror Game Alpha V1.0 is an immersive first-person horror experience built in Unity and C#. Explore eerie environments, encounter jumpscares, and navigate through dark, atmospheric levels in this alpha release.',
		image: nbj1,
		link: '#'
	},
	{
		title: 'NBJ Free Roam',
		releaseDate: '15-12-2023',
		version: '0.1.0',
		size: '519.7 MB',
		description:
			'Free Roam Game Project is an open-world prototype focused on car physics, player movement, and exploration. Inspired by the Grand Theft Auto series, it offers a realistic sandbox for driving and interaction.',
		image: game2,
		link: '#'
	}
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
					<section className="latest-builds">
						<div className="content-heading">
							<span className="colored-bar"></span>
							<h2 style={{ marginBottom: '0px' }}>Latest Builds</h2>
						</div>

						{/* Game Development Projects Card*/}
						<div className="nbj-dev-card">
							<img
								src={gamepadIcon}
								alt="Gamepad Icon"
								className="nbj-dev-icon"
							/>
							<div className="nbj-dev-content">
								<h3 className="nbj-dev-heading">
									<i className="fas fa-code"></i> Game Development Projects
								</h3>
								<p>
									These game development projects showcase my experience in creating
									interactive and engaging games using Unity and C#. From gameplay mechanics
									to advanced animation, these projects demonstrate my skills in
									programming and design.
								</p>
							</div>
							<a
								href="https://github.com/kawrae/"
								target="_blank"
								rel="noopener noreferrer"
								className="nbj-dev-btn"
							>
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>


						<div className="builds-container">
							<div className="builds-grid">
								{/* 🔁 Builds */}
								{builds.map((build, index) => (
									<div className="build-card-style" key={index}>
										<h3>{build.title}</h3>
										<p className="release-date">
											This build was released on{' '}
											<span className="release-date-highlight">{build.releaseDate}</span>
										</p>
										<p>{build.description}</p>
										<div className="meta">
											<span><strong>VER:</strong> {build.version}</span>
											<span><strong>Size:</strong> {build.size}</span>
										</div>
										<img
											src={build.image}
											alt={`${build.title} Screenshot`}
											className="build-image"
										/>
										<button className="btn-download">
											<i className="fas fa-download"></i> Download for Windows
										</button>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
