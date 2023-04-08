import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../../app/components/atoms/label/Label';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Label> = {
  title: 'Components/Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'select',
        options:[ 'default'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'label bien',
  },
};
