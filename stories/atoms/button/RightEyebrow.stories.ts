import type { Meta, StoryObj } from '@storybook/react';

import { RightBrow } from '../../../app/components/atoms/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof RightBrow> = {
  title: 'Components/Atoms/RightBrow',
  component: RightBrow,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: {
        type: 'boolean',
      },
    },
    type:  {
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RightBrow>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = { };



