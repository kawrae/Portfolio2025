import React, { createContext, useState, useContext } from 'react';
import ConnectModal from '../components/layouts/modal/connect/ConnectModal';

const ConnectModalContext = createContext();

export const useConnectModal = () => useContext(ConnectModalContext);

export const ConnectModalProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [defaultMessage, setDefaultMessage] = useState('');

	const openModal = (message = '') => {
		setDefaultMessage(message);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		setDefaultMessage('');
	};

	return (
		<ConnectModalContext.Provider value={{ openModal }}>
			{children}
			{showModal && (
				<ConnectModal onClose={closeModal} defaultMessage={defaultMessage} />
			)}
		</ConnectModalContext.Provider>
	);
};