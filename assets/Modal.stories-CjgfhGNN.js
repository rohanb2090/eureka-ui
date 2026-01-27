import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{M as L}from"./Modal-C1aMUROO.js";import{B as c}from"./Button-CFyzd8sv.js";import{r as C}from"./index-CcKhGcwW.js";import"./index-DBC7rmMa.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";import"./index-DVF2XGCm.js";const a=r=>{const[v,s]=C.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(c,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(L,{...r,isOpen:v,onClose:()=>s(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx(c,{onClick:()=>s(!1),children:"Save Changes"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"This is a portal-based modal component with sharp edges, adhering to the Eureka design system."}),e.jsx("p",{children:"It supports various sizes, has an overlay backdrop, and handles Escape key for closing."}),e.jsx("div",{className:"h-64 bg-bg-subtle border border-border-subtle flex items-center justify-center italic text-text-tertiary",children:"Placeholder for complex content"})]})})]})},w={title:"Components/Modal",component:L,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{},render:r=>e.jsx(a,{...r,size:"sm",title:"Small Modal"})},t={args:{},render:r=>e.jsx(a,{...r,size:"md",title:"Standard Modal"})},l={args:{},render:r=>e.jsx(a,{...r,size:"lg",title:"Large Modal"})},n={args:{},render:r=>e.jsx(a,{...r,size:"xl",title:"Extra Large Modal"})},d={args:{},render:r=>e.jsx(a,{...r,size:"full",title:"Full Screen Modal"})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {} as any,
  render: args => <ModalDemo {...args} size="sm" title="Small Modal" />
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {} as any,
  render: args => <ModalDemo {...args} size="md" title="Standard Modal" />
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var M,h,j;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {} as any,
  render: args => <ModalDemo {...args} size="lg" title="Large Modal" />
}`,...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,f,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {} as any,
  render: args => <ModalDemo {...args} size="xl" title="Extra Large Modal" />
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var z,b,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {} as any,
  render: args => <ModalDemo {...args} size="full" title="Full Screen Modal" />
}`,...(E=(b=d.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const P=["Small","Medium","Large","ExtraLarge","FullScreen"];export{n as ExtraLarge,d as FullScreen,l as Large,t as Medium,o as Small,P as __namedExportsOrder,w as default};
