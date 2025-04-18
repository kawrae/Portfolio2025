import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import { Menu, X, Send } from 'lucide-react';

import MainButton from '../../common/button/main/MainButton';
import LucideButton from '../../common/button/lucide/LucideButton';
import ConnectModal from '../../layouts/modal/connect/ConnectModal';

import logo from '../../../assets/images/logo/logo.png';
import ii from '../../../assets/images/logo/ii.png';

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

				<div className="navbar-left">

				</div>

				{/* Nav Links */}
				<div className={`navbar-centre ${menuOpen ? 'active' : ''}`}>
					<Link to={`/`} className="navbar-logo-container">
						<img className="navbar-logo-icon" alt="Corey Black logo" src={logo} width={40} height={20} />
					</Link>
					<Link to={`/portfolio`} className={`navitem-text hover-effect ${location.pathname === '/portfolio' ? 'selected' : ''}`} onClick={handleNavClick}>Portfolio</Link>
					<Link to={`/company`} className={`navitem-text hover-effect ${location.pathname === '/company' ? 'selected' : ''}`} onClick={handleNavClick}>Company</Link>
					<a
						href="https://dev.infinitusinteractive.com/home"
						target="_blank"
						rel="noopener noreferrer"
						className="navbar-logo-container"
					>
						<img className="navbar-logo-icon-infinitus" alt="Infinitus Interactive logo" src={ii} width={40} height={20} />
					</a>

				</div>

				{/* CTA Button */}
				<div className="navbar-right">
				</div>

				{/* Mobile Menu Icon */}
				<div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</div>
			</div>
		</>
	);
};

export default Navbar;
