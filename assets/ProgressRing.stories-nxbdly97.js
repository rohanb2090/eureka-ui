import{j as a}from"./jsx-runtime-BYYWji4R.js";import{r as u}from"./index-ClcD9ViR.js";import{c as M}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ne={sm:{viewBox:48,radius:18,thickness:4},md:{viewBox:64,radius:26,thickness:5},lg:{viewBox:96,radius:42,thickness:6}};function le(L){const{value:s,size:z="md",thickness:y}=L,o=ne[z],S=y??o.thickness,t=o.radius,k=o.viewBox,e=u.useMemo(()=>Math.max(0,Math.min(100,s)),[s]),n=u.useMemo(()=>2*Math.PI*t,[t]),j=u.useMemo(()=>{const c=e/100;return n*(1-c)},[e,n]),l=u.useMemo(()=>({role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Progress: ${e}%`}),[e]);return{normalizedValue:e,circumference:n,strokeDashoffset:j,radius:t,strokeWidth:S,viewBoxSize:k,progressProps:l}}function oe({value:L,size:s="md",thickness:z,color:y="var(--action-primary)",trackColor:o="var(--border-subtle)",showLabel:S=!0,label:t,className:k}){const{normalizedValue:e,circumference:n,strokeDashoffset:j,radius:l,strokeWidth:c,viewBoxSize:r,progressProps:te}=le({value:L,size:s,thickness:z}),i=r/2;return a.jsx("div",{className:M("inline-flex items-center justify-center",k),children:a.jsxs("div",{className:"relative",style:{width:r,height:r},children:[a.jsxs("svg",{...te,width:r,height:r,viewBox:`0 0 ${r} ${r}`,className:"transform -rotate-90",children:[a.jsx("circle",{cx:i,cy:i,r:l,stroke:o,strokeWidth:c,fill:"none"}),a.jsx("circle",{cx:i,cy:i,r:l,stroke:y,strokeWidth:c,fill:"none",strokeDasharray:n,strokeDashoffset:j,strokeLinecap:"round",className:"transition-all duration-500 ease-out"})]}),S&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsx("span",{className:M("font-semibold text-text-primary",s==="sm"&&"text-xs",s==="md"&&"text-sm",s==="lg"&&"text-lg"),children:t??`${e}%`})})]})})}oe.__docgenInfo={description:"",methods:[],displayName:"ProgressRing",props:{value:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--border-subtle)'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Components/ProgressRing",component:oe,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"number",min:0,max:100},size:{control:"select",options:["sm","md","lg"]},showLabel:{control:"boolean"}}},m={args:{value:65,size:"sm",showLabel:!0}},d={args:{value:75,size:"md",showLabel:!0}},p={args:{value:85,size:"lg",showLabel:!0}},g={args:{value:100,size:"md",color:"var(--status-success)",showLabel:!0}},v={args:{value:45,size:"md",color:"var(--status-warning)",showLabel:!0}},h={args:{value:25,size:"md",color:"var(--status-error)",showLabel:!0}},b={args:{value:67,size:"lg",showLabel:!0,label:"2/3"}},f={args:{value:50,size:"md",showLabel:!1}},w={args:{value:95,size:"lg",color:"var(--status-success)",showLabel:!0}},x={args:{value:5,size:"md",showLabel:!0}};var N,P,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 65,
    size: 'sm',
    showLabel: true
  }
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,B,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 'md',
    showLabel: true
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var E,V,R;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 85,
    size: 'lg',
    showLabel: true
  }
}`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var _,W,$;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 100,
    size: 'md',
    color: 'var(--status-success)',
    showLabel: true
  }
}`,...($=(W=g.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var A,D,I;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'md',
    color: 'var(--status-warning)',
    showLabel: true
  }
}`,...(I=(D=v.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var J,O,Z;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    value: 25,
    size: 'md',
    color: 'var(--status-error)',
    showLabel: true
  }
}`,...(Z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var F,G,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 67,
    size: 'lg',
    showLabel: true,
    label: '2/3'
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'md',
    showLabel: false
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    value: 95,
    size: 'lg',
    color: 'var(--status-success)',
    showLabel: true
  }
}`,...(ee=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var se,re,ae;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    value: 5,
    size: 'md',
    showLabel: true
  }
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const pe=["Small","Medium","Large","Success","Warning","Error","CustomLabel","NoLabel","AlmostComplete","JustStarted"];export{w as AlmostComplete,b as CustomLabel,h as Error,x as JustStarted,p as Large,d as Medium,f as NoLabel,m as Small,g as Success,v as Warning,pe as __namedExportsOrder,de as default};
