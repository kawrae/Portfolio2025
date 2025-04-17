import React from 'react';
import './FocusCard.css';

export const FocusCardSmall = ({ icon, title, description }) => (
    <div className="focus-card-small">
        <img className="card-icon" src={icon} alt={title} />
        <div className="card-text-container">
            <strong className="card-text-title">{title}</strong>
            <p className="card-text-description">{description}</p>
        </div>
    </div>
);

export const FocusCardLarge = ({ icon, title, description, image }) => (
    <div className="focus-card-large">
        <div className="focus-card-large-container">
            <img className="card-icon" src={icon} alt={title} />
            <div className="card-text-container">
                <strong className="card-text-title">{title}</strong>
                <p className="card-text-description">{description}</p>
            </div>
        </div>
        <img
            className="focus-card-large-image"
            src={image}
            alt={`${title} illustration`}
        />
    </div>
);
