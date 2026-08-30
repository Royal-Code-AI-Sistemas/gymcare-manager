# @gymcare/ui

Design system de painéis web da Gymcare. Padroniza a UI de todos os painéis administrativos da empresa em uma única lib React + Tailwind CSS.

## Storybook

Documentação visual de todos os componentes:

- **https://royal-code-ai-sistemas.github.io/gymcare-manager/**

Local: `npm run storybook` (abre em http://localhost:6006)

## Instalação

Dependência via git:

```json
"@gymcare/ui": "git+ssh://git@github.com/Royal-Code-AI-Sistemas/gymcare-manager.git#v1.2.0"
```

```bash
npm install
```

## Uso

```tsx
import '@gymcare/ui/styles.css'
import { AppShell, Topbar, StatCard, type NavGroup } from '@gymcare/ui'

const groups: NavGroup[] = [
  { title: 'GERAL', items: [{ label: 'Início', href: '/', active: true }] },
  { title: 'OPERAÇÃO', items: [{ label: 'Alunos', href: '/alunos' }] },
]

export function Dashboard() {
  return (
    <AppShell
      groups={groups}
      brandTitle="GYMCARE"
      brandSubtitle="ACADEMY · PANEL"
      topbar={<Topbar crumb="Início" />}
    >
      <StatCard title="Receita" value="R$ 45.200" />
    </AppShell>
  )
}
```

## Dark mode

A lib já vem com o tema escuro. Para ativar, adicione a classe `.dark` no `<html>` (ou o
atributo `[data-theme='dark']`, padrão dos layouts do Academy):

```html
<html class="dark">
```

## Componentes

- **UI**: Button, Badge, Card, Input, Dialog, Sheet, DropdownMenu, Select, Tabs, Table, Tooltip, Alert, Label, Separator, Skeleton
- **Layout**: AppShell, Sidebar, Topbar, PageHeader
- **Dashboard**: StatCard, StatusBadge, DataTable, Pagination, EmptyState

## Desenvolvimento

```bash
npm install
npm run storybook    # dev com hot reload
npm run build        # gera dist/ (JS + tipos + styles.css)
npm run typecheck
```

## Publicação

O `dist/` é commitado no repositório — os consumidores instalam a versão via tag git (ex.: `#v1.4.0`). O Storybook é publicado automaticamente no GitHub Pages a cada push na `main` (workflow em `.github/workflows/storybook.yml`).

### Política de versionamento

**Versões sobem DEVAGAR, em degraus pequenos (patch).** Cada mudança na lib incrementa o patch
da versão atual (1.4.0 → 1.4.1 → 1.4.2 → …) — não pular para minor/major sem decisão explícita.
A próxima versão a publicar é **1.4.2**.
