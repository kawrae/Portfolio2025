import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import { Menu, X, Send } from 'lucide-react';

import MainButton from '../../common/button/main/MainButton';
import LucideButton from '../../common/button/lucide/LucideButton';
import ConnectModal from '../../layouts/modal/connect/ConnectModal';

import logo from '../../../assets/images/logo/logo.png';

const Navbar = () => {
	const location = useLocation();
	const [showConnect, setShowConnect] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setScrolled(window.scrollY > 10);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
				{/* Logo */}
				<div className="navbar-left">
					<Link to={`/`} className="navbar-logo-container">
						<img className="navbar-logo-icon" alt="Corey Black logo" src={logo} width={40} height={40} />
						<div className="navbar-logo-text">Corey Black</div>
					</Link>
				</div>

				{/* Nav Links */}
				<div className={`navbar-centre ${menuOpen ? 'active' : ''}`}>
					<Link to={`/services`} className={`navitem-text hover-effect ${location.pathname === '/blog' ? 'selected' : ''}`} onClick={handleNavClick}>Blog</Link>
					<Link to={`/services`} className={`navitem-text hover-effect ${location.pathname === '/services' ? 'selected' : ''}`} onClick={handleNavClick}>About</Link>
					<Link to={`/portfolio`} className={`navitem-text hover-effect ${location.pathname === '/portfolio' ? 'selected' : ''}`} onClick={handleNavClick}>Portfolio</Link>
					<Link to={`/company`} className={`navitem-text hover-effect ${location.pathname === '/company' ? 'selected' : ''}`} onClick={handleNavClick}>Company</Link>
				</div>

				{/* CTA Button */}
				<div className="navbar-right">
					<div className="navbar-cta-desktop">
						<MainButton
							text="Begin your journey"
							onClick={() => setShowConnect(true)}
							variant="primary"
						/>
					</div>
					<div className="navbar-cta-mobile">
						<LucideButton
							className="navbar-cta-mobile"
							icon={Send}
							buttonSize={35}
							onClick={() => setShowConnect(true)}
							variant="primary"
						/>
					</div>
				</div>

				{/* Mobile Menu Icon */}
				<div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</div>
			</div>
			{showConnect && <ConnectModal onClose={() => setShowConnect(false)} />}
		</>
	);
};

export default Navbar;
