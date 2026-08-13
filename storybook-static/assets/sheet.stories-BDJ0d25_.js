import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-YTE7C0JT.js";import{n as i,t as a}from"./button-BlnPWJm4.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./sheet-D5vHKaAH.js";import{n as m,t as h}from"./label-owO6eBIP.js";var g,_,v,y,b;function x(){return(x=e((()=>{i(),n(),m(),s(),g=t(),_={title:`UI/Sheet`,component:p},v={render:()=>(0,g.jsx)(`div`,{className:`p-8`,children:(0,g.jsxs)(p,{children:[(0,g.jsx)(f,{asChild:!0,children:(0,g.jsx)(a,{variant:`outline`,children:`Abrir painel`})}),(0,g.jsxs)(l,{side:`right`,children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(u,{children:`Novo aluno`}),(0,g.jsx)(d,{children:`Preencha as informações do novo aluno.`})]}),(0,g.jsxs)(`div`,{className:`grid gap-4 py-4`,children:[(0,g.jsxs)(`div`,{className:`grid gap-2`,children:[(0,g.jsx)(h,{htmlFor:`name`,children:`Nome completo`}),(0,g.jsx)(r,{id:`name`,placeholder:`João da Silva`})]}),(0,g.jsxs)(`div`,{className:`grid gap-2`,children:[(0,g.jsx)(h,{htmlFor:`email`,children:`E-mail`}),(0,g.jsx)(r,{id:`email`,placeholder:`joao@email.com`,type:`email`})]})]}),(0,g.jsx)(c,{children:(0,g.jsx)(a,{children:`Cadastrar`})})]})]})})},y={render:()=>(0,g.jsx)(`div`,{className:`p-8`,children:(0,g.jsxs)(p,{children:[(0,g.jsx)(f,{asChild:!0,children:(0,g.jsx)(a,{variant:`outline`,children:`Abrir painel à esquerda`})}),(0,g.jsxs)(l,{side:`left`,children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(u,{children:`Filtros`}),(0,g.jsx)(d,{children:`Ajuste os filtros da listagem.`})]}),(0,g.jsx)(`div`,{className:`grid gap-4 py-4`,children:(0,g.jsxs)(`div`,{className:`grid gap-2`,children:[(0,g.jsx)(h,{htmlFor:`status`,children:`Status`}),(0,g.jsx)(r,{id:`status`,placeholder:`Ativo, inativo...`})]})}),(0,g.jsx)(c,{children:(0,g.jsx)(a,{children:`Aplicar`})})]})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
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
}`,...y.parameters?.docs?.source}}},b=[`Right`,`Left`]})))()}x();export{y as Left,v as Right,b as __namedExportsOrder,_ as default};