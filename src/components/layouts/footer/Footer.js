import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { useGateway } from '../../../context/GatewayContext';
import { useShortcut } from '../../../context/ShortcutContext';

import FooterCTA from './CTA/FooterCTA';
import { SocialButton } from '../../common/button/circle/CircleButton';

import logo from '../../../assets/images/logo/logo.png';
import designrush from '../../../assets/images/other/designrush.png';

const Footer = () => {
	const { socialItems } = useGateway();
	const { shortcutToTestimonials } = useShortcut();

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();

		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<div className="footer">
			{!isMobile && <FooterCTA />}
			<div className="footer-primary-section">
				<div className="footer-primary-content">
					<div className="footer-primary-top">

						<div className="footer-primary-top-lower">
							<div className="column">
								<div className="column-title">Corey Black</div>
								<div className="footer-primary-row-list">
									<a href="https://pipelinesentry.com/" target="_blank" rel="noopener noreferrer" className="footer-primary-row-list-item hover-effect">
										Aspring Full Stack Developer
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-primary-bottom">
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
						<div className="footer-primary-bottom-copyright-container">
							<div className="footer-primary-bottom-text-1">© {new Date().getFullYear()} Corey Black. All Rights Reserved.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
