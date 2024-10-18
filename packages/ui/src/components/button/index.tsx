import * as S from "./styles";

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: buttonProps) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
};
