import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./dist-CYkGE2wG.js";import{n as h,t as g}from"./utils-Dm4OyE3Q.js";import{n as _,t as v}from"./input-YTE7C0JT.js";import{n as y,t as b}from"./button-BlnPWJm4.js";import{n as x,t as S}from"./label-owO6eBIP.js";var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{C=e(n(),1),c(),o(),h(),w=r(),T=p,E=a,D=u,O=C.forwardRef(({className:e,...t},n)=>(0,w.jsx)(i,{ref:n,className:g(`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0`,e),...t})),O.displayName=i.displayName,k=C.forwardRef(({className:e,children:t,...n},r)=>(0,w.jsxs)(D,{children:[(0,w.jsx)(O,{}),(0,w.jsxs)(d,{ref:r,className:g(`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] sm:rounded-lg`,e),...n,children:[t,(0,w.jsxs)(l,{className:`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`,children:[(0,w.jsx)(m,{className:`h-4 w-4`}),(0,w.jsx)(`span`,{className:`sr-only`,children:`Close`})]})]})]})),k.displayName=d.displayName,A=({className:e,...t})=>(0,w.jsx)(`div`,{className:g(`flex flex-col space-y-1.5 text-center sm:text-left`,e),...t}),A.displayName=`DialogHeader`,j=({className:e,...t})=>(0,w.jsx)(`div`,{className:g(`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,e),...t}),j.displayName=`DialogFooter`,M=C.forwardRef(({className:e,...t},n)=>(0,w.jsx)(f,{ref:n,className:g(`text-lg font-semibold leading-none tracking-tight`,e),...t})),M.displayName=f.displayName,N=C.forwardRef(({className:e,...t},n)=>(0,w.jsx)(s,{ref:n,className:g(`text-sm text-muted-foreground`,e),...t})),N.displayName=s.displayName,O.__docgenInfo={description:``,methods:[]},k.__docgenInfo={description:``,methods:[]},A.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`},j.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`},M.__docgenInfo={description:``,methods:[]},N.__docgenInfo={description:``,methods:[]}})))()}var F,I,L,R;function z(){return(z=t((()=>{y(),_(),x(),P(),F=r(),I={title:`UI/Dialog`,component:T},L={render:()=>(0,F.jsx)(`div`,{className:`p-8`,children:(0,F.jsxs)(T,{children:[(0,F.jsx)(E,{asChild:!0,children:(0,F.jsx)(b,{variant:`outline`,children:`Abrir diálogo`})}),(0,F.jsxs)(k,{className:`sm:max-w-md`,children:[(0,F.jsxs)(A,{children:[(0,F.jsx)(M,{children:`Editar plano`}),(0,F.jsx)(N,{children:`Altere os dados do plano mensal.`})]}),(0,F.jsxs)(`div`,{className:`grid gap-4`,children:[(0,F.jsxs)(`div`,{className:`grid gap-2`,children:[(0,F.jsx)(S,{htmlFor:`name`,children:`Nome do plano`}),(0,F.jsx)(v,{id:`name`,defaultValue:`Premium`})]}),(0,F.jsxs)(`div`,{className:`grid gap-2`,children:[(0,F.jsx)(S,{htmlFor:`price`,children:`Preço (R$)`}),(0,F.jsx)(v,{id:`price`,defaultValue:`129.90`,type:`number`})]})]}),(0,F.jsxs)(j,{children:[(0,F.jsx)(b,{variant:`outline`,children:`Cancelar`}),(0,F.jsx)(b,{children:`Salvar alterações`})]})]})]})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Abrir diálogo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar plano</DialogTitle>
            <DialogDescription>
              Altere os dados do plano mensal.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome do plano</Label>
              <Input id="name" defaultValue="Premium" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Preço (R$)</Label>
              <Input id="price" defaultValue="129.90" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancelar</Button>
            <Button>Salvar alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
}`,...L.parameters?.docs?.source}}},R=[`Default`]})))()}z();export{L as Default,R as __namedExportsOrder,I as default};