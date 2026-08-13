import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../src/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../src/ui/card'

const meta = {
  title: 'UI/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>Novo plano mensal</CardTitle>
          <CardDescription>
            Configure as regras do plano de assinatura.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Conteúdo do card com qualquer tipo de informação.</p>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="ghost">Cancelar</Button>
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Musculação</CardTitle>
          <CardDescription>Treino de força</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Acompanhe séries, repetições e cargas.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cardio</CardTitle>
          <CardDescription>Esteira e bike</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Acompanhe tempo, distância e batimentos.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Funcional</CardTitle>
          <CardDescription>Treino em grupo</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Aulas coletivas com horários fixos.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}
