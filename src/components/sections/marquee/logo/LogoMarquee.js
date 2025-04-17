import React from "react";
import './LogoMarquee.css';
import Marquee from "react-fast-marquee";

const LogoMarquee = ({ logos, direction }) => {
    return (
        <div className="marquee-container">
            <Marquee
                className="marquee" 
                speed={25} 
                pauseOnHover={false}
                // autoFill={true}
                gradient={false}
                gradientColor="#17181c"
                direction={direction}
            >
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index}`} className="logo-image" />
                ))}
            </Marquee>
        </div>
    );
};

export default LogoMarquee;
