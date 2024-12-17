export const colors = {
  blue: '#60A5FA',
  purple: '#C084FC', 
  emerald: '#34D399',
  orange: '#FB923C',
  red: '#F87171',
  indigo: '#818CF8'
};

export const createColoredShadow = (color: string, opacity: number = 0.15) => {
  return `0 0 20px ${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
};