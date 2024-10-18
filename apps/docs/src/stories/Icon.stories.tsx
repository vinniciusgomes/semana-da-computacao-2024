import * as Icons from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon, type IconProps } from "@repo/ui/components";

const iconNames = Object.keys(Icons);

const meta = {
  title: "Typography/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {
    name: {
      control: {
        type: "select",
      },
      options: iconNames,
      description: "Escolha o nome do ícone",
    },
    color: {
      control: "color",
      description: "Cor do ícone",
    },
    size: {
      control: {
        type: "number",
      },
      description: "Tamanho do ícone",
    },
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Eye",
    color: "currentColor",
    size: 24,
  },
};
