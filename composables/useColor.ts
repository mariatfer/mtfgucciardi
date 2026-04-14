const hexToRgb = (hex: string) => {
  const clean = hex.replace("#", "").trim();

  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

export const useColor = () => {
  const getColor = (varName: string, asRgb = false): string => {
    if (typeof window === "undefined") return "";

    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();

    if (!asRgb) return value;

    if (value.startsWith("#")) {
      return hexToRgb(value);
    }

    return value;
  };

  return {
    getColor,
  };
};
