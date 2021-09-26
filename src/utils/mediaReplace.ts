export const mediaReplace = (src: string): string => {
  if (!src.startsWith('http')) {
    return `https://blackmedia.top${src}`;
  }
  return src;
};
