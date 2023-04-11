import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from '../../../app/components/atoms/image/Image';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof HeroImage> = {
  title: 'Components/Atoms/image/Image',
  component: HeroImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
};
