import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';
import css from './Logo.module.css?raw';
import tsx from './Logo.tsx?raw';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: { href: '#top', label: 'Home' },
  parameters: {
    code: [
      { name: 'Logo.module.css', code: css },
      { name: 'Logo.tsx', code: tsx },
    ],
    docs: { description: { component: 'Figma: **Logo** · colour `text/accent`.' } },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
