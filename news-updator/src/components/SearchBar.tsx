import { useState } from 'react';
import { FiSearch, FiBell, FiRss, FiHelpCircle, FiSettings } from 'react-icons/fi';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className={`search-form ${isFocused ? 'focused' : ''}`}>
        <div className="search-input-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="search-input"
          />
        </div>
      </form>
      <div className="action-icons">
        <button className="icon-button" aria-label="Updates">
          <FiBell />
        </button>
        <button className="icon-button" aria-label="News">
          <FiRss />
        </button>
        <button className="icon-button" aria-label="Help">
          <FiHelpCircle />
        </button>
        <button className="icon-button" aria-label="Settings">
          <FiSettings />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;