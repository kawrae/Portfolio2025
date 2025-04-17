import React from 'react';
import './Header.css';

import MainButton from '../../common/button/main/MainButton';

const Header = ({ titleBeforeBold, boldTitle, titleAfterBold, subtitle, description, semiBoldDescription, primaryAction, secondaryAction, alternateAction, secondaryAlternateAction }) => {
    return (
        <div className="header-content">
            {subtitle && <b className="text-glow-title">{subtitle}</b>}
            <div className="text-title">
                {titleBeforeBold} <b>{boldTitle}</b> {titleAfterBold}
            </div>
            <div className={`text-description ${semiBoldDescription ? 'semibold' : ''}`}>
                {description}
            </div>
            {(primaryAction || secondaryAction || alternateAction || secondaryAlternateAction) && 
                <div className="cta-button-row">
                    {primaryAction && <MainButton variant="primary" text={primaryAction.text} onClick={primaryAction.onClick} />}
                    {secondaryAction && <MainButton variant="secondary" text={secondaryAction.text} onClick={secondaryAction.onClick} />}
                    {alternateAction && <MainButton variant="white" text={alternateAction.text} onClick={alternateAction.onClick} />}
                    {secondaryAlternateAction && <MainButton variant="black" text={secondaryAlternateAction.text} onClick={secondaryAlternateAction.onClick} />}
                </div>
            }
        </div>
    )
};

export default Header;