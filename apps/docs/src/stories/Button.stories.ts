import type { Meta, StoryObj } from "@storybook/react";

import { Button, type buttonProps } from "@repo/ui/components";

const meta = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "Button" },
} satisfies Meta<buttonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
