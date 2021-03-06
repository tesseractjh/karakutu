import { Size, Theme, ThemeGroup } from '@emotion/react';
import pxToRem from '@utils/pxToRem';

export const palette = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  GRAY100: '#f5f5f5',
  GRAY200: '#dadada',
  GRAY300: '#bfbfbf',
  GRAY400: '#a4a4a4',
  GRAY500: '#8a8a8a',
  GRAY600: '#6f6f6f',
  GRAY700: '#545454',
  GRAY800: '#3a3a3a',
  GRAY900: '#1f1f1f',
  RED100: '#ffdcdc',
  RED200: '#ffc5c5',
  RED300: '#ffaeae',
  RED400: '#ff9898',
  RED500: '#ff8181',
  RED600: '#ff6a6a',
  RED700: '#ff5454',
  RED800: '#ff3d3d',
  RED900: '#ff2727'
};

const size: Size = {
  mobile: pxToRem(375),
  tablet: pxToRem(768),
  laptop: pxToRem(1024),
  desktop: pxToRem(1680),
  header: pxToRem(60)
};

const lightTheme: Theme = {
  color: {
    primary: palette.RED300,
    background: palette.GRAY100,
    backgroundCon: palette.GRAY800,
    text: palette.BLACK,
    textCon: palette.GRAY100,
    hover: palette.GRAY400
  },
  size
};

const darkTheme: Theme = {
  color: {
    primary: palette.RED300,
    background: palette.GRAY900,
    backgroundCon: palette.BLACK,
    text: palette.WHITE,
    textCon: palette.GRAY100,
    hover: palette.GRAY700
  },
  size
};

const themeGroup: ThemeGroup = {
  LIGHT: lightTheme,
  DARK: darkTheme
};

export default themeGroup;
