import React from 'react';
import './ProjectCard.css';

import MainButton from '../../button/main/MainButton';
import ExternalButton from '../../button/external/ExternalButton';

import { useConnectModal } from '../../../../context/ConnectModalContext';

import GitBookLightIcon from '../../../../assets/logos/gitbook_light.svg';
import PlaceholderImage from '../../../../assets/images/logo/infinitus_placeholder.png';

const ProjectCard = ({ project }) => {
	const { media_url, title, owner, description, gitbook_url } = project;
	const { openModal } = useConnectModal();

	// Determine if the media is a video by checking the file extension
	const isVideo = media_url && /\.(mp4|webm|ogg)$/i.test(media_url);
	const isYouTube = media_url && (media_url.includes('youtube.com') || media_url.includes('youtu.be'));

	const hasGitbook = !!gitbook_url;

	const getYouTubeEmbedUrl = (url) => {
		let videoId = '';
		const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
		if (match && match[1]) videoId = match[1];
		return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1`;
	};

	return (
		<div className="project-card">
			{!media_url ? (
				<img 
					className="project-media"
					src={PlaceholderImage}
					alt={title}
				/>
			) : isYouTube ? (
				<iframe
					className="project-media"
					src={getYouTubeEmbedUrl(media_url)}
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				></iframe>
			) : isVideo ? (
				<video
					className="project-media"
					src={media_url}
					controls
					loop
					muted
					playsInline
					preload="metadata"
				/>
			) : (
				<img 
					className="project-media"
					src={media_url}
					alt={title}
				/>
			)}
			<div className="project-content">
				<div className="project-owner">{owner}</div>
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{description}</p>
				<div className="project-footer">
					<div className={`project-buttons ${hasGitbook ? 'two-buttons' : 'one-button'}`}>
						{gitbook_url && (
							<ExternalButton 
								text="Discover" 
								icon={GitBookLightIcon} 
								link={gitbook_url} 
							/>
						)}
						<MainButton 
							text="Request a demo" 
							variant="secondary" 
							onClick={() => openModal(`I'd like to request a demo of ${title}.`)} 
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
