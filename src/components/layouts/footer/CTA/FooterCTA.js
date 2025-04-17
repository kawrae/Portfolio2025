import React from 'react';
import './FooterCTA.css';

import { useGateway } from '../../../../context/GatewayContext';
import { SocialButton } from '../../../common/button/circle/CircleButton';

import community_illustration from '../../../../assets/images/community_illustration.svg';

const FooterCTA = () => {
    const { socialItems } = useGateway();

    return (
        <div className="footer-cta-section">
            <div className="footer-cta-section-card">
                <div className="footer-cta-section-card-content">
                    <div className="footer-cta-section-card-content-title">
                        <span>{`Join our `}</span>
                        <b>community</b>
                    </div>
                    <div className="social-container">
                        {socialItems.map((item, index) => (
                            <SocialButton 
                                key={index}
                                target={item.target_url}
                                image={item.media_url}
                                imageAlt={item.name}
                            />
                        ))}
                    </div>
                </div>
                <img 
                    src={community_illustration} 
                    alt="Community Illustration" 
                    className="community-illustration" 
                />
            </div>
        </div>
    )
};

export default FooterCTA;