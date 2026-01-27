import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{S as a}from"./Skeleton-B44P71zw.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";const T={title:"Components/Skeleton",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular"]},width:{control:"select",options:["full","3/4","1/2","1/4"]}}},t={args:{variant:"text",width:"full"}},r={args:{variant:"text",width:"full",lines:3}},s={args:{variant:"circular",width:"48px",height:"48px"}},n={args:{variant:"rectangular",width:"full",height:"200px"}},i={render:()=>e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"circular",width:"48px",height:"48px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{variant:"text",width:"3/4"}),e.jsx(a,{variant:"text",width:"1/2"})]})]}),e.jsx(a,{variant:"rectangular",width:"full",height:"200px"}),e.jsx(a,{variant:"text",lines:3})]})};var l,c,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 'full'
  }
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 'full',
    lines: 3
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,x,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: '48px',
    height: '48px'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,v,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 'full',
    height: '200px'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,S,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-full max-w-md">
            <div className="flex items-center gap-4">
                <Skeleton variant="circular" width="48px" height="48px" />
                <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="3/4" />
                    <Skeleton variant="text" width="1/2" />
                </div>
            </div>
            <Skeleton variant="rectangular" width="full" height="200px" />
            <Skeleton variant="text" lines={3} />
        </div>
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const E=["Text","MultipleLines","Circular","Rectangular","CardSkeleton"];export{i as CardSkeleton,s as Circular,r as MultipleLines,n as Rectangular,t as Text,E as __namedExportsOrder,T as default};
