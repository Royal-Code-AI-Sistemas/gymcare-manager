import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../../src/ui/badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <Badge {...args} variant="default">
        Default
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="destructive">
        Destructive
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
      <Badge {...args} variant="success">
        Success
      </Badge>
      <Badge {...args} variant="warning">
        Warning
      </Badge>
      <Badge {...args} variant="error">
        Error
      </Badge>
      <Badge {...args} variant="info">
        Info
      </Badge>
    </div>
  ),
}

export const UseCases: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <Badge {...args} variant="success">
        Ativo
      </Badge>
      <Badge {...args} variant="warning">
        Pendente
      </Badge>
      <Badge {...args} variant="destructive">
        Bloqueado
      </Badge>
      <Badge {...args} variant="info">
        Novo
      </Badge>
      <Badge {...args} variant="outline">
        Em revisão
      </Badge>
    </div>
  ),
}
