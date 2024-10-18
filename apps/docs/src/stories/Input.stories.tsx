import type { Meta, StoryObj } from "@storybook/react";

import { Input, type InputProps, Icon } from "@repo/ui/components";

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Label",
    inputSize: "medium",
    placeholder: "Placeholder",
    supportText: "Texto de suporte",
    fullWidth: true,
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    optional: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};

export const Large: Story = {
  name: "Large",
  args: {
    inputSize: "large",
  },
};

export const WithIcon: Story = {
  name: "Icon",
  args: {
    icon: <Icon name="Eye" />,
  },
};
