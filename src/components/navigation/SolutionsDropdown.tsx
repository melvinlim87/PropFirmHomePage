import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionsDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SolutionsDropdown({ isOpen, onToggle }: SolutionsDropdownProps) {
  const solutions = [
    { id: 'prop-firm', to: '/prop-firm', label: 'Prop Firm Solutions' },
    { id: 'payment', to: '#payment-solutions', label: 'Payment Gateway Solutions', isAnchor: true },
    { id: 'broker', to: '#broker-solutions', label: 'Brokerage Solutions', isAnchor: true },
    { id: 'consulting', to: '#solutions', label: 'Consulting Services', isAnchor: true },
    { id: 'custom', to: '#solutions', label: 'Custom Solutions', isAnchor: true }
  ];

  const handleClick = (to: string, isAnchor?: boolean) => {
    if (isAnchor) {
      let targetSection;
      if (to === '#solutions') {
        targetSection = document.getElementById('solutions-section');
      } else {
        targetSection = document.querySelector(to);
      }
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onToggle();
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-bold"
        onClick={onToggle}
      >
        Solutions
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2">
          {solutions.map(({ id, to, label, isAnchor }) => (
            isAnchor ? (
              <button
                key={id}
                onClick={() => handleClick(to, isAnchor)}
                className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 font-bold"
              >
                {label}
              </button>
            ) : (
              <Link
                key={id}
                to={to}
                onClick={() => handleClick(to)}
                className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 font-bold"
              >
                {label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}