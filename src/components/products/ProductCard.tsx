import React from 'react';
import { LucideIcon } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  gradient: string;
  demoUrl: string;
}

export default function ProductCard({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  gradient,
  demoUrl
}: ProductCardProps) {
  return (
    <GradientBorder>
      <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 h-full overflow-hidden">
        {/* Hover Effect Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className="relative z-10">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} p-0.5`}>
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-blue-400 mb-4">{subtitle}</p>
          <p className="text-slate-300 mb-6">{description}</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Demo Button */}
          <button 
            className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${gradient} text-white font-semibold 
              hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5`}
          >
            Explore {title}
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
      </div>
    </GradientBorder>
  );
}