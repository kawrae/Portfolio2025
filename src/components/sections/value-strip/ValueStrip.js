import React, { useRef, useEffect, useState } from 'react';
import './ValueStrip.css';

const ValueStrip = ({ values }) => {
	const stripRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();

		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	useEffect(() => {
		if (!isMobile) return;

		const strip = stripRef.current;
		if (!strip) return;

		const scrollStep = 1;
		const intervalTime = 20;

		const autoScroll = () => {
		if (strip.scrollLeft >= strip.scrollWidth / 2) {
			strip.scrollLeft = 0;
		} else {
			strip.scrollLeft += scrollStep;
		}
		};

		const interval = setInterval(autoScroll, intervalTime);
		return () => clearInterval(interval);
	}, [isMobile]);

	const displayValues = isMobile ? [...values, ...values] : values;

	return (
		<div className="value-strip" ref={stripRef}>
			{displayValues.map((value, index) => (
				<React.Fragment key={`${value}-${index}`}>
					<span className="value">{value}</span>
					{!isMobile && index < displayValues.length - 1 && (
						<span className="separator">•</span>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

export default ValueStrip;