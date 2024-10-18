import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, type buttonProps } from "@repo/ui/components";

const meta = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), type: "button", children: "Button" },
  argTypes: {
    onClick: { action: "clicked" },
    loading: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    fullWidth: { control: { type: "boolean" } },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
        "icon",
      ],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      table: {
        defaultValue: { summary: "button" },
      },
    },
  },
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

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: "👋",
  },
};
