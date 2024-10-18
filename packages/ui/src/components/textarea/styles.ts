import styled, { css } from "styled-components";
import { colors, space, radius, fontSizes } from "../../tokens";
import type { textAreaProps } from ".";

const modifiers = {
  textareaSize: {
    medium: () => css`
      padding: ${space[3]} ${space[4]};
      font-size: 16px;
    `,
    large: () => css`
      padding: ${space[4]} ${space[5]};
      font-size: 18px;
    `,
  },
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    background-color: ${colors.gray50};
    color: ${colors.gray200};
    cursor: not-allowed;

    &::placeholder {
      color: ${colors.gray200};
    }
  `,
  error: () => css`
    border-color: ${colors.red};
    color: ${colors.red};

    &:focus {
      border-color: ${colors.red};
    }

    &::placeholder {
      color: ${colors.red};
    }
  `,
};

export const TextareaWrapper = styled.div<textAreaProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${colors.gray100};
  border-radius: ${radius.sm};
  padding: ${space[3]} ${space[4]};
  transition: border-color 0.3s ease;
  resize: vertical;

  &:focus-within {
    border-color: ${colors.unisal500};
  }

  ${({ textareaSize, fullWidth, disabled, error }) => css`
    ${textareaSize && modifiers.textareaSize[textareaSize]()};
    ${fullWidth && modifiers.fullWidth()};
    ${disabled && modifiers.disabled()};
    ${error && modifiers.error()};
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray400};
  font-size: ${fontSizes.lg};
  padding-left: ${space[2]};
`;

export const Textarea = styled.textarea<textAreaProps>`
  flex: 1;
  border: none;
  background: transparent;
  color: ${colors.gray700};
  font-size: ${fontSizes.md};
  outline: none;

  &::placeholder {
    color: ${colors.gray200};
    font-size: ${fontSizes.sm};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${space[2]};
`;

export const Label = styled.label`
  font-size: ${fontSizes.sm};
  color: ${colors.gray400};
`;

export const SupportText = styled.p`
  font-size: ${fontSizes.xs};
  color: ${colors.gray200};
  margin-top: ${space[1]};
`;

export const OptionalText = styled.span`
  font-size: ${fontSizes.xs};
  color: ${colors.gray200};
`;
