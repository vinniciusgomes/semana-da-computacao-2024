import styled, { css } from "styled-components";

import { fontSizes, lineHeights, fontWeights } from "../../tokens";
import type { textProps } from "./";

const modifier = {
  xsmall: () => css`
    font-size: ${fontSizes.xs};
    line-height: ${lineHeights.shorter};
  `,
  small: () => css`
    font-size: ${fontSizes.sm};
    line-height: ${lineHeights.short};
  `,
  medium: () => css`
    font-size: ${fontSizes.md};
    line-height: ${lineHeights.base};
  `,
  large: () => css`
    font-size: ${fontSizes.lg};
    line-height: ${lineHeights.tall};
  `,

  weight: {
    normal: () => css`
      font-weight: ${fontWeights.regular};
    `,
    light: () => css`
      font-weight: ${fontWeights.light};
    `,
    bold: () => css`
      font-weight: ${fontWeights.bold};
    `,
  },

  italic: () => css`
    font-style: italic;
  `,
};

export const Text = styled.p<textProps>`
  ${({ size, fontWeight, italic }) => css`
    ${!!size && modifier[size]()};
    ${!!fontWeight && modifier.weight[fontWeight]()};
    ${!!italic && modifier.italic()};
  `}
`;
