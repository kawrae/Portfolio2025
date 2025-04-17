import './Quote.css';

import { ArrowRight, ArrowLeft } from 'lucide-react';

import LucideButton from '../button/lucide/LucideButton';
import { SocialButton } from '../button/circle/CircleButton';

const Quote = ({ portrait, message, author, role, social, displayButtons, onPrev, onNext }) => {
    return (
        <div className="quote-container">
            <div className="quote-inner">
                <div className="quote-image-wrap">
                    <img className="quote-portrait" src={portrait} alt={`${author} portrait`} />
                </div>
                <div className="quote-content">
                    <div className="quote-mark">“</div>
                    <p className="quote-message">{message}</p>
                    {/* <img className="quote-logo" src={logoUrl} alt={`${company} logo`} /> */}
                    <div className="quote-bottom">
                        <div className="quote-author">
                            — {author}
                            {role && <span>, {role}</span>}
                        </div>
                        {displayButtons && (
                            <div className="quote-nav">
                                <LucideButton icon={ArrowLeft} size={20} variant="secondary" onClick={onPrev} />
                                <LucideButton icon={ArrowRight} size={20} variant="secondary" onClick={onNext} />
                            </div>
                        )}
                    </div>
                    <div className="quote-social">
                        {social && (
                            social?.map((s, idx) => (
                                <SocialButton 
                                    key={idx}
                                    target={s.target_url}
                                    image={s.media_url}
                                    imageAlt={s.name}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Quote;