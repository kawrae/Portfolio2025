import React, { useState } from 'react';
import './SearchFilter.css';

import { useGateway } from '../../../context/GatewayContext';

import FilterModal from '../../layouts/modal/filters/FilterModal';
import { IconButton } from '../button/circle/CircleButton';
import TagButton from '../button/tag/TagButton';

import searchIcon from '../../../assets/icons/search.svg';
import filterIcon from '../../../assets/icons/filter.svg';

const SearchFilter = ({ searchPlaceholder, onSearch, onFilterChange }) => {
    const { tags } = useGateway();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleTagSelect = (tag) => {
        const alreadySelected = selectedTags.find(t => t.id === tag.id);
        const updatedTags = alreadySelected
            ? selectedTags.filter(t => t.id !== tag.id)
            : [...selectedTags, tag];

        setSelectedTags(updatedTags);
        onFilterChange(updatedTags);
    };    

    const handleTagRemove = (tag) => {
        const updatedTags = selectedTags.filter(t => t.id !== tag.id);
        setSelectedTags(updatedTags);
        onFilterChange(updatedTags);
    };

    return (
        <div className="search-filter-section">
            {/* Search Bar */}
            <div className="search-filter">
                <div className="searchbar">
                    <img className="search-icon" alt="search" src={searchIcon} />
                    <input 
                        type="text"
                        className="search-input"
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <IconButton 
                    onClick={() => setShowModal(true)} 
                    image={filterIcon} 
                    imageAlt="Filter Settings" 
                />
            </div>

            {/* Filters */}
            <div className="filter-tag-grid">
                {selectedTags.map((tag, index) => (
                    <TagButton 
                        key={index} 
                        text={tag.name} 
                        onClick={() => handleTagRemove(tag)} 
                    />
                ))}
            </div>

            {/* Modal for filters */}
            {showModal && (
                <FilterModal
                    tagsGrouped={tags}
                    selectedItems={selectedTags}
                    onSelectItem={handleTagSelect}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
};

export default SearchFilter;