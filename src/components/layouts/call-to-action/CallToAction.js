import React from 'react';
import './CallToAction.css';

import { useConnectModal } from '../../../context/ConnectModalContext';
import { useShortcut } from '../../../context/ShortcutContext';

import MainButton from '../../common/button/main/MainButton';

const CallToAction = ({
    titleBeforeBold,
    boldTitle,
    titleAfterBold,
    description,
    buttonText = "Explore work",
    buttonLink
}) => {
    const { openModal } = useConnectModal();
    const { shortcutToWork } = useShortcut();

    const handleClick = () => {
        if (buttonLink) {
            window.open(buttonLink, '_blank');
        } else if (shortcutToWork) {
            shortcutToWork();
        }
    };

    return (
        <div className="section column alternate">
            <div className="cta-content">
                <div className="text-title">
                    {titleBeforeBold} <b>{boldTitle}</b> {titleAfterBold}
                </div>
                <div className="text-description semibold">
                    {description}
                </div>
                <div className="cta-button-row">
                    <MainButton
                        variant="black"
                        text={buttonText}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};


export default CallToAction;
