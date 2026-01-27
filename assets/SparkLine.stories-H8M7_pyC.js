import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{r as x}from"./index-CcKhGcwW.js";import{c as te}from"./cn-CytzSlOG.js";import{u as re}from"./useChartTheme-CFbgSgLJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";function se(l){const{data:e}=l,{min:a,max:o,current:u}=x.useMemo(()=>{const t=e.filter(r=>typeof r=="number"&&!isNaN(r));return{min:Math.min(...t),max:Math.max(...t),current:t[t.length-1]||0}},[e]),d=x.useMemo(()=>{if(e.length<2)return"stable";const t=e[0],r=e[e.length-1];return r>t*1.05?"up":r<t*.95?"down":"stable"},[e]),{pathData:$,lastPoint:g}=x.useMemo(()=>{if(e.length===0)return{pathData:"",lastPoint:null};const t=100,r=32,m=o-a||1,s=e.map((n,p)=>{const c=p/(e.length-1||1)*t,h=(n-a)/m,ee=r-h*r;return{x:c,y:ee,value:n}});let k=`M ${s[0].x} ${s[0].y}`;for(let n=0;n<s.length-1;n++){const p=s[n],c=s[n+1],h=(p.x+c.x)/2;k+=` Q ${h} ${p.y}, ${h} ${(p.y+c.y)/2}`,k+=` Q ${h} ${c.y}, ${c.x} ${c.y}`}return{pathData:k,lastPoint:s[s.length-1]||null}},[e,a,o]),N=x.useMemo(()=>({role:"img","aria-label":`Trend: ${d}, Current: ${u}, Min: ${a}, Max: ${o}`}),[d,u,a,o]);return{pathData:$,lastPoint:g,min:a,max:o,current:u,trend:d,chartProps:N}}function j({data:l,showDot:e=!0,width:a=100,height:o=32,lineColor:u,dotColor:d,className:$}){const g=re(),N=u||g.actionPrimary,t=d||g.actionPrimary,{pathData:r,lastPoint:m,chartProps:s}=se({data:l});return i.jsxs("svg",{...s,width:a,height:o,viewBox:"0 0 100 32",className:te("inline-block",$),preserveAspectRatio:"none",children:[i.jsx("path",{d:r,fill:"none",stroke:N,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e&&m&&i.jsx("circle",{cx:m.x,cy:m.y,r:"2",fill:t})]})}j.__docgenInfo={description:"",methods:[],displayName:"SparkLine",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},showDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},lineColor:{required:!1,tsType:{name:"string"},description:""},dotColor:{required:!1,tsType:{name:"string"},description:""}}};const S=[20,25,22,30,28,35,40],ae=[40,38,35,30,28,25,20],oe=[25,35,20,40,15,38,30],ne=[30,31,29,30,32,30,31],me={title:"Data Visualization/SparkLine",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showDot:{control:"boolean"},width:{control:"number",min:50,max:200},height:{control:"number",min:20,max:60}}},f={args:{data:S,showDot:!0,lineColor:"var(--status-success)",dotColor:"var(--status-success)"}},w={args:{data:ae,showDot:!0,lineColor:"var(--status-error)",dotColor:"var(--status-error)"}},v={args:{data:oe,showDot:!0,lineColor:"var(--status-warning)",dotColor:"var(--status-warning)"}},y={args:{data:ne,showDot:!0}},D={args:{data:S,showDot:!1}},T={args:{data:S,width:150,height:50,showDot:!0}},C={args:{data:S,width:60,height:24,showDot:!0}},b={args:{data:[45,52,48,61,55,67],width:60,height:20,lineColor:"var(--status-success)"},render:l=>i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-sm text-text-secondary",children:"Revenue:"}),i.jsx(j,{...l}),i.jsx("span",{className:"text-sm font-semibold text-text-primary",children:"$67k"})]})};var L,M,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: true,
    lineColor: 'var(--status-success)',
    dotColor: 'var(--status-success)'
  }
}`,...(P=(M=f.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,V,E;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: downTrend,
    showDot: true,
    lineColor: 'var(--status-error)',
    dotColor: 'var(--status-error)'
  }
}`,...(E=(V=w.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var R,_,I;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: volatile,
    showDot: true,
    lineColor: 'var(--status-warning)',
    dotColor: 'var(--status-warning)'
  }
}`,...(I=(_=v.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var z,A,Q;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: stable,
    showDot: true
  }
}`,...(Q=(A=y.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var U,B,O;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    showDot: false
  }
}`,...(O=(B=D.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,X,Y;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 150,
    height: 50,
    showDot: true
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var F,G,H;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: upTrend,
    width: 60,
    height: 24,
    showDot: true
  }
}`,...(H=(G=C.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Z;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};const pe=["UpTrend","DownTrend","Volatile","Stable","NoDot","Large","Small","InlineExample"];export{w as DownTrend,b as InlineExample,T as Large,D as NoDot,C as Small,y as Stable,f as UpTrend,v as Volatile,pe as __namedExportsOrder,me as default};
