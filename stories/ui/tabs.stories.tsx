import type { Meta, StoryObj } from '@storybook/react'
import { Dumbbell, HeartPulse, Users } from 'lucide-react'
import { Badge } from '../../src/ui/badge'
import { Button } from '../../src/ui/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../src/ui/tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Tabs defaultValue="musculacao">
        <TabsList>
          <TabsTrigger value="musculacao">Musculação</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="grupo">Aulas em grupo</TabsTrigger>
        </TabsList>
        <TabsContent value="musculacao">
          <div className="flex items-center gap-2 rounded-md border p-4">
            <Dumbbell className="size-4 text-muted-foreground" />
            <p className="text-sm">
              Treino de força com acompanhamento de cargas e séries.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="cardio">
          <div className="flex items-center gap-2 rounded-md border p-4">
            <HeartPulse className="size-4 text-muted-foreground" />
            <p className="text-sm">
              Esteira, bike e elíptico com métricas de batimentos.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="grupo">
          <div className="flex items-center gap-2 rounded-md border p-4">
            <Users className="size-4 text-muted-foreground" />
            <p className="text-sm">Aulas coletivas com horários fixos.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className="p-8">
      <Tabs defaultValue="alunos">
        <TabsList>
          <TabsTrigger value="alunos">
            Alunos
            <Badge variant="secondary">128</Badge>
          </TabsTrigger>
          <TabsTrigger value="planos">
            Planos
            <Badge variant="secondary">4</Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="alunos">
          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Lista de alunos</p>
              <Button size="sm" variant="outline">
                Ver todos
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="planos">
          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Planos ativos</p>
              <Button size="sm" variant="outline">
                Gerenciar
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}
