import React, { useState } from 'react';

const FilterDropdown = ({ onFilterChange }) => {

    const [filter, setFilter] = useState("");
    const [selectedFilter, setSelectedFilter] = useState('Filters');

    const handleFilter = (event) => {
        const filterValue = event.currentTarget.getAttribute('data-filter');
        const filterText = event.currentTarget.innerText;

        setFilter(filterValue);
        setSelectedFilter(filterText);

        if (onFilterChange) {
            onFilterChange(filterValue);  // Notify parent component
        }
    };

    return (
        <div className="col-3" style={{marginTop: '9.5rem'}}>
            <div className="dropdown d-lg-inline">
                <a
                    role="button"
                    href="#"
                    data-bs-toggle="dropdown"
                    className="dropdown-toggle btn btn-light"
                    aria-expanded="false">
                    {selectedFilter}
                </a>
                <div className="dropdown-menu" role="menu">
                    <a
                        role="menuitem"
                        className="dropdown-item"
                        data-filter="completed"
                        onClick={handleFilter}>
                        <span>Fait</span>
                    </a>
                    <a
                        role="menuitem"
                        className="dropdown-item"
                        data-filter="pending"
                        onClick={handleFilter}>
                        <span>A faire</span>
                    </a>
                    <a
                        role="menuitem"
                        className="dropdown-item"
                        data-filter="all"
                        onClick={handleFilter}>
                        <span>Tout</span>
                    </a>                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
