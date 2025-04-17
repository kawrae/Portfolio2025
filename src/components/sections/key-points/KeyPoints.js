import React from 'react';
import './KeyPoints.css';

import Header from '../../layouts/header/Header';
import CardPrimary from '../../common/card/primary/CardPrimary';

import { chunkArray } from '../../../utilities/helper';

const KeyPoints = ({ titleBeforeBold, boldTitle, titleAfterBold, description, cards}) => {
    const keyPointRows = chunkArray(cards, 3);

  	return (
        <div className="section column">
            <Header
                titleBeforeBold={titleBeforeBold}
                boldTitle={boldTitle}
                titleAfterBold={titleAfterBold}
                description={description}
            />
            <div className="key-points-container">
                <div className="background-effect" style={{ width: 200, height: 200 }}></div>
                {keyPointRows.map((row, rowIndex) => (
                    <div className="key-points-row" key={rowIndex}>
                        {row.map((keyPoint, index) => (
                            <CardPrimary 
                                key={index}
                                icon={keyPoint.icon}
                                title={keyPoint.title}
                                description={keyPoint.description}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
                            
export default KeyPoints;