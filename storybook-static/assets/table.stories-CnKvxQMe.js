import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./utils-Dm4OyE3Q.js";import{n as o,t as s}from"./status-badge-DMjLxTOO.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{c=e(n(),1),i(),l=r(),u=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`div`,{className:`relative w-full overflow-auto`,children:(0,l.jsx)(`table`,{ref:n,className:a(`w-full caption-bottom text-sm`,e),...t})})),u.displayName=`Table`,d=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`thead`,{ref:n,className:a(`[&_tr]:border-b`,e),...t})),d.displayName=`TableHeader`,f=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`tbody`,{ref:n,className:a(`[&_tr:last-child]:border-0`,e),...t})),f.displayName=`TableBody`,p=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`tfoot`,{ref:n,className:a(`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0`,e),...t})),p.displayName=`TableFooter`,m=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`tr`,{ref:n,className:a(`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`,e),...t})),m.displayName=`TableRow`,h=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`th`,{ref:n,className:a(`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0`,e),...t})),h.displayName=`TableHead`,g=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`td`,{ref:n,className:a(`p-2 align-middle [&:has([role=checkbox])]:pr-0`,e),...t})),g.displayName=`TableCell`,_=c.forwardRef(({className:e,...t},n)=>(0,l.jsx)(`caption`,{ref:n,className:a(`mt-4 text-sm text-muted-foreground`,e),...t})),_.displayName=`TableCaption`,u.__docgenInfo={description:``,methods:[],displayName:`Table`},d.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},f.__docgenInfo={description:``,methods:[],displayName:`TableBody`},p.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},h.__docgenInfo={description:``,methods:[],displayName:`TableHead`},m.__docgenInfo={description:``,methods:[],displayName:`TableRow`},g.__docgenInfo={description:``,methods:[],displayName:`TableCell`},_.__docgenInfo={description:``,methods:[],displayName:`TableCaption`}})))()}var y,b,x,S,C,w;function T(){return(T=t((()=>{o(),v(),y=r(),b={title:`UI/Table`,component:u},x=[{nome:`Ana Souza`,plano:`Premium`,status:`success`,valor:`R$ 129,90`},{nome:`Bruno Lima`,plano:`Standard`,status:`info`,valor:`R$ 89,90`},{nome:`Carla Mendes`,plano:`Básico`,status:`warning`,valor:`R$ 59,90`},{nome:`Diego Rocha`,plano:`Premium`,status:`error`,valor:`R$ 129,90`},{nome:`Elisa Faria`,plano:`Standard`,status:`success`,valor:`R$ 89,90`}],S={render:()=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsxs)(u,{children:[(0,y.jsx)(_,{children:`Alunos matriculados na academia.`}),(0,y.jsx)(d,{children:(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Nome`}),(0,y.jsx)(h,{children:`Plano`}),(0,y.jsx)(h,{children:`Status`}),(0,y.jsx)(h,{className:`text-right`,children:`Mensalidade`})]})}),(0,y.jsx)(f,{children:x.map(e=>(0,y.jsxs)(m,{children:[(0,y.jsx)(g,{className:`font-medium`,children:e.nome}),(0,y.jsx)(g,{children:e.plano}),(0,y.jsx)(g,{children:(0,y.jsx)(s,{label:e.status===`success`?`Ativo`:e.status===`info`?`Novo`:e.status===`warning`?`Pendente`:`Atrasado`,tone:e.status,dot:!0})}),(0,y.jsx)(g,{className:`text-right`,children:e.valor})]},e.nome))}),(0,y.jsx)(p,{children:(0,y.jsxs)(m,{children:[(0,y.jsx)(g,{colSpan:3,children:`Total`}),(0,y.jsx)(g,{className:`text-right`,children:`R$ 499,50`})]})})]})})},C={render:()=>(0,y.jsx)(`div`,{className:`p-8`,children:(0,y.jsxs)(u,{children:[(0,y.jsx)(d,{children:(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Modalidade`}),(0,y.jsx)(h,{children:`Instrutor`}),(0,y.jsx)(h,{className:`text-right`,children:`Alunos`})]})}),(0,y.jsx)(f,{children:[{modalidade:`Musculação`,instrutor:`Carlos`,alunos:`45`},{modalidade:`Pilates`,instrutor:`Marina`,alunos:`12`},{modalidade:`Funcional`,instrutor:`Rafael`,alunos:`28`}].map(e=>(0,y.jsxs)(m,{children:[(0,y.jsx)(g,{className:`font-medium`,children:e.modalidade}),(0,y.jsx)(g,{children:e.instrutor}),(0,y.jsx)(g,{className:`text-right`,children:e.alunos})]},e.modalidade))})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <Table>
        <TableCaption>Alunos matriculados na academia.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Plano</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Mensalidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alunos.map(aluno => <TableRow key={aluno.nome}>
              <TableCell className="font-medium">{aluno.nome}</TableCell>
              <TableCell>{aluno.plano}</TableCell>
              <TableCell>
                <StatusBadge label={aluno.status === 'success' ? 'Ativo' : aluno.status === 'info' ? 'Novo' : aluno.status === 'warning' ? 'Pendente' : 'Atrasado'} tone={aluno.status as never} dot />
              </TableCell>
              <TableCell className="text-right">{aluno.valor}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">R$ 499,50</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Modalidade</TableHead>
            <TableHead>Instrutor</TableHead>
            <TableHead className="text-right">Alunos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[{
          modalidade: 'Musculação',
          instrutor: 'Carlos',
          alunos: '45'
        }, {
          modalidade: 'Pilates',
          instrutor: 'Marina',
          alunos: '12'
        }, {
          modalidade: 'Funcional',
          instrutor: 'Rafael',
          alunos: '28'
        }].map(item => <TableRow key={item.modalidade}>
              <TableCell className="font-medium">{item.modalidade}</TableCell>
              <TableCell>{item.instrutor}</TableCell>
              <TableCell className="text-right">{item.alunos}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Striped`]})))()}T();export{S as Default,C as Striped,w as __namedExportsOrder,b as default};