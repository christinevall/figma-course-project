import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuToggle } from './MenuToggle';
import css from './MenuToggle.module.css?raw';
import tsx from './MenuToggle.tsx?raw';

const meta = {
  title: 'Components/MenuToggle',
  component: MenuToggle,
  tags: ['autodocs'],
  args: { open: false },
  parameters: {
    code: [
      { name: 'MenuToggle.module.css', code: css },
      { name: 'MenuToggle.tsx', code: tsx },
    ],
    docs: {
      description: {
        component: 'Figma: **Menu** (`Property 1 = close | open`). In code the variant is `open`, read out as `aria-expanded`.',
      },
    },
  },
} satisfies Meta<typeof MenuToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};

export const Open: Story = { args: { open: true } };
