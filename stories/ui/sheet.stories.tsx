import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../src/ui/button'
import { Input } from '../../src/ui/input'
import { Label } from '../../src/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../src/ui/sheet'

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Right: Story = {
  render: () => (
    <div className="p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Abrir painel</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Novo aluno</SheetTitle>
            <SheetDescription>
              Preencha as informações do novo aluno.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="João da Silva" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="joao@email.com" type="email" />
            </div>
          </div>
          <SheetFooter>
            <Button>Cadastrar</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const Left: Story = {
  render: () => (
    <div className="p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Abrir painel à esquerda</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
            <SheetDescription>Ajuste os filtros da listagem.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Input id="status" placeholder="Ativo, inativo..." />
            </div>
          </div>
          <SheetFooter>
            <Button>Aplicar</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
}
