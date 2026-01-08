import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Category } from '../types';

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

const Filters: React.FC<FiltersProps> = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Search Bar */}
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-lg transition-shadow shadow-sm"
          placeholder="Search prompts (e.g., 'subject line', 'abandoned cart')..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Dropdown */}
      <div className="relative min-w-[220px]">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Filter className="h-5 w-5 text-gray-500" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as Category | 'All')}
          className="block w-full pl-10 pr-10 py-3 text-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 rounded-xl shadow-sm bg-white appearance-none cursor-pointer"
        >
          <option value="All">All Categories</option>
          {Object.values(Category).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filters;