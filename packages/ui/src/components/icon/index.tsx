import * as Icons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
}

export const Icon = ({
  name,
  color = "currentColor",
  size = 24,
  ...props
}: IconProps) => {
  const LucideIcon = Icons[name] as React.FC<Icons.LucideProps>;

  if (!LucideIcon) {
    console.error(`Ícone "${name}" não encontrado no pacote lucide-react.`);
    return null;
  }

  return <LucideIcon color={color} size={size} {...props} />;
};
