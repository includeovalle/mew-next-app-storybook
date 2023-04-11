import type { Meta, StoryObj } from '@storybook/react';

import { Submit } from '../../../app/components/atoms/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Submit> = {
  title: 'Components/Atoms/button/Submit',
  component: Submit,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Submit>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = { };



