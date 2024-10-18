import type { Meta, StoryObj } from "@storybook/react";

import { Heading, type HeadingProps } from "@repo/ui/components";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    level: 1,
  },
  argTypes: {
    level: {
      control: "radio",
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} satisfies Meta<HeadingProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  name: "h1",
  args: {
    children: "Heading",
    level: 1,
  },
};

export const H2: Story = {
  name: "h2",
  args: {
    children: "Heading",
    level: 2,
  },
};

export const H3: Story = {
  name: "h3",
  args: {
    children: "Heading",
    level: 3,
  },
};

export const H4: Story = {
  name: "h4",
  args: {
    children: "Heading",
    level: 4,
  },
};

export const H5: Story = {
  name: "h5",
  args: {
    children: "Heading",
    level: 5,
  },
};

export const H6: Story = {
  name: "h6",
  args: {
    children: "Heading",
    level: 6,
  },
};
