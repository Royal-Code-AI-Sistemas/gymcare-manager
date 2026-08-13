import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./createLucideIcon-CKQsau6G.js";import{n as o,t as s}from"./dumbbell-BuwotsQf.js";import{n as c,t as l}from"./users-DciDZrSY.js";import{n as u,t as d}from"./utils-Dm4OyE3Q.js";import{n as f,t as p}from"./button-BlnPWJm4.js";import{a as ee,c as te,d as ne,f as re,m as ie,n as ae,o as oe,p as m,s as se,t as ce}from"./dist-CPtxCGnd.js";import{r as le,t as h}from"./dist-6Netwq24.js";import{n as ue,t as g}from"./badge-r1NnvJBE.js";import{n as de,t as fe}from"./dist-aY7jzsDM.js";import{i as pe,n as me,r as _,t as he}from"./dist-B2O4BGP6.js";var v,y;function b(){return(b=t((()=>{i(),v=[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]],y=a(`heart-pulse`,v)})))()}function x(e,t){return`${e}-trigger-${t}`}function S(e,t){return`${e}-content-${t}`}var C,w,T,E,D,O,ge,k,A,j,M,N,_e,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{C=e(n(),1),ie(),re(),pe(),ae(),le(),fe(),ee(),se(),w=r(),T=Object.defineProperty,E=(e,t)=>T(e,`name`,{value:t,configurable:!0}),D=`Tabs`,[O,ge]=ne(D,[_]),k=_(),[A,j]=O(D),M=C.forwardRef(E(function(e,t){let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o=`horizontal`,dir:s,activationMode:c=`automatic`,...l}=e,u=de(s),[d,f]=oe({prop:r,onChange:i,defaultProp:a??``,caller:D});return(0,w.jsx)(A,{scope:n,baseId:te(),value:d,onValueChange:f,orientation:o,dir:u,activationMode:c,children:(0,w.jsx)(h.div,{dir:u,"data-orientation":o,...l,ref:t})})},`Tabs`)),N=`TabsList`,_e=C.forwardRef(E(function(e,t){let{__scopeTabs:n,loop:r=!0,...i}=e,a=j(N,n),o=k(n);return(0,w.jsx)(me,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,w.jsx)(h.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})},`TabsList`)),P=`TabsTrigger`,F=C.forwardRef(E(function(e,t){let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=j(P,n),s=k(n),c=x(o.baseId,r),l=S(o.baseId,r),u=r===o.value;return(0,w.jsx)(he,{asChild:!0,...s,focusable:!i,active:u,children:(0,w.jsx)(h.button,{type:`button`,role:`tab`,"aria-selected":u,"aria-controls":l,"data-state":u?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:c,...a,ref:t,onMouseDown:m(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?o.onValueChange(r):e.preventDefault()}),onKeyDown:m(e.onKeyDown,e=>{i||e.target!==e.currentTarget||[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:m(e.onFocus,()=>{let e=o.activationMode!==`manual`;!u&&!i&&e&&o.onValueChange(r)})})})},`TabsTrigger`)),I=`TabsContent`,L=C.forwardRef(E(function(e,t){let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,s=j(I,n),c=x(s.baseId,r),l=S(s.baseId,r),u=r===s.value,d=C.useRef(u);return C.useEffect(()=>{let e=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,w.jsx)(ce,{present:i||u,children:({present:n})=>(0,w.jsx)(h.div,{"data-state":u?`active`:`inactive`,"data-orientation":s.orientation,role:`tabpanel`,"aria-labelledby":c,hidden:!n,id:l,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:d.current?`0s`:void 0},children:n&&a})})},`TabsContent`)),E(x,`makeTriggerId`),E(S,`makeContentId`),R=M,z=_e,B=F,V=L})))()}var U,W,G,K,q,J;function Y(){return(Y=t((()=>{U=e(n(),1),H(),u(),W=r(),G=R,K=U.forwardRef(({className:e,...t},n)=>(0,W.jsx)(z,{ref:n,className:d(`inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground`,e),...t})),K.displayName=z.displayName,q=U.forwardRef(({className:e,...t},n)=>(0,W.jsx)(B,{ref:n,className:d(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,e),...t})),q.displayName=B.displayName,J=U.forwardRef(({className:e,...t},n)=>(0,W.jsx)(V,{ref:n,className:d(`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,e),...t})),J.displayName=V.displayName,K.__docgenInfo={description:``,methods:[]},q.__docgenInfo={description:``,methods:[]},J.__docgenInfo={description:``,methods:[]}})))()}var X,Z,Q,$,ve;function ye(){return(ye=t((()=>{o(),b(),c(),ue(),f(),Y(),X=r(),Z={title:`UI/Tabs`,component:G},Q={render:()=>(0,X.jsx)(`div`,{className:`p-8`,children:(0,X.jsxs)(G,{defaultValue:`musculacao`,children:[(0,X.jsxs)(K,{children:[(0,X.jsx)(q,{value:`musculacao`,children:`Musculação`}),(0,X.jsx)(q,{value:`cardio`,children:`Cardio`}),(0,X.jsx)(q,{value:`grupo`,children:`Aulas em grupo`})]}),(0,X.jsx)(J,{value:`musculacao`,children:(0,X.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border p-4`,children:[(0,X.jsx)(s,{className:`size-4 text-muted-foreground`}),(0,X.jsx)(`p`,{className:`text-sm`,children:`Treino de força com acompanhamento de cargas e séries.`})]})}),(0,X.jsx)(J,{value:`cardio`,children:(0,X.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border p-4`,children:[(0,X.jsx)(y,{className:`size-4 text-muted-foreground`}),(0,X.jsx)(`p`,{className:`text-sm`,children:`Esteira, bike e elíptico com métricas de batimentos.`})]})}),(0,X.jsx)(J,{value:`grupo`,children:(0,X.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border p-4`,children:[(0,X.jsx)(l,{className:`size-4 text-muted-foreground`}),(0,X.jsx)(`p`,{className:`text-sm`,children:`Aulas coletivas com horários fixos.`})]})})]})})},$={render:()=>(0,X.jsx)(`div`,{className:`p-8`,children:(0,X.jsxs)(G,{defaultValue:`alunos`,children:[(0,X.jsxs)(K,{children:[(0,X.jsxs)(q,{value:`alunos`,children:[`Alunos`,(0,X.jsx)(g,{variant:`secondary`,children:`128`})]}),(0,X.jsxs)(q,{value:`planos`,children:[`Planos`,(0,X.jsx)(g,{variant:`secondary`,children:`4`})]})]}),(0,X.jsx)(J,{value:`alunos`,children:(0,X.jsx)(`div`,{className:`rounded-md border p-4`,children:(0,X.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,X.jsx)(`p`,{className:`text-sm font-medium`,children:`Lista de alunos`}),(0,X.jsx)(p,{size:`sm`,variant:`outline`,children:`Ver todos`})]})})}),(0,X.jsx)(J,{value:`planos`,children:(0,X.jsx)(`div`,{className:`rounded-md border p-4`,children:(0,X.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,X.jsx)(`p`,{className:`text-sm font-medium`,children:`Planos ativos`}),(0,X.jsx)(p,{size:`sm`,variant:`outline`,children:`Gerenciar`})]})})})]})})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <Tabs defaultValue="musculacao">
        <TabsList>
          <TabsTrigger value="musculacao">Musculação</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="grupo">Aulas em grupo</TabsTrigger>
        </TabsList>
        <TabsContent value="musculacao">
          <div className="flex items-center gap-2 rounded-md border p-4">
            <Dumbbell className="size-4 text-muted-foreground" />
            <p className="text-sm">
              Treino de força com acompanhamento de cargas e séries.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="cardio">
          <div className="flex items-center gap-2 rounded-md border p-4">
            <HeartPulse className="size-4 text-muted-foreground" />
            <p className="text-sm">
              Esteira, bike e elíptico com métricas de batimentos.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="grupo">
          <div className="flex items-center gap-2 rounded-md border p-4">
            <Users className="size-4 text-muted-foreground" />
            <p className="text-sm">Aulas coletivas com horários fixos.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <Tabs defaultValue="alunos">
        <TabsList>
          <TabsTrigger value="alunos">
            Alunos
            <Badge variant="secondary">128</Badge>
          </TabsTrigger>
          <TabsTrigger value="planos">
            Planos
            <Badge variant="secondary">4</Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="alunos">
          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Lista de alunos</p>
              <Button size="sm" variant="outline">
                Ver todos
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="planos">
          <div className="rounded-md border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Planos ativos</p>
              <Button size="sm" variant="outline">
                Gerenciar
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
}`,...$.parameters?.docs?.source}}},ve=[`Default`,`WithBadge`]})))()}ye();export{Q as Default,$ as WithBadge,ve as __namedExportsOrder,Z as default};