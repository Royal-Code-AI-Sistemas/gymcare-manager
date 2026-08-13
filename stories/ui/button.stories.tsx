import type { Meta, StoryObj } from '@storybook/react'
import { Plus } from 'lucide-react'
import { Button } from '../../src/ui/button'

const meta = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon" aria-label="Adicionar">
        <Plus />
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <Button {...args}>
        <Plus />
        Criar plano
      </Button>
      <Button {...args} variant="outline">
        <Plus />
        Adicionar aluno
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Desabilitado',
  },
}
