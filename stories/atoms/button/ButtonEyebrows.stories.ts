import type { Meta, StoryObj } from '@storybook/react';

import { Button, LeftBrow, RightBrow } from '../../../app/components/atoms/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/LeftBrow',
  component: LeftBrow,
  tags: ['autodocs'],
  argTypes: {
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
    label: 'leftBrow',
  },
};



