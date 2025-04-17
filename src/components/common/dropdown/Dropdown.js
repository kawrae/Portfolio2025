import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

import arrow from '../../assets/icons/arrow.svg';

const Dropdown = ({ title, items }) => {
    return (
        <div className="dropdown">
            <div className="dropdown-title">
                {title}
                <img className="dropdown-icon" alt="" src={arrow} />
            </div>
            <div className="dropdown-content">
                {items.map((item, index) => (
                    <Link key={index} to={`/${item.slug}`} className="dropdown-item hover-effect">{item.label}</Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
