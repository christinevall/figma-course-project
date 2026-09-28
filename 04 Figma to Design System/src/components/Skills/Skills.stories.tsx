import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skills } from './Skills';
import { content } from '../../content';
import css from './Skills.module.css?raw';
import tsx from './Skills.tsx?raw';

const meta = {
  title: 'Components/Skills',
  component: Skills,
  tags: ['autodocs'],
  args: content.skills,
  parameters: {
    layout: 'fullscreen',
    code: [
      { name: 'Skills.module.css', code: css },
      { name: 'Skills.tsx', code: tsx },
    ],
    docs: { description: { component: 'Figma: **Skills** · three **SkillItem**s in a row, stacked on mobile.' } },
  },
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };
