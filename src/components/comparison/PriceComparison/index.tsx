import React from 'react';
import ComparisonTable from './ComparisonTable';
import AnimatedTitle from '../../ui/AnimatedTitle';
import GradientBorder from '../../ui/GradientBorder';
import { providers } from './data';

export default function PriceComparison() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle 
          title="Competitive Pricing"
          subtitle="Compare our comprehensive solution with other providers"
          gradient="from-blue-400 via-purple-300 to-pink-400"
        />

        <div className="mt-16">
          <GradientBorder>
            <div className="bg-slate-900 rounded-xl p-6 w-full overflow-x-auto">
              <ComparisonTable providers={providers} />
            </div>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}