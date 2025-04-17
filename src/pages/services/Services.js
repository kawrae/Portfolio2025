import React from 'react';
import './Services.css';

import { useConnectModal } from '../../context/ConnectModalContext';
import { useShortcut } from '../../context/ShortcutContext';

import Header from '../../components/layouts/header/Header';
import { FocusCardSmall } from '../../components/common/card/focus/FocusCard';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';

import consultingIcon from '../../assets/icons/chat.svg';
import arVrIcon from '../../assets/icons/glasses.svg';
import digitalTwinIcon from '../../assets/icons/cube_scan.svg';
import dataIntegrationIcon from '../../assets/icons/pie.svg';
import unityAssetIcon from '../../assets/icons/box.svg';

const Services = () => {
    const { openModal } = useConnectModal();
    const { shortcutToWork } = useShortcut();

    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="background-effect" style={{ width: 200, height: 200 }}></div>
                <Header
                    titleBeforeBold={"Crafting unique solutions with"}
                    boldTitle={"expert services"}
                    subtitle={"OUR CORE SERVICES"}
                    description={"From concept to reality, we offer services that support every step of your journey."}
                    primaryAction={{
                        text: "Begin your journey",
                        onClick: () => openModal()
                    }}
                    secondaryAction={{
                        text: "Explore our work",
                        onClick: () => shortcutToWork()
                    }}
                />
            </div>
            <div className="services-grid">
                <FocusCardSmall 
                    icon={consultingIcon}
                    title={"Consulting & Strategy"}
                    description={"Expert guidance for launching digital twins and AR solutions with confidence."}
                />
                <FocusCardSmall 
                    icon={digitalTwinIcon}
                    title={"Digital Twin Implementation"}
                    description={"Real-time digital replicas that optimise, monitor, and transform real-world assets."}
                />
                <FocusCardSmall 
                    icon={unityAssetIcon}
                    title={"Tools & Asset Development"}
                    description={"Custom tools and plugins to supercharge your development workflows."}
                />
                <FocusCardSmall 
                    icon={arVrIcon}
                    title={"AR & VR Development"}
                    description={"Immersive experiences built for training, visualisation, and user engagement."}
                />
                <FocusCardSmall 
                    icon={dataIntegrationIcon}
                    title={"Data Integration & Visualisation"}
                    description={"Connect your data to dynamic 3D environments for meaningful, real-time insights."}
                />
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

export default Services;