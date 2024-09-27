import chroma from 'chroma-js';

type ExportModes = 'hex' | 'hsl' | 'rgb';

const getPalette = (
  color: string,
  baseColor = 500,
  mode: ExportModes = 'hex'
) => {
  if (!color || !baseColor) throw new Error('No color or base color included');
  const { scaleColors, domainParams } = getColorParams(color, baseColor);
  const colors = chroma
    .scale(scaleColors)
    .mode('hsl')
    .domain(domainParams)
    .colors(11, null)
    .map((c) => {
      if (mode === 'hex') {
        return c.hex();
      } else if (mode === 'hsl') {
        return c.hsl();
      } else if (mode === 'rgb') {
        return c.rgb();
      } else {
        return c.hex();
      }
    });

  return colors;
};

export const getShadePalette = (color: string, baseColor = 500) => {
  if (!color || !baseColor) throw new Error('No color or base color included');
  const colors = getPalette(color, baseColor, 'hex');
  const shadePalette = {
    50: colors[0],
    100: colors[1],
    200: colors[2],
    300: colors[3],
    400: colors[4],
    500: colors[5],
    600: colors[6],
    700: colors[7],
    800: colors[8],
    900: colors[9],
    950: colors[10],
  };
  return shadePalette;
};

const getColorParams = (color: string, baseColor: number) => {
  const defaultScale = [
    chroma(color).set('hsl.l', 0.95),
    color,
    chroma(color).set('hsl.l', 0.09),
  ];
  switch (baseColor) {
    case 50:
      return {
        scaleColors: [color, chroma(color).set('hsl.l', 0.09)],
        domainParams: [0, 1],
      };
    case 100:
      return { scaleColors: defaultScale, domainParams: [0, 0.1, 1] };
    case 200:
      return { scaleColors: defaultScale, domainParams: [0, 0.2, 1] };
    case 300:
      return { scaleColors: defaultScale, domainParams: [0, 0.3, 1] };
    case 400:
      return { scaleColors: defaultScale, domainParams: [0, 0.4, 1] };
    case 500:
      return { scaleColors: defaultScale, domainParams: [0, 0.5, 1] };
    case 600:
      return { scaleColors: defaultScale, domainParams: [0, 0.6, 1] };
    case 700:
      return { scaleColors: defaultScale, domainParams: [0, 0.7, 1] };
    case 800:
      return { scaleColors: defaultScale, domainParams: [0, 0.8, 1] };
    case 900:
      return { scaleColors: defaultScale, domainParams: [0, 0.9, 1] };
    case 950:
      return {
        scaleColors: [chroma(color).set('hsl.l', 0.95), color],
        domainParams: [0, 1],
      };
    default:
      return { scaleColors: defaultScale, domainParams: [0, 0.5, 1] };
  }
};

export const generateTailwindHexConfig = (color: string, baseColor: number) => {
  if (!color || !baseColor) throw new Error('No color or base color included');
  const colors = getPalette(color, baseColor, 'hex');

  return `{
  colors: {
    mycolor: {
      50: "${colors[0]}",
      100: "${colors[1]}",
      200: "${colors[2]}",
      300: "${colors[3]}",
      400: "${colors[4]}",
      500: "${colors[5]}",
      600: "${colors[6]}",
      700: "${colors[7]}",
      800: "${colors[8]}",
      900: "${colors[9]}",
      950: "${colors[10]}"
    }
  }
}`;
};
