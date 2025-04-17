import React, { useEffect } from 'react';
import './FilterModal.css';

import { IconButton } from '../../../common/button/circle/CircleButton';

import closeIcon from '../../../../assets/icons/close.svg';
import checkboxOnIcon from '../../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../../assets/icons/checkbox-off.svg';

const FilterModal = ({ tagsGrouped, selectedItems, onSelectItem, onClose }) => {
    useEffect(() => {
        // Lock scroll on mount
        document.body.style.overflow = 'hidden';
        return () => {
            // Unlock scroll on unmount
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="filter-modal-overlay">
            <div className="filter-modal">                
                {Object.keys(tagsGrouped).map((category, index) => (
                    <div key={index} className="column">
                        <div className="column-title">{category}</div>
                        
                        <div className="checkbox-items">
                            {tagsGrouped[category].map((tag, tagIndex) => (
                                <div 
                                    key={tagIndex} 
                                    className="checkbox-item hover-effect" 
                                    onClick={() => onSelectItem(tag)}
                                >
                                    <img 
                                        className="icon" 
                                        alt={selectedItems.includes(tag) ? "checkbox-on" : "checkbox-off"}
                                        src={selectedItems.includes(tag) ? checkboxOnIcon : checkboxOffIcon} 
                                    />
                                    <div className="checkbox-item-text">{tag.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <IconButton onClick={onClose} image={closeIcon} imageAlt={"Close"} iconSize={15} />
            </div>
        </div>
    );
};

export default FilterModal;