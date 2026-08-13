import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from '../../src/dashboard/status-badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../src/ui/table'

const meta = {
  title: 'UI/Table',
  component: Table,
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const alunos = [
  { nome: 'Ana Souza', plano: 'Premium', status: 'success', valor: 'R$ 129,90' },
  { nome: 'Bruno Lima', plano: 'Standard', status: 'info', valor: 'R$ 89,90' },
  { nome: 'Carla Mendes', plano: 'Básico', status: 'warning', valor: 'R$ 59,90' },
  { nome: 'Diego Rocha', plano: 'Premium', status: 'error', valor: 'R$ 129,90' },
  { nome: 'Elisa Faria', plano: 'Standard', status: 'success', valor: 'R$ 89,90' },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Table>
        <TableCaption>Alunos matriculados na academia.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Plano</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Mensalidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alunos.map((aluno) => (
            <TableRow key={aluno.nome}>
              <TableCell className="font-medium">{aluno.nome}</TableCell>
              <TableCell>{aluno.plano}</TableCell>
              <TableCell>
                <StatusBadge
                  label={aluno.status === 'success' ? 'Ativo' : aluno.status === 'info' ? 'Novo' : aluno.status === 'warning' ? 'Pendente' : 'Atrasado'}
                  tone={aluno.status as never}
                  dot
                />
              </TableCell>
              <TableCell className="text-right">{aluno.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">R$ 499,50</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
}

export const Striped: Story = {
  render: () => (
    <div className="p-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Modalidade</TableHead>
            <TableHead>Instrutor</TableHead>
            <TableHead className="text-right">Alunos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { modalidade: 'Musculação', instrutor: 'Carlos', alunos: '45' },
            { modalidade: 'Pilates', instrutor: 'Marina', alunos: '12' },
            { modalidade: 'Funcional', instrutor: 'Rafael', alunos: '28' },
          ].map((item) => (
            <TableRow key={item.modalidade}>
              <TableCell className="font-medium">{item.modalidade}</TableCell>
              <TableCell>{item.instrutor}</TableCell>
              <TableCell className="text-right">{item.alunos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
