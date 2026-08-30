import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from 'lucide-react'
import { Sidebar } from '../../src/layout/sidebar'
import type { NavGroup } from '../../src/layout/sidebar'

const groups: NavGroup[] = [
  {
    title: 'GERAL',
    items: [{ label: 'Dashboard', icon: LayoutDashboard, href: '#', active: true }],
  },
  {
    title: 'OPERAÇÃO',
    items: [
      { label: 'Alunos', icon: Users, href: '#' },
      { label: 'Planos', icon: CreditCard, href: '#', badge: '4' },
      { label: 'Relatórios', icon: BarChart3, href: '#' },
      { label: 'Configurações', icon: Settings, href: '#' },
    ],
  },
]

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  args: {
    groups,
    brandTitle: 'GYMCARE',
    brandSubtitle: 'ACADEMY · PANEL',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="h-screen w-[252px]">
      <Sidebar {...args} />
    </div>
  ),
}

export const WithFooter: Story = {
  render: (args) => (
    <div className="h-screen w-[252px]">
      <Sidebar
        {...args}
        footer={
          <div className="flex items-center gap-2.5 border-t border-[#1C1C1C] px-5 py-4 text-sm text-[#8A9096]">
            <LogOut className="size-4" />
            Sair
          </div>
        }
      />
    </div>
  ),
}

export const WithBadges: Story = {
  render: (args) => (
    <div className="h-screen w-[252px]">
      <Sidebar
        {...args}
        groups={[
          {
            title: 'GERAL',
            items: [{ label: 'Dashboard', icon: LayoutDashboard, href: '#', active: true }],
          },
          {
            title: 'OPERAÇÃO',
            items: [
              { label: 'Alunos', icon: Users, href: '#', badge: '128' },
              { label: 'Pendências', icon: BarChart3, href: '#', badge: '12' },
              { label: 'Configurações', icon: Settings, href: '#' },
            ],
          },
        ]}
      />
    </div>
  ),
}
