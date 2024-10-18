import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, type checkboxProps } from "@repo/ui/components";

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    typeSize: "small",
  },
  argTypes: {
    typeSize: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<checkboxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: {},
};

export const Checked: Story = {
  name: "Checked",
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  name: "With label",
  args: {
    checked: true,
    label: "Label",
  },
};
