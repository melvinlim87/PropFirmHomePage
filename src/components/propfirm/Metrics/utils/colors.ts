export function getColorClasses(gradient: string) {
  const baseColor = gradient.match(/from-(\w+)-/)?.[1] || 'blue';
  
  return {
    text: `text-${baseColor}-400`,
    ring: `text-${
      gradient.match(/to-(\w+)-/)?.[1] || 'cyan'
    }-400`
  };
}