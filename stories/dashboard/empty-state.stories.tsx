import type { Meta, StoryObj } from '@storybook/react'
import { SearchX, User } from 'lucide-react'
import { EmptyState } from '../../src/dashboard/empty-state'
import { Button } from '../../src/ui/button'

const meta = {
  title: 'Dashboard/EmptyState',
  component: EmptyState,
  args: {
    title: 'Nenhum aluno encontrado',
    description: 'Ajuste a busca ou cadastre um novo aluno para começar.',
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="rounded-xl border p-8">
      <EmptyState {...args} />
    </div>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <div className="rounded-xl border p-8">
      <EmptyState
        {...args}
        action={<Button>Cadastrar aluno</Button>}
      />
    </div>
  ),
}

export const WithCustomIcon: Story = {
  render: (args) => (
    <div className="rounded-xl border p-8">
      <EmptyState
        {...args}
        icon={SearchX}
        title="Nenhum resultado para a busca"
        action={<Button variant="outline">Limpar filtros</Button>}
      />
    </div>
  ),
}

export const UsersExample: Story = {
  render: (args) => (
    <div className="rounded-xl border p-8">
      <EmptyState
        {...args}
        icon={User}
        title="Sem professores cadastrados"
        description="Adicione professores para montar a grade de aulas."
        action={<Button>Adicionar professor</Button>}
      />
    </div>
  ),
}
