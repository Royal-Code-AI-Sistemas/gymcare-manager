import type { Meta, StoryObj } from '@storybook/react'
import { Search } from 'lucide-react'
import { Input } from '../../src/ui/input'
import { Label } from '../../src/ui/label'

const meta = {
  title: 'UI/Input',
  component: Input,
  args: {
    placeholder: 'Digite algo...',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite seu e-mail',
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Ex.: João Silva',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex w-80 flex-col gap-2 p-8">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" {...args} placeholder="voce@email.com" type="email" />
    </div>
  ),
}

export const WithSearchIcon: Story = {
  render: (args) => (
    <div className="relative w-80 p-8">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input {...args} placeholder="Buscar alunos..." className="pl-9" />
    </div>
  ),
}

export const Types: Story = {
  render: (args) => (
    <div className="flex w-80 flex-col gap-4 p-8">
      <Input {...args} type="email" placeholder="email@exemplo.com" />
      <Input {...args} type="password" placeholder="Senha" />
      <Input {...args} type="date" />
      <Input {...args} type="number" placeholder="Idade" />
    </div>
  ),
}
