import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillItem } from './SkillItem';
import { content } from '../../content';
import css from './SkillItem.module.css?raw';
import tsx from './SkillItem.tsx?raw';

const meta = {
  title: 'Components/SkillItem',
  component: SkillItem,
  tags: ['autodocs'],
  args: content.skills.items[0],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 368 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    code: [
      { name: 'SkillItem.module.css', code: css },
      { name: 'SkillItem.tsx', code: tsx },
    ],
    docs: { description: { component: 'Figma: **SkillItem** · used three times inside **Skills**.' } },
  },
} satisfies Meta<typeof SkillItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
