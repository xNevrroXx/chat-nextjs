import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        
    },
  };

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standart: Story = {
  args: {
    children: 'Button',
  },
};

export const WithGradientButton: Story = {
  args: {
    gradientButton: "linear-gradient(to right top, violet, black)",
    children: 'Button',
  },
};