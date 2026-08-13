import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from '../../src/dashboard/status-badge'

const meta = {
  title: 'Dashboard/StatusBadge',
  component: StatusBadge,
  args: {
    label: 'Ativo',
    tone: 'success',
  },
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Ativo',
    tone: 'success',
  },
}

export const Tones: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <StatusBadge {...args} label="Success" tone="success" />
      <StatusBadge {...args} label="Warning" tone="warning" />
      <StatusBadge {...args} label="Error" tone="error" />
      <StatusBadge {...args} label="Info" tone="info" />
      <StatusBadge {...args} label="Neutral" tone="neutral" />
    </div>
  ),
}

export const WithDots: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <StatusBadge {...args} label="Success" tone="success" dot />
      <StatusBadge {...args} label="Warning" tone="warning" dot />
      <StatusBadge {...args} label="Error" tone="error" dot />
      <StatusBadge {...args} label="Info" tone="info" dot />
      <StatusBadge {...args} label="Neutral" tone="neutral" dot />
    </div>
  ),
}

export const UseCases: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 p-8">
      <StatusBadge {...args} label="Em dia" tone="success" dot />
      <StatusBadge {...args} label="Pendente" tone="warning" dot />
      <StatusBadge {...args} label="Atrasado" tone="error" dot />
      <StatusBadge {...args} label="Em análise" tone="info" dot />
      <StatusBadge {...args} label="Inativo" tone="neutral" dot />
    </div>
  ),
}
