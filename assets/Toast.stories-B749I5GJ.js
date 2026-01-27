import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{T as a,u as v}from"./Toast-Cbw0gagY.js";import{B as e}from"./Button-CFyzd8sv.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";import"./index-DVF2XGCm.js";function i(){const{show:r}=v();return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(e,{onClick:()=>r({message:"This is an info toast",severity:"info"}),children:"Show Info Toast"}),o.jsx(e,{onClick:()=>r({message:"Successfully saved!",severity:"success"}),variant:"secondary",children:"Show Success Toast"}),o.jsx(e,{onClick:()=>r({message:"Warning: Check your input",severity:"warning"}),variant:"secondary",children:"Show Warning Toast"}),o.jsx(e,{onClick:()=>r({message:"Error: Something went wrong",severity:"error"}),variant:"destructive",children:"Show Error Toast"}),o.jsx(e,{onClick:()=>r({message:"Item deleted",severity:"info",action:{label:"Undo",onClick:()=>alert("Undoing...")}}),variant:"ghost",children:"Show Toast with Action"})]})}const b={title:"Components/Toast",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},t={render:r=>o.jsx(a,{...r,children:o.jsx(i,{})}),args:{position:"bottom-right"}},s={render:r=>o.jsx(a,{...r,children:o.jsx(i,{})}),args:{position:"top-right"}},n={render:r=>o.jsx(a,{...r,children:o.jsx(i,{})}),args:{position:"bottom-center"}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
            <ToastDemo />
        </ToastProvider>,
  args: {
    position: 'bottom-right'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
            <ToastDemo />
        </ToastProvider>,
  args: {
    position: 'top-right'
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var h,u,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
            <ToastDemo />
        </ToastProvider>,
  args: {
    position: 'bottom-center'
  }
}`,...(T=(u=n.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const k=["Interactive","TopRight","BottomCenter"];export{n as BottomCenter,t as Interactive,s as TopRight,k as __namedExportsOrder,b as default};
