import{T as j}from"./Table-DcY0Fw_v.js";import"./jsx-runtime-DF2Pcvd1.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-Cq7NmpSM.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const a=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor"}],e=[{id:"name",header:"Name",isSortable:!0},{id:"email",header:"Email",isSortable:!0},{id:"role",header:"Role",isSortable:!1}],O={title:"Components/Table",component:j,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{selectable:{control:"boolean",description:"Enable row selection"},striped:{control:"boolean",description:"Striped row background"}}},r={args:{data:a,columns:e}},s={args:{data:a,columns:e}},t={args:{data:a,columns:e,selectable:!0}},o={args:{data:a,columns:e,striped:!0}},n={args:{data:a,columns:e,selectable:!0,striped:!0}},c={args:{data:[],columns:e}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,i,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var b,g,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    selectable: true
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var D,h,x;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    striped: true
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var E,f,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    selectable: true,
    striped: true
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,w,J;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: [],
    columns
  }
}`,...(J=(w=c.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};const R=["Default","Sortable","Selectable","Striped","SelectableStriped","Empty"];export{r as Default,c as Empty,t as Selectable,n as SelectableStriped,s as Sortable,o as Striped,R as __namedExportsOrder,O as default};
