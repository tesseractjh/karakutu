import { css, Color, Size, Theme } from '@emotion/react';
import pxToRem from '@utils/pxToRem';

export const color =
  (colorString: keyof Color) =>
  ({ theme }: { theme: Theme }) =>
    theme.color[colorString];

export const size =
  (sizeString: keyof Size) =>
  ({ theme }: { theme: Theme }) =>
    theme.size[sizeString];

export const flex = (
  justifyContent?: string | null,
  alignItems?: string | null
) => css`
  display: flex;
  justify-content: ${justifyContent ?? 'center'};
  align-items: ${alignItems ?? 'center'};
`;

export const border = (width?: number | string | null, style?: string | null) =>
  `${pxToRem(width ?? 1)} ${style ?? 'solid'}`;
