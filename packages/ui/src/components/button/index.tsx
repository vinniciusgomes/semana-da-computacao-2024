import * as S from "./styles";

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "icon";
  size?: "xsmall" | "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  as?: React.ElementType;
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  ...props
}: buttonProps) => {
  return (
    <S.Container
      {...props}
      disabled={props.disabled || loading}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
    >
      {loading ? (
        <div data-testid="loading">
          <span>Loading</span>
        </div>
      ) : (
        <>{children}</>
      )}
    </S.Container>
  );
};
