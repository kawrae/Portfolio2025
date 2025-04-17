import React from 'react';
import './ExternalButton.css';

const ExternalButton = ({ text, link, icon, variant = 'primary' }) => {
	return (
		<a
			className={`external-button ${variant}`}
			href={link}
			target={'_blank'}
			rel={'noopener noreferrer'}
		>
			{icon && <img src={icon} alt="" className="external-button-icon" />}
			<span className="button-text">{text}</span>
		</a>
	);
};

export default ExternalButton;