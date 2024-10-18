import * as S from "./styles";

export interface textAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaSize?: "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  label: string;
  optional?: boolean;
  supportText?: string;
}

export const Textarea = ({
  textareaSize = "medium",
  fullWidth = true,
  disabled = false,
  error = false,
  supportText,
  rows = 4,
  ...props
}: textAreaProps) => {
  return (
    <>
      <S.LabelContainer>
        <S.Label>{props.label}</S.Label>

        {props.optional && <S.OptionalText>(Opcional)</S.OptionalText>}
      </S.LabelContainer>

      <S.TextareaWrapper
        textareaSize={textareaSize}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        rows={rows}
        {...props}
      >
        <S.Textarea {...props} />
      </S.TextareaWrapper>

      {supportText && <S.SupportText>{supportText}</S.SupportText>}
    </>
  );
};
