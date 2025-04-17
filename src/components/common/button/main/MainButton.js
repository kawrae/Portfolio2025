import React from 'react';
import './MainButton.css';

const MainButton = ({ text, onClick, variant = 'primary', icon }) => {
	return (
		<button className={`main-button ${variant}`} onClick={onClick}>
		<span className="button-text">{text}</span>
		{icon && <img src={icon} alt="" className="button-icon" />}
		</button>
	);
};

export default MainButton;