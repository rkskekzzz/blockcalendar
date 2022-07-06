declare module '@mui/material/styles' {
  interface Theme {
    myPalette: {
      mode: string;
      foregroundHeader: string;
      backgroundHeader: string;
      backgroundModal: string;
      backDropHeader: string;
      foreground: string;
      iconSmall: string;
      icon: string;
      foregroundSwitch: string;
      backgroundSwitch: string;
      foregroundAddButton: string;
      backgroundAddButton: string;
      backDrop: string;
      background: string;
      border: string;
    };
    main: {
      background: string;
      theme: string;
    };
  }
  interface ThemeOptions {
    myPalette?: {
      mode?: string;
      foregroundHeader?: string;
      backgroundHeader?: string;
      backgroundModal?: string;
      backDropHeader?: string;
      foreground?: string;
      iconSmall?: string;
      icon?: string;
      foregroundSwitch?: string;
      backgroundSwitch?: string;
      foregroundAddButton?: string;
      backgroundAddButton?: string;
      backDrop?: string;
      background?: string;
      border?: string;
    };
    main: {
      background?: string;
      theme?: string;
    };
  }
}

export const themes = {
  light: {
    mode: 'light',
    foregroundHeader: '#6a6a6a',
    backgroundHeader: 'linear-gradient(#f2f2f2, #f2f2f2,#f2f2f2dd);',
    backgroundModal: '#ffffff',
    backDropHeader: '#ffffffdd',
    foreground: '#000000',
    iconSmall: '#000000',
    icon: '#171717',
    foregroundSwitch: '#1a1a1adf',
    backgroundSwitch: '#fafafadf',
    foregroundAddButton: '#ffffff',
    backgroundAddButton: '#000000',
    backDrop: '#00000080',
    background: '#ffffff',
    border: '#333333',
  },
  dark: {
    mode: 'dark',
    foregroundHeader: '#f2f2f2',
    backgroundHeader: 'linear-gradient(#1a1a1a, #1a1a1a,#1a1a1add);',
    backgroundModal: '#303030',
    backDropHeader: '#000000b0',
    foreground: '#dadada',
    iconSmall: '#f2f2f2',
    icon: '#ffffff',
    foregroundSwitch: '#fafafadf',
    backgroundSwitch: '#212121df',
    foregroundAddButton: '#000000',
    backgroundAddButton: '#ffffff',
    backDrop: '#000000b0',
    background: '#131313',
    border: '#cccccc',
  },
  main: {
    background: '#ffd8fb',
    theme: '#f995f0',
  },
};

export const colorsDefault = [
  '#A93226',
  '#CB4335',
  '#884EA0',
  '#7D3C98',
  '#2471A3',
  '#2E86C1',
  '#17A589',
  '#138D75',
  '#229954',
  '#28B463',
  '#D4AC0D',
  '#D68910',
  '#CA6F1E',
  '#BA4A00',
  '#460000',
  '#0c0046',
  '#2E4053',
];

export const colorsPastel = [
  '#FFCDD2',
  '#c0ade7',
  '#ffa9e6',
  '#ffb5d8',
  '#ffcdbd',
  '#fceda7',
  '#69d2c2',
  '#00b9e3',
  '#f97fde',
  '#ff93d9',
  '#ffabb6',
  '#ffd8a6',
  '#fdf18a',
  '#a6ec8a',
  '#cdc7be',
  '#f3e3cc',
  '#ddd2e3',
];
export const colorsNeon = [
  '#FFCDD2',
  '#a5a8a9',
  '#bc8422',
  '#cd5228',
  '#ae326e',
  '#963e79',
  '#725897',
  '#194294',
  '#009c89',
  '#5aa331',
  '#796732',
  '#8d5a31',
  '#3f464b',
  '#aba76f',
  '#ae8f72',
  '#bd7082',
  '#af82a4',
  '#a07ca4',
  '#77729b',
  '#6b8aaa',
  '#7fa074',
  '#a79479',
  '#8d7d72',
];
