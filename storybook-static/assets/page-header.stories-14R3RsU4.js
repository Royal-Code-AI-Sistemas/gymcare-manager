import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./createLucideIcon-CKQsau6G.js";import{n as o,t as s}from"./plus-Cbf0BrW0.js";import{n as c,t as l}from"./utils-Dm4OyE3Q.js";import{n as u,t as d}from"./button-BlnPWJm4.js";var f,p;function m(){return(m=t((()=>{i(),f=[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]],p=a(`download`,f)})))()}function h({title:e,description:t,actions:n,breadcrumbs:r,className:i}){return(0,_.jsxs)(`div`,{className:l(`flex flex-col gap-2`,i),children:[r&&r.length>0?(0,_.jsx)(`nav`,{className:`flex items-center gap-1 text-sm text-muted-foreground`,children:r.map((e,t)=>{let n=t===r.length-1;return(0,_.jsxs)(g.Fragment,{children:[t>0?(0,_.jsx)(`span`,{children:`/`}):null,e.href&&!n?(0,_.jsx)(`a`,{href:e.href,className:`transition-colors hover:text-foreground`,children:e.label}):(0,_.jsx)(`span`,{className:n?`font-medium text-foreground`:void 0,children:e.label})]},e.label)})}):null,(0,_.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h1`,{className:`text-2xl font-bold tracking-tight`,children:e}),t?(0,_.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:t}):null]}),n?(0,_.jsx)(`div`,{className:`flex items-center gap-2`,children:n}):null]})]})}var g,_;function v(){return(v=t((()=>{g=e(n(),1),c(),_=r(),h.__docgenInfo={description:``,methods:[],displayName:`PageHeader`,props:{title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},breadcrumbs:{required:!1,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var y,b,x,S,C,w,T;function E(){return(E=t((()=>{m(),o(),v(),u(),y=r(),b={title:`Layout/PageHeader`,component:h,args:{title:`Alunos`,description:`Gerencie os alunos matriculados na sua academia.`}},x={render:e=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(h,{...e})})},S={render:e=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(h,{...e,breadcrumbs:[{label:`Dashboard`,href:`#`},{label:`Alunos`}]})})},C={render:e=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(h,{...e,actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d,{variant:`outline`,children:[(0,y.jsx)(p,{}),`Exportar`]}),(0,y.jsxs)(d,{children:[(0,y.jsx)(s,{}),`Novo aluno`]})]})})})},w={render:e=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsx)(h,{...e,breadcrumbs:[{label:`Início`,href:`#`},{label:`Financeiro`,href:`#`},{label:`Mensalidades`}],actions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d,{variant:`outline`,children:[(0,y.jsx)(p,{}),`Relatório`]}),(0,y.jsxs)(d,{children:[(0,y.jsx)(s,{}),`Registrar pagamento`]})]})})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <PageHeader {...args} />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <PageHeader {...args} breadcrumbs={[{
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'Alunos'
    }]} />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <PageHeader {...args} actions={<>
            <Button variant="outline">
              <Download />
              Exportar
            </Button>
            <Button>
              <Plus />
              Novo aluno
            </Button>
          </>} />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <PageHeader {...args} breadcrumbs={[{
      label: 'Início',
      href: '#'
    }, {
      label: 'Financeiro',
      href: '#'
    }, {
      label: 'Mensalidades'
    }]} actions={<>
            <Button variant="outline">
              <Download />
              Relatório
            </Button>
            <Button>
              <Plus />
              Registrar pagamento
            </Button>
          </>} />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithBreadcrumbs`,`WithActions`,`Full`]})))()}E();export{x as Default,w as Full,C as WithActions,S as WithBreadcrumbs,T as __namedExportsOrder,b as default};