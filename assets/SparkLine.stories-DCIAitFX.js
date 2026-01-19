import{j as o}from"./jsx-runtime-DF2Pcvd1.js";import{r as d}from"./index-B2-qRKKC.js";import{c as ee}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";function re(n){const{data:e}=n,{min:t,max:s,current:c}=d.useMemo(()=>{const r=e.filter(a=>typeof a=="number"&&!isNaN(a));return{min:Math.min(...r),max:Math.max(...r),current:r[r.length-1]||0}},[e]),i=d.useMemo(()=>{if(e.length<2)return"stable";const r=e[0],a=e[e.length-1];return a>r*1.05?"up":a<r*.95?"down":"stable"},[e]),{pathData:D,lastPoint:T}=d.useMemo(()=>{if(e.length===0)return{pathData:"",lastPoint:null};const r=100,a=32,K=s-t||1,b=e.map((u,C)=>{const Q=C/(e.length-1||1)*r,X=(u-t)/K,Z=a-X*a;return{x:Q,y:Z,value:u}});return{pathData:b.map((u,C)=>`${C===0?"M":"L"} ${u.x} ${u.y}`).join(" "),lastPoint:b[b.length-1]||null}},[e,t,s]),l=d.useMemo(()=>({role:"img","aria-label":`Trend: ${i}, Current: ${c}, Min: ${t}, Max: ${s}`}),[i,c,t,s]);return{pathData:D,lastPoint:T,min:t,max:s,current:c,trend:i,chartProps:l}}function S({data:n,showDot:e=!0,width:t=100,height:s=32,lineColor:c="var(--action-primary)",dotColor:i="var(--action-primary)",className:D}){const{pathData:T,lastPoint:l,chartProps:r}=re({data:n});return o.jsxs("svg",{...r,width:t,height:s,viewBox:"0 0 100 32",className:ee("inline-block",D),preserveAspectRatio:"none",children:[o.jsx("path",{d:T,fill:"none",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e&&l&&o.jsx("circle",{cx:l.x,cy:l.y,r:"2",fill:i})]})}S.__docgenInfo={description:"",methods:[],displayName:"SparkLine",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},showDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},lineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},dotColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}}}};const y=[20,25,22,30,28,35,40],te=[40,38,35,30,28,25,20],ae=[25,35,20,40,15,38,30],se=[30,31,29,30,32,30,31],ue={title:"Components/SparkLine",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showDot:{control:"boolean"},width:{control:"number",min:50,max:200},height:{control:"number",min:20,max:60}}},m={args:{data:y,showDot:!0,lineColor:"var(--status-success)",dotColor:"var(--status-success)"}},p={args:{data:te,showDot:!0,lineColor:"var(--status-error)",dotColor:"var(--status-error)"}},h={args:{data:ae,showDot:!0,lineColor:"var(--status-warning)",dotColor:"var(--status-warning)"}},g={args:{data:se,showDot:!0}},x={args:{data:y,showDot:!1}},f={args:{data:y,width:150,height:50,showDot:!0}},w={args:{data:y,width:60,height:24,showDot:!0}},v={args:{data:[45,52,48,61,55,67],width:60,height:20,lineColor:"var(--status-success)"},render:n=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-sm text-text-secondary",children:"Revenue:"}),o.jsx(S,{...n}),o.jsx("span",{className:"text-sm font-semibold text-text-primary",children:"$67k"})]})};var N,k,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: true,
    lineColor: 'var(--status-success)',
    dotColor: 'var(--status-success)'
  }
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var L,M,$;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: downTrend,
    showDot: true,
    lineColor: 'var(--status-error)',
    dotColor: 'var(--status-error)'
  }
}`,...($=(M=p.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var q,V,P;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: volatile,
    showDot: true,
    lineColor: 'var(--status-warning)',
    dotColor: 'var(--status-warning)'
  }
}`,...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,R,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: stable,
    showDot: true
  }
}`,...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,A,U;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: false
  }
}`,...(U=(A=x.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var z,B,O;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 150,
    height: 50,
    showDot: true
  }
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,Y,F;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 60,
    height: 24,
    showDot: true
  }
}`,...(F=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const de=["UpTrend","DownTrend","Volatile","Stable","NoDot","Large","Small","InlineExample"];export{p as DownTrend,v as InlineExample,f as Large,x as NoDot,w as Small,g as Stable,m as UpTrend,h as Volatile,de as __namedExportsOrder,ue as default};
