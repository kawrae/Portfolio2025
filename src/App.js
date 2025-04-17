import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ConnectModalProvider } from './context/ConnectModalContext';
import { ShortcutProvider } from './context/ShortcutContext';
import { GatewayProvider } from './context/GatewayContext';
import { MobileProvider } from './context/MobileContext';

import '@fortawesome/fontawesome-free/css/all.min.css';


import Scroll from './components/helpers/Scroll';

import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer';

import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Company from './pages/company/Company';

function Content() {
	return (
		<>
			<Navbar />
			<main>
				<Scroll />
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/company" element={<Company />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

function App() {
	return (
		<Router>
			<ConnectModalProvider>
				<ShortcutProvider>
					<GatewayProvider>
						<MobileProvider>
							<Content />
						</MobileProvider>
					</GatewayProvider>
				</ShortcutProvider>
			</ConnectModalProvider>
		</Router>
	)
}

export default App;
