import React from 'react';
import './CallToAction.css';

import { useConnectModal } from '../../../context/ConnectModalContext';
import { useShortcut } from '../../../context/ShortcutContext';

import MainButton from '../../common/button/main/MainButton';

const CallToAction = ({ titleBeforeBold, boldTitle, titleAfterBold, description }) => {
    const { openModal } = useConnectModal();
    const { shortcutToWork } = useShortcut();

  	return (
        <div className="section column alternate">
            <div className="cta-content">
                <div className="text-title">
                    {titleBeforeBold} <b>{boldTitle}</b> {titleAfterBold}
                </div>
                <div className={`text-description semibold`}>
                    {description}
                </div>
                <div className="cta-button-row">
                    <MainButton
                        variant="white"
                        text={"Connect with us"}
                        onClick={() => openModal("")}
                    />
                    <MainButton 
                        variant="black"
                        text={"Explore our work"}
                        onClick={shortcutToWork}
                    />
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
