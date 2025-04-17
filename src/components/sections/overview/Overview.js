import React from 'react';
import './Overview.css';

import MainButton from '../../common/button/main/MainButton';
 
const Overview = ({ titleBeforeBold, boldTitle, titleAfterBold, description, actionButton, rowOne, rowTwo, rowThree }) => {
    return (
        <div className="overview">
            <div className="overview-left">
                <div className="overview-title">{titleBeforeBold} <b>{boldTitle}</b> {titleAfterBold}</div>
                <div className="overview-description">{description}</div>
                {actionButton && (
                    <div className="cta-button-container">
                        <MainButton text={actionButton.text} onClick={actionButton.onClick} />
                    </div>
                )}
            </div>
            <div className="overview-right">
                {rowOne && (
                    <div className="overview-row">
                        {rowOne.map((item, index) => (
                            <div className="overview-card" key={index}>
                                <img className="overview-card-icon" alt="" src={item.icon} />
                                <div className="overview-card-text-container">
                                    <div className="overview-card-title">{item.title}</div>
                                    <div className="overview-card-description">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {rowTwo && (
                    <div className="overview-row">
                        {rowTwo.map((item, index) => (
                            <div className="overview-card" key={index}>
                                <img className="overview-card-icon" alt="" src={item.icon} />
                                <div className="overview-card-text-container">
                                    <div className="overview-card-title">{item.title}</div>
                                    <div className="overview-card-description">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {rowThree && (
                    <div className="overview-row">
                        {rowThree.map((item, index) => (
                            <div className="overview-card" key={index}>
                                <img className="overview-card-icon" alt="" src={item.icon} />
                                <div className="overview-card-text-container">
                                    <div className="overview-card-title">{item.title}</div>
                                    <div className="overview-card-description">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Overview;