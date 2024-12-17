import React from 'react';

interface NavigationLinksProps {
  children: React.ReactNode;
}

export default function NavigationLinks({ children }: NavigationLinksProps) {
  return (
    <div className="hidden md:flex items-center justify-center space-x-8">
      {children}
      <a href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</a>
      <a href="/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
      <a href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
    </div>
  );
}