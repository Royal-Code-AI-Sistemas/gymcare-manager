import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./search-BcmXptSh.js";import{n as i,t as a}from"./input-YTE7C0JT.js";import{n as o,t as s}from"./label-owO6eBIP.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),o(),c=t(),l={title:`UI/Input`,component:a,args:{placeholder:`Digite algo...`}},u={args:{placeholder:`Digite seu e-mail`}},d={args:{placeholder:`Ex.: João Silva`}},f={args:{placeholder:`Campo desabilitado`,disabled:!0}},p={render:e=>(0,c.jsxs)(`div`,{className:`flex w-80 flex-col gap-2 p-8`,children:[(0,c.jsx)(s,{htmlFor:`email`,children:`E-mail`}),(0,c.jsx)(a,{id:`email`,...e,placeholder:`voce@email.com`,type:`email`})]})},m={render:e=>(0,c.jsxs)(`div`,{className:`relative w-80 p-8`,children:[(0,c.jsx)(r,{className:`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground`}),(0,c.jsx)(a,{...e,placeholder:`Buscar alunos...`,className:`pl-9`})]})},h={render:e=>(0,c.jsxs)(`div`,{className:`flex w-80 flex-col gap-4 p-8`,children:[(0,c.jsx)(a,{...e,type:`email`,placeholder:`email@exemplo.com`}),(0,c.jsx)(a,{...e,type:`password`,placeholder:`Senha`}),(0,c.jsx)(a,{...e,type:`date`}),(0,c.jsx)(a,{...e,type:`number`,placeholder:`Idade`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Digite seu e-mail'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ex.: João Silva'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-80 flex-col gap-2 p-8">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" {...args} placeholder="voce@email.com" type="email" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="relative w-80 p-8">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input {...args} placeholder="Buscar alunos..." className="pl-9" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-80 flex-col gap-4 p-8">
      <Input {...args} type="email" placeholder="email@exemplo.com" />
      <Input {...args} type="password" placeholder="Senha" />
      <Input {...args} type="date" />
      <Input {...args} type="number" placeholder="Idade" />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithPlaceholder`,`Disabled`,`WithLabel`,`WithSearchIcon`,`Types`]})))()}_();export{u as Default,f as Disabled,h as Types,p as WithLabel,d as WithPlaceholder,m as WithSearchIcon,g as __namedExportsOrder,l as default};