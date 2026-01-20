import{j as a}from"./jsx-runtime-BYYWji4R.js";import{u as ae}from"./useLineChart-C0b-Qqqg.js";import{c as te}from"./cn-CytzSlOG.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const re=400,se=300,e={top:20,right:20,bottom:40,left:60};function $({data:P,maxY:_,minY:M,smooth:I=!1,showGrid:f=!0,gridLines:R=5,showLabels:E=!0,fillColor:J="var(--action-primary)",fillOpacity:z=.2,lineColor:F="var(--action-primary)",className:Z,width:h=re,height:y=se}){const{pathData:x,points:r,maxY:B,minY:g,chartProps:K,gridLines:Q}=ae({data:P,maxY:_,minY:M,smooth:I,showGrid:f,gridLines:R}),b=h-e.left-e.right,t=y-e.top-e.bottom,U=B-g||1,X=r.length>0?`${x} L ${r[r.length-1].x} ${e.top+t} L ${r[0].x} ${e.top+t} Z`:"";return a.jsx("div",{className:te("inline-block",Z),children:a.jsxs("svg",{...K,width:h,height:y,className:"select-none",style:{overflow:"visible"},children:[f&&Q.map((s,p)=>{const ee=(s-g)/U,m=e.top+t-ee*t;return a.jsxs("g",{children:[a.jsx("line",{x1:e.left,y1:m,x2:e.left+b,y2:m,stroke:"var(--border-subtle)",strokeWidth:"1",strokeDasharray:"4 2"}),a.jsx("text",{x:e.left-8,y:m+4,textAnchor:"end",className:"text-xs pointer-events-none",fill:"var(--text-secondary)",children:Math.round(s)})]},`grid-${p}`)}),a.jsx("path",{d:X,fill:J,opacity:z}),a.jsx("path",{d:x,fill:"none",stroke:F,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),E&&r.map((s,p)=>a.jsx("text",{x:s.x,y:e.top+t+20,textAnchor:"middle",className:"text-xs pointer-events-none",fill:"var(--text-secondary)",children:s.label},`label-${p}`)),a.jsx("line",{x1:e.left,y1:e.top+t,x2:e.left+b,y2:e.top+t,stroke:"var(--border-default)",strokeWidth:"2"}),a.jsx("line",{x1:e.left,y1:e.top,x2:e.left,y2:e.top+t,stroke:"var(--border-default)",strokeWidth:"2"})]})})}$.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:""},maxY:{required:!1,tsType:{name:"number"},description:""},minY:{required:!1,tsType:{name:"number"},description:""},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPoints:{required:!1,tsType:{name:"boolean"},description:""},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gridLines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},fillColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},fillOpacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.2",computed:!1}},lineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const o=[{x:"00:00",y:120},{x:"04:00",y:80},{x:"08:00",y:240},{x:"12:00",y:380},{x:"16:00",y:320},{x:"20:00",y:200},{x:"23:59",y:150}],oe=[{x:"Jan",y:4500},{x:"Feb",y:5200},{x:"Mar",y:4800},{x:"Apr",y:6100},{x:"May",y:5500},{x:"Jun",y:6700}],de={title:"Components/AreaChart",component:$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{smooth:{control:"boolean"},showGrid:{control:"boolean"},showLabels:{control:"boolean"},fillOpacity:{control:"number",min:0,max:1,step:.1}}},n={args:{data:o,showGrid:!0,showLabels:!0}},l={args:{data:o,smooth:!0,showGrid:!0,showLabels:!0}},i={args:{data:oe,fillColor:"var(--status-success)",lineColor:"var(--status-success)",fillOpacity:.3,showGrid:!0,showLabels:!0}},c={args:{data:o,fillOpacity:.5,smooth:!0,showGrid:!0,showLabels:!0}},u={args:{data:o,smooth:!0,showGrid:!1,showLabels:!0}},d={args:{data:o,fillColor:"var(--status-warning)",lineColor:"var(--status-warning)",fillOpacity:.25,smooth:!0,showGrid:!0,showLabels:!0}};var w,v,L;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    showGrid: true,
    showLabels: true
  }
}`,...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var C,T,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var G,q,j;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: salesData,
    fillColor: 'var(--status-success)',
    lineColor: 'var(--status-success)',
    fillOpacity: 0.3,
    showGrid: true,
    showLabels: true
  }
}`,...(j=(q=i.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var k,O,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    fillOpacity: 0.5,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var S,V,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    smooth: true,
    showGrid: false,
    showLabels: true
  }
}`,...(N=(V=u.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var H,W,Y;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    fillColor: 'var(--status-warning)',
    lineColor: 'var(--status-warning)',
    fillOpacity: 0.25,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(Y=(W=d.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const pe=["Default","Smooth","Sales","HighOpacity","NoGrid","Warning"];export{n as Default,c as HighOpacity,u as NoGrid,i as Sales,l as Smooth,d as Warning,pe as __namedExportsOrder,de as default};
