import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./pagination-DqqeL4BN.js";var o,s,c,l,u,d,f,p;function m(){return(m=t((()=>{o=e(n(),1),i(),s=r(),c={title:`Dashboard/Pagination`,component:a},l={render:()=>{let[e,t]=o.useState(1);return(0,s.jsxs)(`div`,{className:`p-8`,children:[(0,s.jsx)(a,{page:e,totalPages:5,onChange:t}),(0,s.jsxs)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:[`Página atual: `,e]})]})}},u={render:()=>{let[e,t]=o.useState(1);return(0,s.jsxs)(`div`,{className:`p-8`,children:[(0,s.jsx)(a,{page:e,totalPages:12,onChange:t}),(0,s.jsxs)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:[`Página atual: `,e]})]})}},d={render:()=>{let[e,t]=o.useState(6);return(0,s.jsxs)(`div`,{className:`p-8`,children:[(0,s.jsx)(a,{page:e,totalPages:12,onChange:t}),(0,s.jsxs)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:[`Página atual: `,e]})]})}},f={render:()=>{let[e,t]=o.useState(1);return(0,s.jsxs)(`div`,{className:`p-8`,children:[(0,s.jsx)(a,{page:e,totalPages:1,onChange:t}),(0,s.jsx)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:`Com apenas uma página o componente não renderiza.`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    return <div className="p-8">
        <Pagination page={page} totalPages={5} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Página atual: {page}
        </p>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    return <div className="p-8">
        <Pagination page={page} totalPages={12} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Página atual: {page}
        </p>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(6);
    return <div className="p-8">
        <Pagination page={page} totalPages={12} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Página atual: {page}
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    return <div className="p-8">
        <Pagination page={page} totalPages={1} onChange={setPage} />
        <p className="mt-4 text-sm text-muted-foreground">
          Com apenas uma página o componente não renderiza.
        </p>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`ManyPages`,`MiddlePage`,`SinglePage`]})))()}m();export{l as Default,u as ManyPages,d as MiddlePage,f as SinglePage,p as __namedExportsOrder,c as default};