import styled, { css } from "styled-components";
import type { buttonProps } from "./";
import { colors } from "../../tokens/colors";

const modifiers = {
  variant: {
    primary: () => css`
      background-color: ${colors.unisal500};
      color: #fff;
    `,
    secondary: () => css`
      background-color: ${colors.gray100};
      color: ${colors.black};
    `,
  },
};

export const Button = styled.button<buttonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  ${({ variant }) => css`
    ${variant && modifiers.variant[variant]()};
  `}
`;
