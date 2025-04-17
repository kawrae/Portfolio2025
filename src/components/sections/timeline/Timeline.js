import React, { useEffect, useRef } from 'react';
import './Timeline.css';

import { useGateway } from '../../../context/GatewayContext';
import { useMobile } from '../../../context/MobileContext';

import ExternalButton from '../../common/button/external/ExternalButton';

import GitBookLightIcon from '../../../assets/logos/gitbook_light.svg';

const Timeline = () => {
    const { timelineEntries, getProjectById } = useGateway();
    const { isMobile } = useMobile();

    const lineRef = useRef(null);
    const fillRef = useRef(null);
    const entryRefs = useRef([]);
    const dotRefs = useRef([]);
    const dateRefs = useRef([]);

    useEffect(() => {
        const container = lineRef.current;
        const fill = fillRef.current;
        let animationFrameId;
    
        const animate = () => {
            if (!container || !fill) return;
    
            const containerRect = container.getBoundingClientRect();
            const containerTop = containerRect.top;
            let containerHeight = containerRect.height;
    
            const viewportCenter = window.innerHeight / 2;
            const targetDistance = viewportCenter - containerTop;
            const targetPercent = Math.min(Math.max((targetDistance / containerHeight) * 100, 0), 100);
            fill.style.height = `${targetPercent}%`;
    
            entryRefs.current.forEach((entryEl, index) => {
                const dotEl = dotRefs.current[index];
                const dateEl = dateRefs.current[index];
    
                if (!entryEl || !dotEl) return;
    
                const entryRect = entryEl.getBoundingClientRect();
                const entryTop = entryRect.top;
                const entryHeight = entryRect.height;
    
                const start = window.innerHeight / 2;
                const progress = Math.min(Math.max((start - entryTop) / entryHeight, 0), 1);
                const offset = progress * entryHeight;
    
                dotEl.style.transform = `translateX(-50%) translateY(${offset}px)`;
                if (dateEl && !isMobile) {
                    dateEl.style.transform = `translateY(${offset}px)`;
                }
            });
    
            animationFrameId = requestAnimationFrame(animate);
        };
    
        animate();
    
        // 🧹 Clean up on unmount
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);    

    return (
        <div className="timeline-section">
            <div className="timeline-container" ref={lineRef}>
                <div className="timeline-line">
                    <div className="timeline-line-fill" ref={fillRef} />
                </div>

                {timelineEntries.map((entry, index) => (
                    <div
                        key={index}
                        className="timeline-entry"
                        ref={(el) => (entryRefs.current[index] = el)}
                    >
                        <div 
                            className="timeline-date"
                            ref={(el) => (dateRefs.current[index] = el)}
                        >
                            {entry.date}
                        </div>
                        <div
                            className="timeline-dot"
                            ref={(el) => (dotRefs.current[index] = el)}
                        />
                        <div className="timeline-content">
                            {entry.title && <h3 className="timeline-title">{entry.title}</h3>}
                            {entry.description && <p className="timeline-description">{entry.description}</p>}
                            {entry.media_url && (
                                <img
                                    src={entry.media_url}
                                    alt={`${entry.date} milestone`}
                                    className="timeline-img"
                                />
                            )}
                            {/* {entry.project_id && (
                                <div className="timeline-content-button-container">
                                    <ExternalButton 
                                        text="Discover"
                                        variant='secondary'
                                        icon={GitBookLightIcon} 
                                        url={getProjectById(entry.project_id)?.gitbook_url} 
                                    />
                                </div>
                            )} */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
