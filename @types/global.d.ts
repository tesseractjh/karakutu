import { Theme } from '@emotion/react';
import React from 'react';

declare global {
  type ThemeName = 'LIGHT' | 'DARK';

  interface Props {
    children: React.ReactNode;
  }
}

export {};
