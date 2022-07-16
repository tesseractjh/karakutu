import '@emotion/react';

declare module '@emotion/react' {
  export interface Color {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    background: string;
    backgroundLight: string;
    backgroundCon: string;
    text: string;
    textLight: string;
    textCon: string;
    hover: string;
    hoverLight: string;
    border: string;
  }

  export interface Size {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    header: string;
  }

  export interface Theme {
    color: Color;
    size: Size;
  }

  export interface ThemeGroup {
    LIGHT: Theme;
    DARK: Theme;
  }
}
