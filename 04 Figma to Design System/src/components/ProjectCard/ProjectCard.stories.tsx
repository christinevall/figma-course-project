import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectCard } from './ProjectCard';
import { content } from '../../content';
import css from './ProjectCard.module.css?raw';
import tsx from './ProjectCard.tsx?raw';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  args: { ...content.projects[0], hasBackground: false },
  parameters: {
    layout: 'fullscreen',
    code: [
      { name: 'ProjectCard.module.css', code: css },
      { name: 'ProjectCard.tsx', code: tsx },
    ],
    docs: {
      description: {
        component:
          'Figma: **ProjectCard** · `hasBG` → `hasBackground`, the `media` slot → `image`. 3 breakpoint variants, one component in code.',
      },
    },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackground: Story = { args: { ...content.projects[1], hasBackground: true } };

export const Mobile: Story = { globals: { viewport: { value: 'sm' } } };
