import { useState, type InputHTMLAttributes } from "react";

export interface checkboxProps extends InputHTMLAttributes<HTMLInputElement> {
  typeSize?: "small" | "medium" | "large";
  onCheck?: (status: boolean) => void;
  label?: string;
  id?: string;
}
import * as S from "./styles";

export function Checkbox({
  onCheck,
  typeSize = "small",
  label,
  id = "idDefault",
  ...props
}: checkboxProps) {
  const [checked, setChecked] = useState(props.checked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };

  return (
    <S.Wrapper typeSize={typeSize}>
      <S.Input
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
    </S.Wrapper>
  );
}
