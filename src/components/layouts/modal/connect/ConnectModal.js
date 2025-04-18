import React, { useState, useRef } from 'react';
import './ConnectModal.css';


import DesktopButton from '../../../common/button/main/MainButton';
import { IconButton } from '../../../common/button/circle/CircleButton';

import closeIcon from '../../../../assets/icons/close.svg';

const ConnectModal = ({ onClose, defaultMessage = '' }) => {
	const formRef = useRef();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: defaultMessage,
	});

	const [errors, setErrors] = useState({});
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);

	const validate = () => {
		const errs = {};
		if (typeof formData.name !== 'string' || !formData.name.trim()) errs.name = 'Name is required.';
		if (typeof formData.email !== 'string' || !formData.email.trim()) {
			errs.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errs.email = 'Invalid email.';
		}
		if (typeof formData.message !== 'string' || !formData.message.trim()) errs.message = 'Message is required.';
		return errs;
	};
	

	const sendEmail = (e) => {
		e.preventDefault();
		const errs = validate();
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;

		setSending(true);

		fetch('http://localhost:5000/api/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setSuccess(true);
					setSending(false);
					setFormData({ name: '', email: '', message: '' });
					setTimeout(() => {
						setSuccess(false);
						onClose();
					}, 2000);
				} else {
					throw new Error('Email send failed');
				}
			})
			.catch((err) => {
				console.error(err);
				setSending(false);
				alert('Failed to send message. Please try again.');
			});
	};

	const handleChange = (e) => {
		const updated = {
			...formData,
			[e.target.name]: e.target.value,
		};
		console.log('formData update:', updated);
		setFormData(updated);
	};

	return (
		<div className="modal-overlay">
			<div className="connect-form">
				<div className="close-button">
					<IconButton onClick={onClose} image={closeIcon} imageAlt={"Close"} buttonSize={40} iconSize={10} />
				</div>
				<div className="form">
					<div className="intro">
						<h3 style={{ color: '#7c72ea' }}>
							Are you ready for the next step?<br />
							<span className="highlight">Your journey starts here</span>
						</h3>
					</div>
					<form ref={formRef} onSubmit={sendEmail} className="form-fields">
						<input
							type="text"
							name="name"
							placeholder="My name is"
							value={formData.name}
							onChange={handleChange}
						/>
						{errors.name && <div className="form-error">{errors.name}</div>}

						<input
							type="email"
							name="email"
							placeholder="My email is"
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && <div className="form-error">{errors.email}</div>}

						<textarea
							name="message"
							placeholder="My message is"
							rows="5"
							value={formData.message}
							onChange={handleChange}
						/>
						{errors.message && <div className="form-error">{errors.message}</div>}

						<div className="button-wrapper">
							<DesktopButton text={sending ? 'Sending...' : 'Send message'} type="submit" />
						</div>
						{success && <p className="form-success">Message sent successfully!</p>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default ConnectModal;
