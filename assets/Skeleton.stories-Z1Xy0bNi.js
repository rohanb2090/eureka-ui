import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{a as w}from"./cn-Dj5kSLHa.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u={full:"w-full","3/4":"w-3/4","1/2":"w-1/2","1/4":"w-1/4"};function a({width:t="full",height:d,variant:o="text",lines:c=1,className:p}){const m=["bg-[var(--bg-subtle)]","animate-pulse"],x={text:"h-4 rounded",circular:"rounded-full",rectangular:"rounded-[var(--radius-md)]"},v=typeof t=="string"&&t in u?u[t]:"",f={...typeof t=="string"&&!(t in u)&&{width:t},...d&&{height:d}};return o==="text"&&c>1?e.jsx("div",{className:"space-y-3",children:Array.from({length:c}).map((A,g)=>{const h=g===c-1;return e.jsx("div",{className:w(m,x[o],h?"w-3/4":v,p),style:h?void 0:f},g)})}):e.jsx("div",{className:w(m,x[o],v,p),style:f})}a.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | 'full' | '3/4' | '1/2' | '1/4'",elements:[{name:"string"},{name:"literal",value:"'full'"},{name:"literal",value:"'3/4'"},{name:"literal",value:"'1/2'"},{name:"literal",value:"'1/4'"}]},description:"Width of skeleton (CSS value or preset)",defaultValue:{value:"'full'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"Height of skeleton"},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"}]},description:"Shape variant",defaultValue:{value:"'text'",computed:!1}},lines:{required:!1,tsType:{name:"number"},description:"Number of lines (for text variant)",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Components/Skeleton",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular"]},width:{control:"select",options:["full","3/4","1/2","1/4"]}}},r={args:{variant:"text",width:"full"}},s={args:{variant:"text",width:"full",lines:3}},n={args:{variant:"circular",width:"48px",height:"48px"}},l={args:{variant:"rectangular",width:"full",height:"200px"}},i={render:()=>e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"circular",width:"48px",height:"48px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{variant:"text",width:"3/4"}),e.jsx(a,{variant:"text",width:"1/2"})]})]}),e.jsx(a,{variant:"rectangular",width:"full",height:"200px"}),e.jsx(a,{variant:"text",lines:3})]})};var y,S,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 'full'
  }
}`,...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,N,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 'full',
    lines: 3
  }
}`,...(C=(N=s.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var T,b,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: '48px',
    height: '48px'
  }
}`,...(q=(b=n.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var _,L,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 'full',
    height: '200px'
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,V,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const B=["Text","MultipleLines","Circular","Rectangular","CardSkeleton"];export{i as CardSkeleton,n as Circular,s as MultipleLines,l as Rectangular,r as Text,B as __namedExportsOrder,z as default};
