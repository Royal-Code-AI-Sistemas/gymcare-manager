import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./status-badge-DMjLxTOO.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Dashboard/StatusBadge`,component:r,args:{label:`Ativo`,tone:`success`}},o={args:{label:`Ativo`,tone:`success`}},s={render:e=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-4 p-8`,children:[(0,i.jsx)(r,{...e,label:`Success`,tone:`success`}),(0,i.jsx)(r,{...e,label:`Warning`,tone:`warning`}),(0,i.jsx)(r,{...e,label:`Error`,tone:`error`}),(0,i.jsx)(r,{...e,label:`Info`,tone:`info`}),(0,i.jsx)(r,{...e,label:`Neutral`,tone:`neutral`})]})},c={render:e=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-4 p-8`,children:[(0,i.jsx)(r,{...e,label:`Success`,tone:`success`,dot:!0}),(0,i.jsx)(r,{...e,label:`Warning`,tone:`warning`,dot:!0}),(0,i.jsx)(r,{...e,label:`Error`,tone:`error`,dot:!0}),(0,i.jsx)(r,{...e,label:`Info`,tone:`info`,dot:!0}),(0,i.jsx)(r,{...e,label:`Neutral`,tone:`neutral`,dot:!0})]})},l={render:e=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-4 p-8`,children:[(0,i.jsx)(r,{...e,label:`Em dia`,tone:`success`,dot:!0}),(0,i.jsx)(r,{...e,label:`Pendente`,tone:`warning`,dot:!0}),(0,i.jsx)(r,{...e,label:`Atrasado`,tone:`error`,dot:!0}),(0,i.jsx)(r,{...e,label:`Em análise`,tone:`info`,dot:!0}),(0,i.jsx)(r,{...e,label:`Inativo`,tone:`neutral`,dot:!0})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ativo',
    tone: 'success'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 p-8">
      <StatusBadge {...args} label="Success" tone="success" />
      <StatusBadge {...args} label="Warning" tone="warning" />
      <StatusBadge {...args} label="Error" tone="error" />
      <StatusBadge {...args} label="Info" tone="info" />
      <StatusBadge {...args} label="Neutral" tone="neutral" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 p-8">
      <StatusBadge {...args} label="Success" tone="success" dot />
      <StatusBadge {...args} label="Warning" tone="warning" dot />
      <StatusBadge {...args} label="Error" tone="error" dot />
      <StatusBadge {...args} label="Info" tone="info" dot />
      <StatusBadge {...args} label="Neutral" tone="neutral" dot />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 p-8">
      <StatusBadge {...args} label="Em dia" tone="success" dot />
      <StatusBadge {...args} label="Pendente" tone="warning" dot />
      <StatusBadge {...args} label="Atrasado" tone="error" dot />
      <StatusBadge {...args} label="Em análise" tone="info" dot />
      <StatusBadge {...args} label="Inativo" tone="neutral" dot />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Tones`,`WithDots`,`UseCases`]})))()}d();export{o as Default,s as Tones,l as UseCases,c as WithDots,u as __namedExportsOrder,a as default};