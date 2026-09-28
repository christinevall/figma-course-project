import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import css from './Button.module.css?raw';
import tsx from './Button.tsx?raw';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { label: 'Label', variant: 'primary' },
  argTypes: {
    variant: { control: 'inline-radio' },
    state: { control: 'inline-radio' },
  },
  parameters: {
    code: [
      { name: 'Button.module.css', code: css },
      { name: 'Button.tsx', code: tsx },
    ],
    docs: {
      description: {
        component: 'Figma: **Button** · 2 variants × 4 states = 8 Figma variants, one component in code.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: 'secondary' } };

/** The same grid as the Figma component set: variants across, states down. */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '24px 48px' }}>
      {(['default', 'hover', 'active', 'focused'] as const).map((state) =>
        (['primary', 'secondary'] as const).map((variant) => (
          <Button key={`${variant}-${state}`} label="Label" variant={variant} state={state} />
        )),
      )}
    </div>
  ),
};
