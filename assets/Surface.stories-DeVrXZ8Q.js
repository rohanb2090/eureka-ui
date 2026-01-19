import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{S as V,C as _}from"./Surface-BxGp1MnB.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const F={title:"Components/Surface",component:V,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["page","panel","card","inset","elevated"]},padding:{control:"select",options:["none","sm","md","lg"]},as:{control:"select",options:["div","section","article","aside"]}}},r={args:{variant:"page",children:"Page surface (matches page background)"}},e={args:{variant:"panel",children:"Panel surface with border"}},n={args:{variant:"card",children:"Card surface with border"}},s={args:{variant:"inset",children:"Inset surface (subtle background)"}},t={args:{variant:"elevated",children:"Elevated surface with shadow"}},d={args:{variant:"card",padding:"none",children:"Card with no padding"}},o={args:{variant:"card",padding:"lg",children:"Card with large padding"}},c={args:{children:null},render:()=>a.jsxs(_,{variant:"card",padding:"lg",className:"max-w-md",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),a.jsx("p",{className:"text-sm text-[var(--text-secondary)] mb-4",children:"This is a more complex card example with multiple content sections."}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{className:"px-4 py-2 bg-[var(--action-primary)] text-[var(--action-text-on-primary)] rounded",children:"Action"}),a.jsx("button",{className:"px-4 py-2 border border-[var(--border-default)] rounded",children:"Cancel"})]})]})};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'page',
    children: 'Page surface (matches page background)'
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'panel',
    children: 'Panel surface with border'
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,v,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    children: 'Card surface with border'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,f,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'inset',
    children: 'Inset surface (subtle background)'
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,N,y;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: 'Elevated surface with shadow'
  }
}`,...(y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var P,S,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    padding: 'none',
    children: 'Card with no padding'
  }
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var E,T,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    padding: 'lg',
    children: 'Card with large padding'
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var I,A,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Card variant="card" padding="lg" className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Card Title</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
                This is a more complex card example with multiple content sections.
            </p>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-[var(--action-primary)] text-[var(--action-text-on-primary)] rounded">
                    Action
                </button>
                <button className="px-4 py-2 border border-[var(--border-default)] rounded">
                    Cancel
                </button>
            </div>
        </Card>
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const G=["Page","Panel","CardVariant","Inset","Elevated","NoPadding","LargePadding","ComplexCard"];export{n as CardVariant,c as ComplexCard,t as Elevated,s as Inset,o as LargePadding,d as NoPadding,r as Page,e as Panel,G as __namedExportsOrder,F as default};
