export function getColorClasses(gradient: string) {
  return {
    ring: gradient.includes('blue') ? 'ring-blue-400' :
          gradient.includes('purple') ? 'ring-purple-400' :
          gradient.includes('emerald') ? 'ring-emerald-400' :
          gradient.includes('amber') ? 'ring-amber-400' :
          gradient.includes('rose') ? 'ring-rose-400' :
          'ring-indigo-400',
    text: gradient.includes('blue') ? 'text-blue-400' :
          gradient.includes('purple') ? 'text-purple-400' :
          gradient.includes('emerald') ? 'text-emerald-400' :
          gradient.includes('amber') ? 'text-amber-400' :
          gradient.includes('rose') ? 'text-rose-400' :
          'text-indigo-400'
  };
}