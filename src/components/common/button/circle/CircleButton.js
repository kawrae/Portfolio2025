import React from 'react';
import './CircleButton.css';

export const IconButton = ({ image, imageAlt, onClick, buttonSize = null, iconSize = null }) => {
    return (
        <div className="circle-button hover-effect" onClick={onClick} style={{ width: buttonSize, height: buttonSize }}>
            <img alt={imageAlt} src={image} style={{ width: iconSize, height: iconSize }} />
        </div>
    )
};

export const SocialButton = ({ target, image, imageAlt }) => {
    return (
        <a href={target} target="_blank" rel="noopener noreferrer" className="circle-button hover-effect">
            <img alt={imageAlt} src={image} />
        </a>
    )
};