import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    config.plugins?.push(tailwindcss())
    return config
  },
}
export default config
