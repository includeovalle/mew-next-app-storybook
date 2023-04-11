import type { Meta, StoryObj } from '@storybook/react';

import { Main } from '../../../app/components/atoms/main/Main';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Main> = {
  title: 'Components/Atoms/main/Main',
  component: Main,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Main>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
