import React from 'react';
import './Portfolio.css';

import { useConnectModal } from '../../context/ConnectModalContext';
import { useShortcut } from '../../context/ShortcutContext';
import { useGateway } from '../../context/GatewayContext';
import { useMobile } from '../../context/MobileContext';

import { HeroPrimary, HeroTertiary } from '../../components/layouts/hero/Hero';
import Overview from '../../components/sections/overview/Overview';
import CallToAction from '../../components/layouts/call-to-action/CallToAction';
import ItemGallery from '../../components/sections/item-gallery/ItemGallery';

import featureImage from '../../assets/images/hero/solutions.png';
import dataInsightsIcon from '../../assets/icons/pie.svg';
import maintenanceIcon from '../../assets/icons/chart_success.svg';
import efficiencyIcon from '../../assets/icons/coffee.svg';
import visualistionsIcon from '../../assets/icons/box_dashed.svg';
import engagementIcon from '../../assets/icons/users.svg';
import dataIntegrationIcon from '../../assets/icons/share.svg';
import riskSafetyIcon from '../../assets/icons/danger.svg';
import scalabilityIcon from '../../assets/icons/sun.svg';
import costSavingsIcon from '../../assets/icons/money.svg';

const overviewItems = [
	{ icon: dataInsightsIcon, title: "Data Insights", description: "Monitor operations with real-time, actionable data" },
	{ icon: maintenanceIcon, title: "Maintenance", description: "Prevent downtime with smart, predictive alerts" },
	{ icon: efficiencyIcon, title: "Efficiency", description: "Streamline processes to boost productivity" },
	{ icon: visualistionsIcon, title: "Visualisations", description: "Engage with interactive 3D product displays" },
	{ icon: engagementIcon, title: "Engagement", description: "Increase engagement with immersive apps" },
	{ icon: dataIntegrationIcon, title: "Data Integration", description: "Connect all your data for full system visibility" },
	{ icon: riskSafetyIcon, title: "Risk & Safety", description: "Stay compliant with real-time safety alerts" },
	{ icon: scalabilityIcon, title: "Scalability", description: "Adapt and grow with scalable solutions" },
	{ icon: costSavingsIcon, title: "Cost Savings", description: "Maximise ROI and lower costs with insights" }
];

const Portfolio = () => {
	const { openModal } = useConnectModal();
	const { shortcutToWork } = useShortcut();
	const { projects } = useGateway();
	const { isMobile } = useMobile();

	return (
		<div className="products-page">
			{isMobile ? (
				<HeroPrimary 
					subtitle={"EXPERT SOLUTIONS"}
					titleBeforeBold={"Unlock the power of"}
					boldTitle={"immersive technology"}
					description={"Explore tailored solutions in augmented reality and digital twins that transform industries and drive business growth."}
					primaryAction={{
						text: "Begin your journey",
						onClick: () => openModal()
					}}
					secondaryAction={{
						text: "Explore our work",
						onClick: () => shortcutToWork()
					}}
				/>
			) : (
				<HeroTertiary 
					title={"Portfolio highlights"}
					subtitle={"POWERED BY INFINITUS"}
					description={"A curated selection of our most impactful digital solutions — blending innovation, interactivity, and industry expertise."}
					videoUrl={"https://www.youtube.com/watch?v=IUohllIyWQ0&list=PLxWegkT2PuTJYtja0YBdfYwd3bAzlBlsU&ab_channel=InfinitusInteractive"}
					primaryAction={{
						text: "Begin your journey",
						onClick: () => openModal()
					}}
					secondaryAction={{
						text: "Explore our work",
						onClick: () => shortcutToWork()
					}}
				/>
			)}
			{/* {!isMobile && (
				<Overview 
					titleBeforeBold={"Transform your business with"}
					boldTitle={"custom-built solutions"}
					description={"At Infinitus Interactive, we create tailored solutions in augmented reality and digital twins, developed in collaboration with industry leaders."}
					actionButton={{
						text: "Begin your journey",
						onClick: () => openModal()
					}}
					rowOne={overviewItems.slice(0, 3)}
					rowTwo={overviewItems.slice(3, 6)}
					rowThree={overviewItems.slice(6, 9)}
				/>
			)} */}
			<div id="work">
				<ItemGallery
					titleBeforeBold={"Explore our"}
					boldTitle={"work"}
					description={"Discover how we turn complex problems into interactive solutions."}
					items={projects}
					searchPlaceholder={"Search products (e.g. digital twins)"}
				/>
			</div>
			<CallToAction 
				titleBeforeBold={"Begin your"}
				boldTitle={"journey"}
				titleAfterBold={"today"}
				description={"Wherever your journey leads, we’ll provide the solutions to help you succeed."}
			/>
		</div>
	)
};

export default Portfolio;