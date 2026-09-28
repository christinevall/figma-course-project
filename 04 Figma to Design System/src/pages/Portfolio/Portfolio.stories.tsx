import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portfolio } from './Portfolio';
import pageTsx from './Portfolio.tsx?raw';
import contentTs from '../../content.ts?raw';

const meta = {
  title: 'Pages/Portfolio',
  component: Portfolio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    code: [
      { name: 'Portfolio.tsx', code: pageTsx },
      { name: 'content.ts', code: contentTs },
    ],
    docs: {
      description: {
        component: 'The whole page. No CSS of its own: only components, filled with the words and images from `content.ts`.',
      },
    },
  },
} satisfies Meta<typeof Portfolio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: 'lg' } } };

export const Tablet: Story = { globals: { viewport: { value: 'md' } } };

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };
