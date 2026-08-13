import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '../../src/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../src/ui/tooltip'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Adicionar novo aluno</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-2 p-8">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Adicionar">
              <Plus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Adicionar</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Excluir"
              className="text-red-600"
            >
              <Trash2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Excluir</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-16 p-8">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <TooltipProvider key={side} delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip no lado {side}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  ),
}
