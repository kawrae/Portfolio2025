import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
	const location = useLocation();
	const { pathname, hash } = location;

	useEffect(() => {
		// If there's a hash, try to scroll to the element
		if (hash) {
			// Allow the DOM to paint first
			requestAnimationFrame(() => {
				const el = document.querySelector(hash);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
				} else {
					// Retry once after short delay in case it's rendered late
					setTimeout(() => {
						const retryEl = document.querySelector(hash);
						if (retryEl) retryEl.scrollIntoView({ behavior: 'smooth' });
					}, 100);
				}
			});
		} else {
			// No hash – just scroll to top
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [pathname, hash]);

	return null;
};

export default Scroll;
