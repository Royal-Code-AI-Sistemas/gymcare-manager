import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Pagination } from '../../src/dashboard/pagination'

const meta = {
  title: 'Dashboard/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1)
    return (
      <div className="p-8">
        <Pagination page={page} totalPages={5} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Página atual: {page}
        </p>
      </div>
    )
  },
}

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(1)
    return (
      <div className="p-8">
        <Pagination page={page} totalPages={12} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Página atual: {page}
        </p>
      </div>
    )
  },
}

export const MiddlePage: Story = {
  render: () => {
    const [page, setPage] = React.useState(6)
    return (
      <div className="p-8">
        <Pagination page={page} totalPages={12} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Página atual: {page}
        </p>
      </div>
    )
  },
}

export const SinglePage: Story = {
  render: () => {
    const [page, setPage] = React.useState(1)
    return (
      <div className="p-8">
        <Pagination page={page} totalPages={1} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Com apenas uma página o componente não renderiza.
        </p>
      </div>
    )
  },
}
