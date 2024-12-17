import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrismLogo from '../ui/PrismLogo';
import SolutionsDropdown from './SolutionsDropdown';
import CTAButtons from './CTAButtons';

export default function MainNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const scrollToPrismTrader = () => {
    const prismTraderSection = document.getElementById('prismtrader-section');
    if (prismTraderSection) {
      prismTraderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center h-16 relative">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group absolute left-[12%]">
            <PrismLogo />
            <span className="text-white font-semibold">Prism Solutions</span>
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="flex-1 flex justify-center">
            <div className="flex items-center space-x-16">
              <SolutionsDropdown 
                isOpen={openDropdown === 'solutions'} 
                onToggle={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')} 
              />
              <button 
                onClick={scrollToPrismTrader}
                className="text-slate-300 hover:text-white transition-colors font-bold"
              >
                WebTrader Platform
              </button>
              <a href="/pricing" className="text-slate-300 hover:text-white transition-colors font-bold">Pricing</a>
              <a href="/contact" className="text-slate-300 hover:text-white transition-colors font-bold">Contact</a>
            </div>
          </nav>

          {/* CTA Buttons - Right aligned */}
          <div className="absolute right-[5%]">
            <CTAButtons />
          </div>
        </div>
      </div>
    </header>
  );
}