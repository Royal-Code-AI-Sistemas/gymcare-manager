import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../src/ui/button'
import { Label } from '../../src/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../src/ui/select'

const meta = {
  title: 'UI/Select',
  component: Select,
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80 p-8">
      <Label htmlFor="plan">Plano</Label>
      <Select defaultValue="premium">
        <SelectTrigger id="plan" className="mt-2">
          <SelectValue placeholder="Selecione um plano" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="basic">Básico</SelectItem>
          <SelectItem value="standard">Standard</SelectItem>
          <SelectItem value="premium">Premium</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <div className="w-80 p-8">
      <Select defaultValue="musculacao">
        <SelectTrigger>
          <SelectValue placeholder="Selecione a modalidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="musculacao">Musculação</SelectItem>
          <SelectItem value="cardio">Cardio</SelectItem>
          <SelectItem value="funcional">Funcional</SelectItem>
          <SelectItem value="natacao">Natação</SelectItem>
          <SelectItem value="pilates">Pilates</SelectItem>
        </SelectContent>
      </Select>
      <div className="mt-4 flex gap-2">
        <Button variant="outline">Filtrar</Button>
      </div>
    </div>
  ),
}
