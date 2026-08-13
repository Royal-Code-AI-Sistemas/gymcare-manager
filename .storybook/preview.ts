import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i } },
    docs: { toc: true },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: '.dark',
      },
      defaultTheme: 'light',
    }),
  ],
}
export default preview
