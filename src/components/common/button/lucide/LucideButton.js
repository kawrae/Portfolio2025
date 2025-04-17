import React from 'react';
import './LucideButton.css';

const LucideButton = ({ icon: Icon, onClick, variant = 'primary', buttonSize = null, iconSize = 24 }) => {
    return (
        <button className={`lucide-button ${variant}`} onClick={onClick} style={{ width: buttonSize, height: buttonSize }}>
            <Icon size={iconSize} className="lucide-button-icon" />
        </button>
    )
};

export default LucideButton;