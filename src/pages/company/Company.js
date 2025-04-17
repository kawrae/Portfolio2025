import React, { useEffect } from 'react';
import './Company.css';

import { useConnectModal } from '../../context/ConnectModalContext';
import { useShortcut } from '../../context/ShortcutContext';
import { useGateway } from '../../context/GatewayContext';

import { HeroPrimary } from '../../components/layouts/hero/Hero';
import Timeline from '../../components/sections/timeline/Timeline';
import QuoteCarousel from '../../components/sections/quote-carousel/QuoteCarousel';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';

const Company = () => {
    const { openModal } = useConnectModal();
    const { shortcutToWork } = useShortcut();
    const { teamQuotes } = useGateway();

    return (
        <div className="company">
            <HeroPrimary
                subtitle={"DEVELOPERS OF TOMORROW"}
                titleBeforeBold={"The"}
                boldTitle={"pioneers"}
                titleAfterBold="behind the pixels"
                description={"At Infinitus Interactive, we create cutting-edge augmented reality experiences, digital twin solutions, and adaptive tools that transform industries and empower developers."}
                primaryAction={{
                    text: "Begin your journey",
                    onClick: () => openModal()
                }}
                secondaryAction={{
                    text: "Explore our work",
                    onClick: () => shortcutToWork()
                }}
            />
            <Timeline />
            <QuoteCarousel entries={teamQuotes} />
            <CallToAction 
                titleBeforeBold={"Begin your"}
                boldTitle={"journey"}
                titleAfterBold={"today"}
                description={"Wherever your journey leads, we’ll provide the solutions to help you succeed."}
            />
        </div>
    )
};

export default Company;