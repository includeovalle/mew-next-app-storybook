import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../../app/components/atoms/label/Label';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Label> = {
  title: 'Components/Atoms/label/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    label: {
      table: {
        description: 'className',

        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'empty string',
        },
      },
    }
    ,className: {
      control: 'select',
      options: ['default'],
      //set  default value for className to(storybook 7):  'default'
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'label story',
  },
};
