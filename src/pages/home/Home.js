import React from 'react';

import { useGateway } from '../../context/GatewayContext';

import R3F from '../../components/R3F/R3F';
import ValueStrip from '../../components/sections/value-strip/ValueStrip';
import FeaturedProjects from '../../components/sections/featured/projects/FeaturedProjects';
import QuoteCarousel from '../../components/sections/quote-carousel/QuoteCarousel';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';

const services = [
    'Digital Twins',
    'Augmented Reality',
    'Virtual Reality',
    'Custom Development',
    'Websites',
    'Games',
    'Apps'
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
                titleBeforeBold={"Begin your"}
                boldTitle={"journey"}
                titleAfterBold={"today"}
                description={"Wherever your journey leads, we’ll provide the solutions to help you succeed."}
            />
        </div>
    );
};

export default Home;