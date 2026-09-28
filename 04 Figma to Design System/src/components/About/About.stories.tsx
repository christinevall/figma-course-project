import type { Meta, StoryObj } from '@storybook/react-vite';
import { About } from './About';
import { content } from '../../content';
import css from './About.module.css?raw';
import tsx from './About.tsx?raw';

const meta = {
  title: 'Components/About',
  component: About,
  tags: ['autodocs'],
  args: content.about,
  parameters: {
    layout: 'fullscreen',
    code: [
      { name: 'About.module.css', code: css },
      { name: 'About.tsx', code: tsx },
    ],
    docs: {
      description: {
        component: 'Figma: **About** · `hadButton` → `button`, the `media` slot → `image`.',
      },
    },
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutButton: Story = { args: { button: undefined } };

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };
