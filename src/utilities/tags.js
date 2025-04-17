export const tags = {
    Technology: [
        "Digital Twin",
        "Augmented Reality",
        "Virtual Reality",
        "3D Modelling",
        "Machine Learning",
        "IoT",
        "AI",
        "Data Analytics",
        "Real-Time Monitoring",
        "Predictive Maintenance"
    ],
    Industry: [
        "Energy",
        "Telecommunications",
        "Oil and Gas",
        "Renewable Energy",
        "Healthcare",
        "Manufacturing",
        "Smart Cities",
        "Transportation",
        "Construction",
        "Education"
    ],
    Application: [
        "Product Visualisation",
        "Training Simulation",
        "Remote Monitoring",
        "Immersive Experience",
        "Collaboration Tools",
        "Risk Management",
        "Safety Monitoring",
        "Workflow Automation"
    ],
    Outcome: [
        "Cost Reduction",
        "Efficiency Improvement",
        "Scalability",
        "Increased Engagement",
        "Real-Time Insights",
        "Compliance and Safety",
        "Enhanced User Experience"
    ]
};

export const getAllTags = () => {
    return Object.values(tags).flat();
};
