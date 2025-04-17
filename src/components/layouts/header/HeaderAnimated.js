import React, { useState, useEffect } from 'react';
import './Header.css';
import MovingComponent from 'react-moving-text';

const Header = () => {
    const list = [
        "Pioneers of AR",
        "Experts in digital twins",
        "Redefining the possible",
        "Changing the game",
    ];

    const [currentText, setCurrentText] = useState(list[0]);
    const [previousText, setPreviousText] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Set the previous text to the current one before changing it
            setPreviousText(currentText);

            // Update the index for the new current text
            setIndex((prevIndex) => (prevIndex + 1) % list.length);

            // After the animations, remove the previous text
            setTimeout(() => {
                setPreviousText(null);
            }, 1000); // Same as animation duration
        }, 4000); // Total time for display + animation

        return () => clearInterval(interval);
    }, [currentText]);

    useEffect(() => {
        setCurrentText(list[index]);
    }, [index, list]);

    return (
        <div className="header-content">
            <b className="text-glow-title">THE DEVELOPERS OF TOMORROW</b>
            <div className="text-title bold">
                <MovingComponent
                    key={currentText}
                    type="slideInFromTop"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none"
                >
                    <b>{currentText}</b>
                </MovingComponent>
            </div>
            <div className="text-description">
                At Infinitus Interactive, we create cutting-edge augmented reality experiences, digital twin solutions, and adaptive tools that transform industries and empower developers.
            </div>
            <div className="cta-button-row">
                <div className="cta-button-primary">Begin your journey</div>
                <div className="cta-button-secondary">Explore our work</div>
            </div>
        </div>
    );
};

export default Header;
