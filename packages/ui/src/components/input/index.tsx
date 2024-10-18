import * as S from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  label: string;
  optional?: boolean;
  supportText?: string;
  icon?: React.ReactNode;
}

export const Input = ({
  inputSize = "medium",
  fullWidth = true,
  disabled = false,
  error = false,
  supportText,
  icon,
  ...props
}: InputProps) => {
  const Icon = icon;

  return (
    <>
      <S.LabelContainer>
        <S.Label>{props.label}</S.Label>

        {props.optional && <S.OptionalText>(Opcional)</S.OptionalText>}
      </S.LabelContainer>

      <S.InputWrapper
        icon={Icon}
        inputSize={inputSize}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        {...props}
      >
        <S.Input {...props} />

        {Icon && <S.IconWrapper>{Icon}</S.IconWrapper>}
      </S.InputWrapper>

      {supportText && <S.SupportText>{supportText}</S.SupportText>}
    </>
  );
};
