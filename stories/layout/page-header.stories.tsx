import type { Meta, StoryObj } from '@storybook/react'
import { Download, Plus } from 'lucide-react'
import { PageHeader } from '../../src/layout/page-header'
import { Button } from '../../src/ui/button'

const meta = {
  title: 'Layout/PageHeader',
  component: PageHeader,
  args: {
    title: 'Alunos',
    description: 'Gerencie os alunos matriculados na sua academia.',
  },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <PageHeader {...args} />
    </div>
  ),
}

export const WithBreadcrumbs: Story = {
  render: (args) => (
    <div className="p-8">
      <PageHeader
        {...args}
        breadcrumbs={[
          { label: 'Dashboard', href: '#' },
          { label: 'Alunos' },
        ]}
      />
    </div>
  ),
}

export const WithActions: Story = {
  render: (args) => (
    <div className="p-8">
      <PageHeader
        {...args}
        actions={
          <>
            <Button variant="outline">
              <Download />
              Exportar
            </Button>
            <Button>
              <Plus />
              Novo aluno
            </Button>
          </>
        }
      />
    </div>
  ),
}

export const Full: Story = {
  render: (args) => (
    <div className="p-8">
      <PageHeader
        {...args}
        breadcrumbs={[
          { label: 'Início', href: '#' },
          { label: 'Financeiro', href: '#' },
          { label: 'Mensalidades' },
        ]}
        actions={
          <>
            <Button variant="outline">
              <Download />
              Relatório
            </Button>
            <Button>
              <Plus />
              Registrar pagamento
            </Button>
          </>
        }
      />
    </div>
  ),
}
