import chroma from 'chroma-js';

export const getPalette = (color: string, baseColor = 500) => {
  const { scaleColors, domainParams } = getColorParams(color, baseColor);
  const colors = chroma
    .scale(scaleColors)
    .mode('hsl')
    .domain(domainParams)
    .colors(11);

  return colors;
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
