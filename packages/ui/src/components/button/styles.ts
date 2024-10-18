import styled, { css } from "styled-components";
import { colors, space, radius } from "../../tokens";

import type { buttonProps } from "./";

const modifiers = {
  variant: {
    primary: () => css`
      background-color: ${colors.unisal500};
      color: #fff;
    `,
    secondary: () => css`
      background-color: ${colors.gray100};
      color: ${colors.gray800};
    `,
    destructive: () => css`
      background-color: ${colors.red};
      color: #fff;
    `,
    outline: () => css`
      background-color: transparent;
      color: ${colors.unisal500};
      border: 1px solid ${colors.unisal500};

      &:hover {
        background-color: ${colors.unisal500};
        color: #fff;
      }
    `,
    ghost: () => css`
      background-color: transparent;

      &:hover {
        background-color: ${colors.unisal500};
        color: #fff;
      }
    `,
    link: () => css`
      background-color: transparent;
      color: ${colors.unisal500};
    `,
    icon: () => css`
      background-color: transparent;
    `,
  },
  size: {
    xsmall: () => css`
      padding: ${space[1]} ${space[2]};
    `,
    small: () => css`
      padding: ${space[2]} ${space[3]};
    `,
    medium: () => css`
      padding: ${space[3]} ${space[4]};
    `,
    large: () => css`
      padding: ${space[4]} ${space[5]};
    `,
  },
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Container = styled.button<buttonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: ${radius.md};
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  text-align: center;

  &:disabled {
    background-color: ${colors.gray50};
    cursor: not-allowed;

    span {
      color: ${colors.gray200};
    }
  }

  ${({ variant, size, fullWidth }) => css`
    ${variant && modifiers.variant[variant]()};
    ${size && modifiers.size[size]()};
    ${fullWidth && modifiers.fullWidth()};
  `}
`;
