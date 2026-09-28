/* Foundations: the tokens, drawn from the live CSS variables.
   Switch the theme in the toolbar and the semantic colours change. */

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import tokensCss from '../tokens/tokens.css?raw';
import baseCss from '../base.css?raw';

const page: CSSProperties = { display: 'grid', gap: 32, fontFamily: 'var(--font-family-sans)', color: 'var(--color-text-default)' };
const heading: CSSProperties = { font: 'var(--text-headline-sm)', margin: '0 0 12px' };
const grid: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 };
const row: CSSProperties = { display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, alignItems: 'center', paddingBlock: 8, borderTop: '1px solid var(--color-border-default)' };

function Name({ figma, css }: { figma: string; css: string }) {
  return (
    <div style={{ fontSize: 13, lineHeight: 1.4, marginTop: 6 }}>
      {figma}
      <code style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: 12 }}>{css}</code>
    </div>
  );
}

function Swatch({ figma }: { figma: string }) {
  const css = `--color-${figma.replaceAll('/', '-')}`;
  return (
    <div>
      <div style={{ height: 64, borderRadius: 'var(--radius-md)', boxShadow: 'inset 0 0 0 1px var(--color-border-default)', background: `var(${css})` }} />
      <Name figma={figma} css={css} />
    </div>
  );
}

function Group({ title, names }: { title: string; names: string[] }) {
  return (
    <section>
      <h2 style={heading}>{title}</h2>
      <div style={grid}>
        {names.map((name) => (
          <Swatch key={name} figma={name} />
        ))}
      </div>
    </section>
  );
}

const Page = ({ children }: { children: ReactNode }) => <div style={page}>{children}</div>;

const meta = {
  title: 'Foundations/Tokens',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    code: [
      { name: 'tokens.css', code: tokensCss },
      { name: 'base.css', code: baseCss },
    ],
    docs: {
      description: {
        component: 'Every Figma variable and text style as a CSS custom property. Switch the theme in the toolbar to see the semantic colours change.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SemanticColors: Story = {
  name: 'Colors · semantic',
  render: () => (
    <Page>
      <Group title="Text" names={['text/default', 'text/muted', 'text/inverse', 'text/accent', 'text/disabled']} />
      <Group title="Surface" names={['surface/default', 'surface/raised', 'surface/inverse', 'surface/accent-subtle']} />
      <Group title="Border" names={['border/default', 'border/strong', 'border/accent', 'border/focus']} />
      <Group title="Action primary" names={['action/primary/default', 'action/primary/hover', 'action/primary/pressed', 'action/primary/disabled', 'action/primary/text']} />
      <Group title="Action secondary" names={['action/secondary/default', 'action/secondary/hover', 'action/secondary/pressed', 'action/secondary/text']} />
    </Page>
  ),
};

const steps = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

export const PrimitiveColors: Story = {
  name: 'Colors · primitives',
  render: () => (
    <Page>
      <Group title="Brand" names={steps.map((s) => `brand/${s}`)} />
      <Group title="Neutral" names={['000', ...steps, '999'].map((s) => `neutral/${s}`)} />
    </Page>
  ),
};

const textStyles: [figma: string, token: string, sample: string, extra?: CSSProperties][] = [
  ['font/display/md', 'display-md', 'UX. UI.', { textTransform: 'uppercase' }],
  ['font/headline/lg', 'headline-lg', 'About me'],
  ['font/headline/md', 'headline-md', 'Trail Journal'],
  ['font/headline/sm', 'headline-sm', 'Design systems'],
  ['font/caption/md', 'caption-md', 'Sam Taylor'],
  ['font/body/md/default', 'body-md', 'A basic understanding of HTML and CSS helps.'],
  ['font/body/md/strong', 'body-md-strong', 'A basic understanding of HTML and CSS helps.'],
  ['font/link/inline', 'link-inline', 'An inline link', { textDecoration: 'underline' }],
  ['font/link/md', 'link-md', 'find out more →'],
  ['font/button/md', 'button-md', 'Contact'],
  ['font/navigation/md', 'navigation-md', 'about.'],
];

export const Typography: Story = {
  render: () => (
    <Page>
      <section>
        <h2 style={heading}>Text styles · sizes change at 800px and 1280px</h2>
        {textStyles.map(([figma, token, sample, extra]) => (
          <div key={figma} style={row}>
            <Name figma={figma} css={`--text-${token}`} />
            <div style={{ font: `var(--text-${token})`, letterSpacing: `var(--text-${token}-tracking)`, ...extra }}>{sample}</div>
          </div>
        ))}
      </section>
    </Page>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Page>
      <section>
        <h2 style={heading}>Space primitives</h2>
        {steps.map((s) => (
          <div key={s} style={row}>
            <Name figma={`space/${s}`} css={`--space-${s}`} />
            <div style={{ height: 16, width: `var(--space-${s})`, background: 'var(--color-brand-500)', borderRadius: 2 }} />
          </div>
        ))}
        <div style={row}>
          <Name figma="radius/md" css="--radius-md" />
          <div style={{ height: 48, width: 96, borderRadius: 'var(--radius-md)', background: 'var(--color-action-primary-default)' }} />
        </div>
      </section>
    </Page>
  ),
};
