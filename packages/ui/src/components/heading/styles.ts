import styled, { css } from "styled-components";

import type { HeadingProps } from ".";
import { fontSizes, fontWeights, lineHeights } from "../../tokens";

const modifier = {
  level: {
    1: () => css`
      font-size: ${fontSizes["5xl"]};
      line-height: ${lineHeights.tall};
    `,
    2: () => css`
      font-size: ${fontSizes["4xl"]};
      line-height: ${lineHeights.tall};
    `,
    3: () => css`
      font-size: ${fontSizes["2xl"]};
      line-height: ${lineHeights.base};
    `,
    4: () => css`
      font-size: ${fontSizes.xl};
      line-height: ${lineHeights.base};
    `,
    5: () => css`
      font-size: ${fontSizes.lg};
      line-height: ${lineHeights.base};
    `,
    6: () => css`
      font-size: ${fontSizes.md};
      line-height: ${lineHeights.base};
    `,
  },
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({ level }) => css`
    font-weight: ${fontWeights.bold};
    font-style: normal;
    ${!!level && modifier.level[level]()}
  `}
`;
