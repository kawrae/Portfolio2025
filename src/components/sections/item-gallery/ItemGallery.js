import React, { useState, useEffect } from 'react';
import './ItemGallery.css';

import SearchFilter from '../../common/search-filter/SearchFilter';
import ProjectCard from '../../common/card/project/ProjectCard';

const ItemGallery = ({ titleBeforeBold, boldTitle, titleAfterBold, description, items, searchPlaceholder }) => {
    const [filteredItems, setFilteredItems] = useState(items);
    const [activeFilters, setActiveFilters] = useState([]);

    const handleSearch = (term) => {
        const filtered = items.filter(item =>
            item.title.toLowerCase().includes(term.toLowerCase()) ||
            item.description.toLowerCase().includes(term.toLowerCase()) ||
            item.owner.toLowerCase().includes(term.toLowerCase()) ||
            item.tags.some(tag => tag.name.toLowerCase().includes(term.toLowerCase()))
        );
        setFilteredItems(filtered);
    };

    const handleFilterChange = (activeFilters) => {
        const filtered = items.filter(item => 
            activeFilters.every(filter => 
                item.tags.map(tag => tag.name.toLowerCase()).includes(filter.name.toLowerCase())
            )
        );
        setFilteredItems(filtered);
    };    
    
    const handleFilterRemove = (filterLabel) => {
        const updatedFilters = activeFilters.filter(filter => filter.name !== filterLabel);
        setActiveFilters(updatedFilters);
    
        const filtered = items.filter(item =>
            updatedFilters.every(filter => item.tags.includes(filter.name))
        );
        setFilteredItems(filtered.length > 0 ? filtered : items);
    };

    useEffect(() => {
        setFilteredItems(items);
    }, [items]);

    return (
        <div className="item-gallery">
            <div className="text-title">
                <span>{titleBeforeBold} <b>{boldTitle}</b> {titleAfterBold}</span>
            </div>
            <div className="text-description">
                {description}
            </div>

            {searchPlaceholder && (
                <SearchFilter 
                    searchPlaceholder={searchPlaceholder}
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    onFilterRemove={handleFilterRemove}
                />
            )}

            <div className="item-gallery-grid">
                {filteredItems.map((item, index) => (
                    <ProjectCard
                        key={index}
                        project={item}
                    />
                ))}
            </div>
        </div>
    )
};

export default ItemGallery;