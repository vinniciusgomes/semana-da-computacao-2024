import * as S from "./styles";

export interface textProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  fontWeight?: "light" | "normal" | "bold";
  italic?: boolean;
  size?: "xsmall" | "small" | "medium" | "large";
}

export function Text({
  children,
  fontWeight = "normal",
  italic = false,
  size = "medium",
  ...props
}: textProps) {
  return (
    <S.Text fontWeight={fontWeight} italic={italic} size={size} {...props}>
      {children}
    </S.Text>
  );
}
