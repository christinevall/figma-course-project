import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { content } from '../../content';
import css from './Footer.module.css?raw';
import tsx from './Footer.tsx?raw';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: content.footer,
  parameters: {
    layout: 'fullscreen',
    code: [
      { name: 'Footer.module.css', code: css },
      { name: 'Footer.tsx', code: tsx },
    ],
    docs: { description: { component: 'Figma: **Footer** · one row from tablet up, stacked on mobile.' } },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };
