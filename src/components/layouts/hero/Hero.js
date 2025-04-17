import React from 'react';
import './Hero.css';

import Header from '../header/Header';
import MainButton from '../../common/button/main/MainButton';
import { getEmbedLink } from '../../../utilities/helper';

export const HeroPrimary = ({
    titleBeforeBold,
    boldTitle,
    titleAfterBold,
    subtitle,
    description,
    primaryAction,
    secondaryAction
}) => (
    <div className="hero-primary">
        <div className="background-effect" style={{ width: 200, height: 200 }} />
        <Header
            titleBeforeBold={titleBeforeBold}
            boldTitle={boldTitle}
            titleAfterBold={titleAfterBold}
            subtitle={subtitle}
            description={description}
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
        />
    </div>
);

export const HeroSecondary = ({
    featureImage,
    subtitle,
    title,
    description,
    primaryAction,
    secondaryAction
}) => (
    <div className="hero-secondary">
        <div className="hero-secondary-content">
            <div className="background-effect" style={{ width: 200, height: 200, left: '28%' }} />
            <b className="text-glow-title">{subtitle}</b>
            <div className="text-title">{title}</div>
            <div className="text-description">{description}</div>
            <div className="cta-button-row">
                <MainButton text={primaryAction.text} onClick={primaryAction.onClick} />
                <MainButton text={secondaryAction.text} onClick={secondaryAction.onClick} variant="secondary" />
            </div>
        </div>
        <img className="hero-secondary-image" src={featureImage} alt="" />
    </div>
);

export const HeroTertiary = ({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    videoUrl,
}) => (
    <div className="hero-tertiary">
        <div className="hero-tertiary-content">
            <div className="background-effect" style={{ width: 200, height: 200, left: '20.5%' }} />
            <b className="text-glow-title">{subtitle}</b>
            <b className="text-title">{title}</b>
            <div className="text-description">{description}</div>
            <div className="cta-button-row">
                <MainButton text={primaryAction.text} onClick={primaryAction.onClick} />
                <MainButton text={secondaryAction.text} onClick={secondaryAction.onClick} variant="secondary" />
            </div>
        </div>
        <iframe
            className="video-large-secondary"
            src={getEmbedLink(videoUrl)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Corey Black Portfolio Showcase"
        />
    </div>
);

export default { HeroPrimary, HeroSecondary, HeroTertiary };
