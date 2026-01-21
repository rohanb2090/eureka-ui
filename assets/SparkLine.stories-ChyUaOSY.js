import{j as i}from"./jsx-runtime-BYYWji4R.js";import{r as g}from"./index-ClcD9ViR.js";import{c as re}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";function te(l){const{data:e}=l,{min:t,max:s,current:u}=g.useMemo(()=>{const r=e.filter(a=>typeof a=="number"&&!isNaN(a));return{min:Math.min(...r),max:Math.max(...r),current:r[r.length-1]||0}},[e]),d=g.useMemo(()=>{if(e.length<2)return"stable";const r=e[0],a=e[e.length-1];return a>r*1.05?"up":a<r*.95?"down":"stable"},[e]),{pathData:S,lastPoint:$}=g.useMemo(()=>{if(e.length===0)return{pathData:"",lastPoint:null};const r=100,a=32,Z=s-t||1,o=e.map((n,p)=>{const c=p/(e.length-1||1)*r,h=(n-t)/Z,ee=a-h*a;return{x:c,y:ee,value:n}});let N=`M ${o[0].x} ${o[0].y}`;for(let n=0;n<o.length-1;n++){const p=o[n],c=o[n+1],h=(p.x+c.x)/2;N+=` Q ${h} ${p.y}, ${h} ${(p.y+c.y)/2}`,N+=` Q ${h} ${c.y}, ${c.x} ${c.y}`}return{pathData:N,lastPoint:o[o.length-1]||null}},[e,t,s]),m=g.useMemo(()=>({role:"img","aria-label":`Trend: ${d}, Current: ${u}, Min: ${t}, Max: ${s}`}),[d,u,t,s]);return{pathData:S,lastPoint:$,min:t,max:s,current:u,trend:d,chartProps:m}}function k({data:l,showDot:e=!0,width:t=100,height:s=32,lineColor:u="var(--action-primary)",dotColor:d="var(--action-primary)",className:S}){const{pathData:$,lastPoint:m,chartProps:r}=te({data:l});return i.jsxs("svg",{...r,width:t,height:s,viewBox:"0 0 100 32",className:re("inline-block",S),preserveAspectRatio:"none",children:[i.jsx("path",{d:$,fill:"none",stroke:u,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e&&m&&i.jsx("circle",{cx:m.x,cy:m.y,r:"2",fill:d})]})}k.__docgenInfo={description:"",methods:[],displayName:"SparkLine",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},showDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},lineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},dotColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}}}};const C=[20,25,22,30,28,35,40],ae=[40,38,35,30,28,25,20],se=[25,35,20,40,15,38,30],oe=[30,31,29,30,32,30,31],ue={title:"Data Visualization/SparkLine",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showDot:{control:"boolean"},width:{control:"number",min:50,max:200},height:{control:"number",min:20,max:60}}},x={args:{data:C,showDot:!0,lineColor:"var(--status-success)",dotColor:"var(--status-success)"}},f={args:{data:ae,showDot:!0,lineColor:"var(--status-error)",dotColor:"var(--status-error)"}},w={args:{data:se,showDot:!0,lineColor:"var(--status-warning)",dotColor:"var(--status-warning)"}},v={args:{data:oe,showDot:!0}},y={args:{data:C,showDot:!1}},D={args:{data:C,width:150,height:50,showDot:!0}},T={args:{data:C,width:60,height:24,showDot:!0}},b={args:{data:[45,52,48,61,55,67],width:60,height:20,lineColor:"var(--status-success)"},render:l=>i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-sm text-text-secondary",children:"Revenue:"}),i.jsx(k,{...l}),i.jsx("span",{className:"text-sm font-semibold text-text-primary",children:"$67k"})]})};var j,L,M;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: true,
    lineColor: 'var(--status-success)',
    dotColor: 'var(--status-success)'
  }
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,q,P;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: downTrend,
    showDot: true,
    lineColor: 'var(--status-error)',
    dotColor: 'var(--status-error)'
  }
}`,...(P=(q=f.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var E,R,_;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: volatile,
    showDot: true,
    lineColor: 'var(--status-warning)',
    dotColor: 'var(--status-warning)'
  }
}`,...(_=(R=w.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,z,A;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: stable,
    showDot: true
  }
}`,...(A=(z=v.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var Q,U,B;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: false
  }
}`,...(B=(U=y.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var O,W,X;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 150,
    height: 50,
    showDot: true
  }
}`,...(X=(W=D.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,F,G;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 60,
    height: 24,
    showDot: true
  }
}`,...(G=(F=T.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const de=["UpTrend","DownTrend","Volatile","Stable","NoDot","Large","Small","InlineExample"];export{f as DownTrend,b as InlineExample,D as Large,y as NoDot,T as Small,v as Stable,x as UpTrend,w as Volatile,de as __namedExportsOrder,ue as default};
