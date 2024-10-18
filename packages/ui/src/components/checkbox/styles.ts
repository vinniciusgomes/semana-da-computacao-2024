import styled, { css } from "styled-components";
import type { checkboxProps } from ".";
import { colors, fontSizes, fontWeights } from "../../tokens";

const wrapperModifier = {
  small: () => css`
    ${Input} {
      width: 16px;
      height: 16px;
      &::before {
        width: 4px;
        height: 7px;
        top: 1px;
      }
    }
  `,
  medium: () => css`
    ${Input} {
      width: 24px;
      height: 24px;
      &::before {
        width: 6px;
        height: 12px;
        top: 2px;
      }
    }
  `,
  large: () => css`
    ${Input} {
      width: 30px;
      height: 30px;
      &::before {
        width: 8px;
        height: 18px;
        top: 1px;
      }
    }
  `,
};

export const Wrapper = styled.div<Pick<checkboxProps, "typeSize">>`
  display: flex;
  align-items: center;
  ${({ typeSize }) => css`
    ${!!typeSize && wrapperModifier[typeSize]()};
  `}
`;

export const Input = styled.input`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 1px solid ${colors.gray200};
  border-radius: 4px;
  outline: none;
  &::before {
    position: absolute;
    content: "";
    border: 2px solid ${colors.unisal500};
    border-top: none;
    border-left: none;
    border-end-end-radius: 3px;
    border-end-start-radius: 1px;
    border-start-end-radius: 1px;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:focus {
  }
  &:checked {
    border: 2px solid ${colors.unisal500};
    &:before {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
  padding-left: 8px;
  color: ${colors.gray400};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.sm};
`;
