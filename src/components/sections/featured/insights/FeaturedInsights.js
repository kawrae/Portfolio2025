import './FeaturedInsights';

import ItemGallery from '../../../components/item-gallery/ItemGallery';

import infinitusPlaceholder from '../../../assets/images/logo/infinitus_placeholder.png';

const FeaturedInsights = () => {
    const exampleInsights = [
        {
            image: infinitusPlaceholder,
            owner: "Infinitus Interactive",
            title: "Transforming Energy Operations with Digital Twins",
            description: "Discover how our digital twin solution helped Engtech Analytics reduce operational costs and improve pipeline monitoring by 30%.",
            tags: ["Digital Twin", "Energy", "Real-Time Monitoring", "Predictive Maintenance", "Cost Reduction"],
            ctaPrimary: "Learn more"
        },
        {
            image: infinitusPlaceholder,
            owner: "Infinitus Interactive",
            title: "Transforming Energy Operations with Digital Twins",
            description: "Discover how our digital twin solution helped Engtech Analytics reduce operational costs and improve pipeline monitoring by 30%.",
            tags: ["Digital Twin", "Energy", "Real-Time Monitoring", "Predictive Maintenance", "Cost Reduction"],
            ctaPrimary: "Learn more"
        },
        {
            image: infinitusPlaceholder,
            owner: "Infinitus Interactive",
            title: "Transforming Energy Operations with Digital Twins",
            description: "Discover how our digital twin solution helped Engtech Analytics reduce operational costs and improve pipeline monitoring by 30%.",
            tags: ["Digital Twin", "Energy", "Real-Time Monitoring", "Predictive Maintenance", "Cost Reduction"],
            ctaPrimary: "Learn more"
        },
    ];

    return (
        <div className="featured-insights">
            <ItemGallery 
                titleBeforeBold={"Discover our"}
                boldTitle={"insights"}
                description={"Stay ahead with the latest industry trends, tools, and project highlights."}
                items={exampleInsights}
            />
        </div>
    )
};

export default FeaturedInsights;