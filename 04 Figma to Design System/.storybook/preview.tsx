import type { Preview } from '@storybook/react-vite';
import '../src/tokens/tokens.css';
import '../src/base.css';
import { DocsPage } from './docs-page';

const preview: Preview = {
  // Toolbar switch for the Figma color modes "light" and "dark"
  globalTypes: {
    theme: {
      description: 'Color mode (Figma collection "color")',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },

  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme;
      return <Story />;
    },
  ],

  parameters: {
    // Docs page with a folded "Code" section (see docs-page.tsx)
    docs: { page: DocsPage },
    // The three Figma frame sizes
    viewport: {
      options: {
        sm: { name: 'Mobile · 375', styles: { width: '375px', height: '812px' }, type: 'mobile' },
        md: { name: 'Tablet · 800', styles: { width: '800px', height: '1024px' }, type: 'tablet' },
        lg: { name: 'Desktop · 1280', styles: { width: '1280px', height: '900px' }, type: 'desktop' },
      },
    },
    controls: { expanded: true },
    options: {
      storySort: { order: ['Introduction', 'Foundations', ['Tokens', 'Token files'], 'Components', 'Pages'] },
    },
  },
};

export default preview;
