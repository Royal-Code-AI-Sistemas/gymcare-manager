import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from '../../src/dashboard/data-table'
import type { ColumnDef } from '../../src/dashboard/data-table'
import { StatusBadge } from '../../src/dashboard/status-badge'

type Aluno = {
  nome: string
  email: string
  plano: string
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  mensalidade: string
}

const alunos: Aluno[] = [
  { nome: 'Ana Souza', email: 'ana@email.com', plano: 'Premium', status: 'success', mensalidade: 'R$ 129,90' },
  { nome: 'Bruno Lima', email: 'bruno@email.com', plano: 'Standard', status: 'info', mensalidade: 'R$ 89,90' },
  { nome: 'Carla Mendes', email: 'carla@email.com', plano: 'Básico', status: 'warning', mensalidade: 'R$ 59,90' },
  { nome: 'Diego Rocha', email: 'diego@email.com', plano: 'Premium', status: 'error', mensalidade: 'R$ 129,90' },
  { nome: 'Elisa Faria', email: 'elisa@email.com', plano: 'Standard', status: 'success', mensalidade: 'R$ 89,90' },
  { nome: 'Felipe Nunes', email: 'felipe@email.com', plano: 'Básico', status: 'success', mensalidade: 'R$ 59,90' },
  { nome: 'Gabriela Reis', email: 'gabi@email.com', plano: 'Premium', status: 'info', mensalidade: 'R$ 129,90' },
  { nome: 'Heitor Alves', email: 'heitor@email.com', plano: 'Standard', status: 'neutral', mensalidade: 'R$ 89,90' },
  { nome: 'Isabela Cruz', email: 'isa@email.com', plano: 'Básico', status: 'warning', mensalidade: 'R$ 59,90' },
  { nome: 'João Pedro', email: 'joao@email.com', plano: 'Premium', status: 'success', mensalidade: 'R$ 129,90' },
  { nome: 'Karina Dias', email: 'karina@email.com', plano: 'Standard', status: 'success', mensalidade: 'R$ 89,90' },
  { nome: 'Lucas Melo', email: 'lucas@email.com', plano: 'Básico', status: 'error', mensalidade: 'R$ 59,90' },
  { nome: 'Mariana Teles', email: 'mari@email.com', plano: 'Premium', status: 'info', mensalidade: 'R$ 129,90' },
  { nome: 'Nicolas Paiva', email: 'nico@email.com', plano: 'Standard', status: 'neutral', mensalidade: 'R$ 89,90' },
  { nome: 'Olivia Braga', email: 'olivia@email.com', plano: 'Básico', status: 'success', mensalidade: 'R$ 59,90' },
]

const columns: ColumnDef<Aluno>[] = [
  { key: 'nome', header: 'Nome', accessor: (r) => <span className="font-medium">{r.nome}</span> },
  { key: 'email', header: 'E-mail' },
  { key: 'plano', header: 'Plano' },
  {
    key: 'status',
    header: 'Status',
    accessor: (r) => (
      <StatusBadge
        label={
          r.status === 'success'
            ? 'Ativo'
            : r.status === 'warning'
              ? 'Pendente'
              : r.status === 'error'
                ? 'Atrasado'
                : r.status === 'info'
                  ? 'Novo'
                  : 'Inativo'
        }
        tone={r.status}
        dot
      />
    ),
  },
  { key: 'mensalidade', header: 'Mensalidade', align: 'right' },
]

const meta = {
  title: 'Dashboard/DataTable',
  component: DataTable,
  args: {
    columns,
    data: alunos,
    searchable: true,
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <DataTable {...args} />
    </div>
  ),
}

export const Searchable: Story = {
  args: {
    searchable: true,
    searchPlaceholder: 'Buscar por nome ou e-mail...',
    searchKeys: ['nome', 'email'],
  },
  render: (args) => (
    <div className="p-8">
      <DataTable {...args} />
    </div>
  ),
}

export const WithPagination: Story = {
  args: {
    pageSize: 6,
  },
  render: (args) => (
    <div className="p-8">
      <DataTable {...args} />
    </div>
  ),
}

export const Empty: Story = {
  args: {
    data: [],
    searchable: false,
  },
  render: (args) => (
    <div className="p-8">
      <DataTable {...args} />
    </div>
  ),
}
