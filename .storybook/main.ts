import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config, { configType }) {
    // Only apply base path for GitHub Pages deployment
    // @ts-ignore
    if (configType === 'PRODUCTION' && typeof process !== 'undefined' && process.env.STORYBOOK_GHP_DEPLOY) {
      config.base = '/eureka-ui/';
    }
    return config;
  },
};

export default config;