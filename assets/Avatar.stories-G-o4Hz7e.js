import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{A as e}from"./Avatar-BoRBG-JW.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const C={title:"Components/Avatar",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},shape:{control:"radio",options:["circle","square"]}}},s={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Tom Cook",fallback:"TC"}},r={args:{src:"invalid-url",alt:"Tom Cook",fallback:"TC"}},o={render:()=>a.jsxs("div",{className:"flex items-end gap-4",children:[a.jsx(e,{size:"sm",fallback:"SM"}),a.jsx(e,{size:"md",fallback:"MD"}),a.jsx(e,{size:"lg",fallback:"LG"}),a.jsx(e,{size:"xl",fallback:"XL"})]})},t={args:{shape:"square",fallback:"SQ",size:"lg"}};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'Tom Cook',
    fallback: 'TC'
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url',
    alt: 'Tom Cook',
    fallback: 'TC'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,f,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="xl" fallback="XL" />
        </div>
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,b,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    fallback: 'SQ',
    size: 'lg'
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const T=["WithImage","Fallback","Sizes","Square"];export{r as Fallback,o as Sizes,t as Square,s as WithImage,T as __namedExportsOrder,C as default};
