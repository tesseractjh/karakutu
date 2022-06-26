import { css } from '@emotion/react';

export const flex = (
  justifyContent?: string | null,
  alignItems?: string | null
) => css`
  display: flex;
  justify-content: ${justifyContent ?? 'center'};
  align-items: ${alignItems ?? 'center'};
`;
