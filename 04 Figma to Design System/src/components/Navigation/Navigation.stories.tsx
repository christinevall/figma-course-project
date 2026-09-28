import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navigation } from './Navigation';
import { content } from '../../content';
import css from './Navigation.module.css?raw';
import tsx from './Navigation.tsx?raw';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  args: content.navigation,
  parameters: {
    layout: 'fullscreen',
    code: [
      { name: 'Navigation.module.css', code: css },
      { name: 'Navigation.tsx', code: tsx },
    ],
    docs: {
      description: {
        component:
          'Figma: **Navigation** · 3 breakpoint variants, one component in code. Resize, or pick a viewport in the toolbar.',
      },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: 'lg' } } };

export const Tablet: Story = { globals: { viewport: { value: 'md' } } };

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };

/** Not designed in Figma: the open mobile menu. */
export const MobileOpen: Story = { args: { defaultOpen: true }, globals: { viewport: { value: 'sm' } } };
