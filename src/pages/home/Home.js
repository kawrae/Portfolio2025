import React from 'react';

import { useGateway } from '../../context/GatewayContext';

import R3F from '../../components/R3F/R3F';
import ValueStrip from '../../components/sections/value-strip/ValueStrip';
import FeaturedProjects from '../../components/sections/featured/projects/FeaturedProjects';
import QuoteCarousel from '../../components/sections/quote-carousel/QuoteCarousel';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';

const services = [
    'React & Front-End Design',
    'Java & Kotlin Mobile Apps',
    'Custom PHP & MySQL Solutions',
    'JavaScript / TypeScript Projects',
];

const Home = () => {
    const { clientQuotes } = useGateway();

    return (
        <div className="home-page">
            <R3F />
            <ValueStrip values={services} />
            {/* <FeaturedProjects /> */}
            <div id="testimonials">
                <QuoteCarousel entries={clientQuotes} />
            </div>
            <CallToAction 
                titleBeforeBold={"Aspiring"}
                boldTitle={"Full Stack Developer"}
                description={"Currently Enrolled in BSCHNS - Web and Mobile Development"}
            />
        </div>
    );
};

export default Home;