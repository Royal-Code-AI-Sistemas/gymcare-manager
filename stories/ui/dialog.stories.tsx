import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../src/ui/button'
import { Input } from '../../src/ui/input'
import { Label } from '../../src/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../src/ui/dialog'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Abrir diálogo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar plano</DialogTitle>
            <DialogDescription>
              Altere os dados do plano mensal.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome do plano</Label>
              <Input id="name" defaultValue="Premium" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Preço (R$)</Label>
              <Input id="price" defaultValue="129.90" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancelar</Button>
            <Button>Salvar alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}
