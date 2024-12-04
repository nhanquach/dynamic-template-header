function getLuminance(hexColor: string) {
  hexColor = hexColor.replace("#", "");

  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  const relativeLuminance =
    0.2126 * Math.pow(r / 255, 2.2) +
    0.7152 * Math.pow(g / 255, 2.2) +
    0.0722 * Math.pow(b / 255, 2.2);

  return relativeLuminance;
}

export const getBestContrastColor = (
  hexColor?: string,
  defaultColor?: string
): string => {
  if (!hexColor) {
    return defaultColor || "#000000";
  }

  const luminance = getLuminance(hexColor);

  return luminance > 0.1 ? "#000000" : "#FFFFFF";
};
