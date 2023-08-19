export const adjust = (colorCode: string, adValue: number) => {
  const colorValue = colorCode.replace('#', '');
  const red = parseInt(colorValue.substring(0, 2), 16);
  const green = parseInt(colorValue.substring(2, 4), 16);
  const blue = parseInt(colorValue.substring(4, 6), 16);

  const adjustColor = (value: number) => {
    const adjustedValue = value + adValue;
    if (adjustedValue > 255) return Number(255).toString(16);
    if (adjustedValue < 0) return Number(0).toString(16);
    return adjustedValue.toString(16);
  };

  const adjustedRed = adjustColor(red).padStart(2, '0');
  const adjustedGreen = adjustColor(green).padStart(2, '0');
  const adjustedBlue = adjustColor(blue).padStart(2, '0');
  return `#${adjustedRed}${adjustedGreen}${adjustedBlue}`;
};
