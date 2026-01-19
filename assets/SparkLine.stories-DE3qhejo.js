import{j as r}from"./jsx-runtime-BYYWji4R.js";import{S as V}from"./SparkLine-kqmXYya3.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";const i=[20,25,22,30,28,35,40],$=[40,38,35,30,28,25,20],O=[25,35,20,40,15,38,30],q=[30,31,29,30,32,30,31],H={title:"Components/SparkLine",component:V,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showDot:{control:"boolean"},width:{control:"number",min:50,max:200},height:{control:"number",min:20,max:60}}},e={args:{data:i,showDot:!0,lineColor:"var(--status-success)",dotColor:"var(--status-success)"}},s={args:{data:$,showDot:!0,lineColor:"var(--status-error)",dotColor:"var(--status-error)"}},a={args:{data:O,showDot:!0,lineColor:"var(--status-warning)",dotColor:"var(--status-warning)"}},t={args:{data:q,showDot:!0}},o={args:{data:i,showDot:!1}},n={args:{data:i,width:150,height:50,showDot:!0}},c={args:{data:i,width:60,height:24,showDot:!0}},d={args:{data:[45,52,48,61,55,67],width:60,height:20,lineColor:"var(--status-success)"},render:_=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-sm text-text-secondary",children:"Revenue:"}),r.jsx(V,{..._}),r.jsx("span",{className:"text-sm font-semibold text-text-primary",children:"$67k"})]})};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: true,
    lineColor: 'var(--status-success)',
    dotColor: 'var(--status-success)'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: downTrend,
    showDot: true,
    lineColor: 'var(--status-error)',
    dotColor: 'var(--status-error)'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,x,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: volatile,
    showDot: true,
    lineColor: 'var(--status-warning)',
    dotColor: 'var(--status-warning)'
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,S,C;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: stable,
    showDot: true
  }
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,b,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: false
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var N,j,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 150,
    height: 50,
    showDot: true
  }
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var k,L,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 60,
    height: 24,
    showDot: true
  }
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var R,I,U;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: [45, 52, 48, 61, 55, 67],
    width: 60,
    height: 20,
    lineColor: 'var(--status-success)'
  },
  render: args => <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Revenue:</span>
            <SparkLine {...args} />
            <span className="text-sm font-semibold text-text-primary">$67k</span>
        </div>
}`,...(U=(I=d.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const J=["UpTrend","DownTrend","Volatile","Stable","NoDot","Large","Small","InlineExample"];export{s as DownTrend,d as InlineExample,n as Large,o as NoDot,c as Small,t as Stable,e as UpTrend,a as Volatile,J as __namedExportsOrder,H as default};
