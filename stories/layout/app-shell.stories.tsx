import type { Meta, StoryObj } from '@storybook/react'
import {
  CreditCard,
  LayoutDashboard,
  Plus,
  Users,
} from 'lucide-react'
import { AppShell } from '../../src/layout/app-shell'
import { Topbar } from '../../src/layout/topbar'
import { StatCard } from '../../src/dashboard/stat-card'
import { StatusBadge } from '../../src/dashboard/status-badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../src/ui/card'
import { Button } from '../../src/ui/button'
import { Badge } from '../../src/ui/badge'

const meta = {
  title: 'Layout/AppShell',
  component: AppShell,
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AppShell
      groups={[
        {
          title: 'GERAL',
          items: [{ label: 'Dashboard', icon: LayoutDashboard, href: '#', active: true }],
        },
        {
          title: 'OPERAÇÃO',
          items: [
            { label: 'Alunos', icon: Users, href: '#' },
            { label: 'Planos', icon: CreditCard, href: '#', badge: '4' },
          ],
        },
      ]}
      brandTitle="GYMCARE"
      brandSubtitle="ACADEMY · PANEL"
      topbar={
        <Topbar
          crumb="Dashboard"
          saved="Salvo automaticamente"
          actions={
            <>
              <StatusBadge label="Sistema operacional" tone="success" dot />
              <Button size="sm">
                <Plus />
                Novo aluno
              </Button>
            </>
          }
        />
      }
    >
      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
        <StatCard
          title="Receita mensal"
          value="R$ 18.420"
          trend={{ value: '+12,5%', positive: true }}
          description="vs. mês anterior"
        />
        <StatCard
          title="Alunos ativos"
          value="128"
          trend={{ value: '+8,1%', positive: true }}
          description="vs. mês anterior"
        />
        <StatCard
          title="Inadimplência"
          value="6,2%"
          trend={{ value: '-1,3%', positive: true }}
          description="vs. mês anterior"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 pt-0 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Próximos vencimentos</CardTitle>
            <CardDescription>Pagamentos dos próximos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm font-medium">Ana Souza</span>
                <Badge variant="warning">Amanhã</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm font-medium">Bruno Lima</span>
                <Badge variant="secondary">Em 3 dias</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm font-medium">Carla Mendes</span>
                <Badge variant="secondary">Em 5 dias</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Alertas</CardTitle>
            <CardDescription>Ocorrências recentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <StatusBadge label="Equipamento 3 manutenção pendente" tone="warning" dot />
              <StatusBadge label="Pagamento atrasado: Diego Rocha" tone="error" dot />
              <StatusBadge label="Novo aluno cadastrado" tone="info" dot />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  ),
}
