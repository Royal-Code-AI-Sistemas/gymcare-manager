import type { Meta, StoryObj } from '@storybook/react'
import {
  Activity,
  CreditCard,
  Dumbbell,
  TrendingUp,
  User,
  Users,
} from 'lucide-react'
import { StatCard } from '../../src/dashboard/stat-card'

const meta = {
  title: 'Dashboard/StatCard',
  component: StatCard,
  args: {
    title: 'Receita mensal',
    value: 'R$ 18.420',
  },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="grid max-w-4xl grid-cols-1 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Receita mensal"
        value="R$ 18.420"
        icon={CreditCard}
        trend={{ value: '+12,5%', positive: true }}
        description="vs. mês anterior"
      />
      <StatCard
        title="Alunos ativos"
        value="128"
        icon={Users}
        trend={{ value: '+8,1%', positive: true }}
        description="vs. mês anterior"
      />
      <StatCard
        title="Aulas hoje"
        value="34"
        icon={Activity}
        trend={{ value: '-2,4%', positive: false }}
        description="vs. dia anterior"
      />
      <StatCard
        title="Equipamentos"
        value="26"
        icon={Dumbbell}
        footer="3 em manutenção"
      />
    </div>
  ),
}

export const PositiveTrend: Story = {
  args: {
    icon: TrendingUp,
    trend: { value: '+12,5%', positive: true },
    description: 'vs. mês anterior',
  },
}

export const NegativeTrend: Story = {
  args: {
    icon: CreditCard,
    trend: { value: '-1,3%', positive: false },
    description: 'vs. mês anterior',
  },
}

export const WithFooter: Story = {
  args: {
    icon: User,
    footer: 'Atualizado há 5 minutos',
  },
}
