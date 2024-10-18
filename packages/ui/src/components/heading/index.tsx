import * as S from "./styles";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  return <S.Heading level={level}>{children}</S.Heading>;
};
