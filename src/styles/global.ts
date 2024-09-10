export const colors = {
  BK: '#191919',
  GY1: '#404040',
  GY2: '#676767',
  GY3: '#717171',
  GY4: '#AAAAAA',
  GY5: '#D9D9D9',
  GY6: '#F6F6F6',
  WH: '#FEFEFE',
  purple: '#857BFF',
  P1: '#A8A1FF',
  P2: '#DDDAFF',
  P3: '#F3F2FF',
  yellow: '#FFF279',
  lightYellow: '#FFF8B6',
  hover: '#6456FF',
  RD: '#FF4D4D',
};

export const weights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const theme = {
  colors,
  weights,
};

export type Colors = keyof typeof colors;
export type Weights = keyof typeof weights;

export const colorNames = Object.keys(colors) as Colors[];
