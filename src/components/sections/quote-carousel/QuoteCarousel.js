import React, { useState } from 'react';
import './QuoteCarousel.css';

import Quote from '../../common/quote/Quote';

const QuoteCarousel = ({ entries = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!entries.length || !entries[currentIndex]) return null;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? entries.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === entries.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="quote-carousel">
            <Quote
                portrait={entries[currentIndex].imageUrl}
                message={entries[currentIndex].quote}
                author={entries[currentIndex].name}
                role={entries[currentIndex].roleOrCompany}
                social={entries[currentIndex].social}
                displayButtons={entries.length > 1}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </div>
    );
};

export default QuoteCarousel;
