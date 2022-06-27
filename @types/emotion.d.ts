import '@emotion/react';

declare module '@emotion/react' {
  export interface Color {
    primary: string;
    background: string;
    backgroundCon: string;
    text: string;
    textCon: string;
    hover: string;
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
