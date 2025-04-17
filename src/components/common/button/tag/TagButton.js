import React from 'react';
import './TagButton.css';

import closeIcon from '../../../../assets/icons/close.svg';

const TagButton = ({ text, onClick }) => {
    return (
        <div className="tag-button" onClick={onClick}   >
            <span>{text}</span>
            <img alt="x" src={closeIcon}/>
        </div>
    )
};

export default TagButton;