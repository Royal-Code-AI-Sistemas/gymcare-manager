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
import type { NavItem } from '../../src/layout/sidebar'

const items: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '#', active: true },
  { label: 'Alunos', icon: Users, href: '#' },
  { label: 'Planos', icon: CreditCard, href: '#', badge: '4' },
  { label: 'Relatórios', icon: BarChart3, href: '#' },
  { label: 'Configurações', icon: Settings, href: '#' },
]

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  args: {
    items,
    header: <div className="px-4 py-4 text-lg font-bold">GymCare</div>,
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="h-screen w-64 border-r bg-background p-4">
      <Sidebar {...args} />
    </div>
  ),
}

export const WithFooter: Story = {
  render: (args) => (
    <div className="h-screen w-64 border-r bg-background p-4">
      <Sidebar
        {...args}
        footer={
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
    <div className="h-screen w-64 border-r bg-background p-4">
      <Sidebar
        {...args}
        items={[
          { label: 'Dashboard', icon: LayoutDashboard, href: '#', active: true },
          { label: 'Alunos', icon: Users, href: '#', badge: '128' },
          { label: 'Pendências', icon: BarChart3, href: '#', badge: '12' },
          { label: 'Configurações', icon: Settings, href: '#' },
        ]}
      />
    </div>
  ),
}
