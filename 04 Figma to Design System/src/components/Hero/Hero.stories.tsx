import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hero } from './Hero';
import { content } from '../../content';
import css from './Hero.module.css?raw';
import tsx from './Hero.tsx?raw';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  args: content.hero,
  parameters: {
    layout: 'fullscreen',
    code: [
      { name: 'Hero.module.css', code: css },
      { name: 'Hero.tsx', code: tsx },
    ],
    docs: {
      description: {
        component: 'Figma: **Hero** · the headline uses the text style `font/display/md`, which is uppercase in Figma.',
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };
