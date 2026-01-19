import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{r as D}from"./index-B2-qRKKC.js";import{c as F}from"./index-BvxWzTOX.js";import{a as G}from"./cn-Dj5kSLHa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const H=F(["bg-[var(--bg-surface)]","rounded-[var(--radius-md)]"],{variants:{variant:{page:"bg-[var(--bg-page)]",panel:"bg-[var(--bg-surface)] border border-[var(--border-default)]",card:"bg-[var(--bg-surface)] border border-[var(--border-default)]",inset:"bg-[var(--bg-subtle)]",elevated:"bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-lg"},padding:{none:"p-0",sm:"p-[var(--spacing-md)]",md:"p-[var(--spacing-lg)]",lg:"p-[var(--spacing-xl)]"}},defaultVariants:{variant:"card",padding:"md"}}),i=D.forwardRef(({variant:R="card",padding:A="md",as:L="div",children:O,className:z},B)=>a.jsx(L,{ref:B,className:G(H({variant:R,padding:A}),z),children:O}));i.displayName="Surface";const J=i;i.__docgenInfo={description:"",methods:[],displayName:"Surface",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"union",raw:"'div' | 'section' | 'article' | 'aside'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'section'"},{name:"literal",value:"'article'"},{name:"literal",value:"'aside'"}]},description:"",defaultValue:{value:"'div'",computed:!1}},variant:{defaultValue:{value:"'card'",computed:!1},required:!1},padding:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["SurfaceVariantProps"]};const X={title:"Components/Surface",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["page","panel","card","inset","elevated"]},padding:{control:"select",options:["none","sm","md","lg"]},as:{control:"select",options:["div","section","article","aside"]}}},e={args:{variant:"page",children:"Page surface (matches page background)"}},r={args:{variant:"panel",children:"Panel surface with border"}},n={args:{variant:"card",children:"Card surface with border"}},s={args:{variant:"inset",children:"Inset surface (subtle background)"}},t={args:{variant:"elevated",children:"Elevated surface with shadow"}},d={args:{variant:"card",padding:"none",children:"Card with no padding"}},o={args:{variant:"card",padding:"lg",children:"Card with large padding"}},c={args:{children:null},render:()=>a.jsxs(J,{variant:"card",padding:"lg",className:"max-w-md",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),a.jsx("p",{className:"text-sm text-[var(--text-secondary)] mb-4",children:"This is a more complex card example with multiple content sections."}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{className:"px-4 py-2 bg-[var(--action-primary)] text-[var(--action-text-on-primary)] rounded",children:"Action"}),a.jsx("button",{className:"px-4 py-2 border border-[var(--border-default)] rounded",children:"Cancel"})]})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'page',
    children: 'Page surface (matches page background)'
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'panel',
    children: 'Panel surface with border'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    children: 'Card surface with border'
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,C,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'inset',
    children: 'Inset surface (subtle background)'
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var N,y,P;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: 'Elevated surface with shadow'
  }
}`,...(P=(y=t.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var S,j,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    padding: 'none',
    children: 'Card with no padding'
  }
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var V,E,q;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    padding: 'lg',
    children: 'Card with large padding'
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var I,k,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const Y=["Page","Panel","CardVariant","Inset","Elevated","NoPadding","LargePadding","ComplexCard"];export{n as CardVariant,c as ComplexCard,t as Elevated,s as Inset,o as LargePadding,d as NoPadding,e as Page,r as Panel,Y as __namedExportsOrder,X as default};
