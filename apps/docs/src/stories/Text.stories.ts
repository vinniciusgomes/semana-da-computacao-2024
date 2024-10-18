import type { Meta, StoryObj } from "@storybook/react";

import { Text, type textProps } from "@repo/ui/components";

const meta = {
  title: "Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<textProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Italic: Story = {
  args: {
    children: "Text",
    italic: true,
  },
};
