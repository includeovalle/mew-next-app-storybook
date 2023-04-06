import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '/app/components/atoms/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'select',
        options: ['primary', 'secondary', 'rightBrow', 'leftBrow'],
    },
    type:  {
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const RightBrow: Story = {
  args: {
    className:'rightBrow',
    label: 'Button',
  },
};

export const LeftBrow: Story = {
  args: {
    className:'leftBrow',
    label: 'Button',
  },
};
