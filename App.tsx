import React, { useState, useMemo } from 'react';
import { PROMPTS, APP_TITLE, APP_SUBTITLE } from './constants';
import { Category, PromptData } from './types';
import PromptCard from './components/PromptCard';
import PromptModal from './components/PromptModal';
import Filters from './components/Filters';
import { BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [activePrompt, setActivePrompt] = useState<PromptData | null>(null);

  // Filter logic
  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter((prompt) => {
      const matchesSearch = 
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#2b2a29] pb-20 font-sans">
      {/* Header Section */}
      <header className="bg-[#7756ff] border-b border-[#6649e0] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Logo Container - Only Logo, slightly smaller */}
          <div className="flex justify-center items-center mb-6">
            <img 
              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/10/logo-white.svg" 
              alt="Power Digital Marketing" 
              className="h-7 sm:h-9 w-auto opacity-95"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl mb-2">
            {APP_TITLE}
          </h1>
          
          {/* Team Subtitle */}
          <h2 className="text-xl font-semibold text-indigo-100 tracking-wide mb-6">
            Lifecycle Marketing Team
          </h2>

          {/* Description - Increased font size */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-indigo-200/90 font-light leading-relaxed">
            {APP_SUBTITLE}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
          
          <Filters 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Results Grid */}
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt) => (
                <PromptCard 
                  key={prompt.id} 
                  prompt={prompt} 
                  onClick={setActivePrompt} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No prompts found</h3>
              <p className="text-gray-500 mt-1">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 text-brand-600 font-medium hover:text-brand-500"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} PDM - Lifecycle Team. Internal Use Only.</p>
      </footer>

      {/* Detailed View Modal */}
      <PromptModal 
        prompt={activePrompt} 
        onClose={() => setActivePrompt(null)} 
      />
    </div>
  );
};

export default App;