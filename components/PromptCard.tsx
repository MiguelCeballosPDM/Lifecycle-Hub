import React from 'react';
import { PromptData, Category } from '../types';
import { Sparkles, MessageSquare, Smartphone, GitBranch, Users, BarChart3 } from 'lucide-react';

interface PromptCardProps {
  prompt: PromptData;
  onClick: (prompt: PromptData) => void;
}

const getIcon = (category: Category) => {
  switch (category) {
    case Category.EMAIL: return <MessageSquare className="w-5 h-5 text-blue-500" />;
    case Category.SMS: return <Smartphone className="w-5 h-5 text-purple-500" />;
    case Category.FLOWS: return <GitBranch className="w-5 h-5 text-green-500" />;
    case Category.SEGMENTATION: return <Users className="w-5 h-5 text-orange-500" />;
    case Category.ANALYTICS: return <BarChart3 className="w-5 h-5 text-red-500" />;
    default: return <Sparkles className="w-5 h-5 text-gray-500" />;
  }
};

const getCategoryColor = (category: Category) => {
   switch (category) {
    case Category.EMAIL: return 'bg-blue-50 text-blue-700 border-blue-100';
    case Category.SMS: return 'bg-purple-50 text-purple-700 border-purple-100';
    case Category.FLOWS: return 'bg-green-50 text-green-700 border-green-100';
    case Category.SEGMENTATION: return 'bg-orange-50 text-orange-700 border-orange-100';
    case Category.ANALYTICS: return 'bg-red-50 text-red-700 border-red-100';
    default: return 'bg-gray-50 text-gray-700 border-gray-100';
  }
};

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick }) => {
  return (
    <div 
      onClick={() => onClick(prompt)}
      className="group bg-white rounded-xl border-2 border-[#7756ff] p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgb(175,170,249,0.4)] hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${getCategoryColor(prompt.category).split(' ')[0]}`}>
           {getIcon(prompt.category)}
        </div>
        {/* 
          TAMAÑO ETIQUETA CATEGORÍA: 
          Cambia 'text-sm' (pequeño) por 'text-xs' (muy pequeño) o 'text-base' (normal) 
        */}
        <span className={`text-sm font-bold px-3 py-1 rounded-full border ${getCategoryColor(prompt.category)}`}>
          {prompt.category}
        </span>
      </div>
      
      {/* 
        TAMAÑO TÍTULO: 
        Cambia 'text-2xl' por 'text-xl' (más chico) o 'text-3xl' (más grande) 
      */}
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors leading-tight">
        {prompt.title}
      </h3>
      
      {/* 
        TAMAÑO DESCRIPCIÓN: 
        Cambia 'text-lg' por 'text-base' (normal) o 'text-xl' (más grande) 
        NOTE: Using shortDescription here.
      */}
      <p className="text-gray-500 text-lg leading-snug line-clamp-3 mb-4 flex-grow">
        {prompt.shortDescription}
      </p>
      
      {/* 
        TAMAÑO BOTÓN "VIEW PROMPT": 
        Cambia 'text-base' por 'text-sm' si lo quieres más discreto 
      */}
      <div className="pt-4 border-t border-gray-100 mt-auto flex items-center text-base font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
        View Prompt &rarr;
      </div>
    </div>
  );
};

export default PromptCard;