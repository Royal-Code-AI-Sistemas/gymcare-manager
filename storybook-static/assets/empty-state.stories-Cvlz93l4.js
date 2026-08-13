import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-CKQsau6G.js";import{n as i,t as a}from"./empty-state-Bl7DeFYh.js";import{n as o,t as s}from"./user-BCWhvtkW.js";import{n as c,t as l}from"./button-BlnPWJm4.js";var u,d;function f(){return(f=e((()=>{n(),u=[[`path`,{d:`m13.5 8.5-5 5`,key:`1cs55j`}],[`path`,{d:`m8.5 8.5 5 5`,key:`a8mexj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`path`,{d:`m21 21-4.3-4.3`,key:`1qie3q`}]],d=r(`search-x`,u)})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{f(),o(),i(),c(),p=t(),m={title:`Dashboard/EmptyState`,component:a,args:{title:`Nenhum aluno encontrado`,description:`Ajuste a busca ou cadastre um novo aluno para começar.`}},h={render:e=>(0,p.jsx)(`div`,{className:`rounded-xl border p-8`,children:(0,p.jsx)(a,{...e})})},g={render:e=>(0,p.jsx)(`div`,{className:`rounded-xl border p-8`,children:(0,p.jsx)(a,{...e,action:(0,p.jsx)(l,{children:`Cadastrar aluno`})})})},_={render:e=>(0,p.jsx)(`div`,{className:`rounded-xl border p-8`,children:(0,p.jsx)(a,{...e,icon:d,title:`Nenhum resultado para a busca`,action:(0,p.jsx)(l,{variant:`outline`,children:`Limpar filtros`})})})},v={render:e=>(0,p.jsx)(`div`,{className:`rounded-xl border p-8`,children:(0,p.jsx)(a,{...e,icon:s,title:`Sem professores cadastrados`,description:`Adicione professores para montar a grade de aulas.`,action:(0,p.jsx)(l,{children:`Adicionar professor`})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rounded-xl border p-8">
      <EmptyState {...args} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rounded-xl border p-8">
      <EmptyState {...args} action={<Button>Cadastrar aluno</Button>} />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rounded-xl border p-8">
      <EmptyState {...args} icon={SearchX} title="Nenhum resultado para a busca" action={<Button variant="outline">Limpar filtros</Button>} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rounded-xl border p-8">
      <EmptyState {...args} icon={User} title="Sem professores cadastrados" description="Adicione professores para montar a grade de aulas." action={<Button>Adicionar professor</Button>} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithAction`,`WithCustomIcon`,`UsersExample`]})))()}b();export{h as Default,v as UsersExample,g as WithAction,_ as WithCustomIcon,y as __namedExportsOrder,m as default};