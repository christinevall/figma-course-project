import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    // remark-gfm lets the MDX pages use Markdown tables
    { name: '@storybook/addon-docs', options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } } },
    '@storybook/addon-a11y',
    // Storybook MCP: lets an AI agent ask Storybook which components exist (http://localhost:6010/mcp)
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  // The component list the Storybook MCP hands to the agent
  features: { componentsManifest: true },
  staticDirs: [
    '../public',
    // The token files, so the "Token files" page can link to them
    { from: '../figma', to: '/files/figma' },
    { from: '../src/tokens', to: '/files/tokens' },
  ],
};

export default config;
