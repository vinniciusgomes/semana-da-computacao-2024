import type { Meta, StoryObj } from "@storybook/react";

import { Textarea, type textAreaProps } from "@repo/ui/components";

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Label",
    textareaSize: "medium",
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
} satisfies Meta<textAreaProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};
