import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ShortcutContext = createContext();

export const useShortcut = () => useContext(ShortcutContext);

export const ShortcutProvider = ({ children }) => {
    const navigate = useNavigate();

    const shortcut = (target) => {
        navigate(target);
    };

    const shortcutToWork = () => {
        navigate('/portfolio#work');
    };

    const shortcutToTestimonials = () => {
        navigate('/home#testimonials');
    };

	return (
		<ShortcutContext.Provider value={{ shortcut, shortcutToWork, shortcutToTestimonials }}>
			{children}
		</ShortcutContext.Provider>
	);
};