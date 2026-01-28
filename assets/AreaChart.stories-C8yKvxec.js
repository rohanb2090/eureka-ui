import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{u as oe}from"./useLineChart-BCFMTp9n.js";import{c as ne}from"./cn-CytzSlOG.js";import{u as le}from"./useChartTheme-CFbgSgLJ.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ie=400,ce=300,e={top:20,right:20,bottom:40,left:60};function P({data:_,maxY:M,minY:F,smooth:I=!1,showGrid:h=!0,gridLines:R=5,showLabels:E=!0,showYAxis:z=!0,fillColor:J,fillOpacity:Z=.2,lineColor:B,className:K,width:y=ie,height:x=ce}){const r=le(),Q=J||r.chart1,U=B||r.chart1,{pathData:g,points:s,maxY:X,minY:b,chartProps:ee,gridLines:te}=oe({data:_,maxY:M,minY:F,smooth:I,showGrid:h,gridLines:R}),w=y-e.left-e.right,a=x-e.top-e.bottom,ae=X-b||1,re=s.length>0?`${g} L ${s[s.length-1].x} ${e.top+a} L ${s[0].x} ${e.top+a} Z`:"";return t.jsx("div",{className:ne("inline-block",K),children:t.jsxs("svg",{...ee,width:y,height:x,className:"select-none",style:{overflow:"visible"},children:[te.map((o,m)=>{const se=(o-b)/ae,f=e.top+a-se*a;return t.jsxs("g",{children:[h&&t.jsx("line",{x1:e.left,y1:f,x2:e.left+w,y2:f,stroke:r.borderSubtle,strokeWidth:"1",strokeDasharray:"4 2"}),z&&t.jsx("text",{x:e.left-8,y:f+4,textAnchor:"end",className:"text-xs pointer-events-none",fill:r.textSecondary,style:{fontFamily:"inherit"},children:Math.round(o)})]},`grid-${m}`)}),t.jsx("path",{d:re,fill:Q,opacity:Z}),t.jsx("path",{d:g,fill:"none",stroke:U,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),E&&s.map((o,m)=>t.jsx("text",{x:o.x,y:e.top+a+20,textAnchor:"middle",className:"text-xs pointer-events-none",fill:r.textSecondary,style:{fontFamily:"inherit"},children:o.label},`label-${m}`)),t.jsx("line",{x1:e.left,y1:e.top+a,x2:e.left+w,y2:e.top+a,stroke:r.borderDefault,strokeWidth:"2"}),t.jsx("line",{x1:e.left,y1:e.top,x2:e.left,y2:e.top+a,stroke:r.borderDefault,strokeWidth:"2"})]})})}P.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:""},maxY:{required:!1,tsType:{name:"number"},description:""},minY:{required:!1,tsType:{name:"number"},description:""},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPoints:{required:!1,tsType:{name:"boolean"},description:""},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gridLines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},fillColor:{required:!1,tsType:{name:"string"},description:""},fillOpacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.2",computed:!1}},lineColor:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showYAxis:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const n=[{x:"00:00",y:120},{x:"04:00",y:80},{x:"08:00",y:240},{x:"12:00",y:380},{x:"16:00",y:320},{x:"20:00",y:200},{x:"23:59",y:150}],ue=[{x:"Jan",y:4500},{x:"Feb",y:5200},{x:"Mar",y:4800},{x:"Apr",y:6100},{x:"May",y:5500},{x:"Jun",y:6700}],xe={title:"Data Visualization/AreaChart",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{smooth:{control:"boolean"},showGrid:{control:"boolean"},showLabels:{control:"boolean"},fillOpacity:{control:"number",min:0,max:1,step:.1}}},l={args:{data:n,showGrid:!0,showLabels:!0}},i={args:{data:n,smooth:!0,showGrid:!0,showLabels:!0}},c={args:{data:ue,fillColor:"var(--status-success)",lineColor:"var(--status-success)",fillOpacity:.3,showGrid:!0,showLabels:!0}},u={args:{data:n,fillOpacity:.5,smooth:!0,showGrid:!0,showLabels:!0}},d={args:{data:n,smooth:!0,showGrid:!1,showLabels:!0}},p={args:{data:n,fillColor:"var(--status-warning)",lineColor:"var(--status-warning)",fillOpacity:.25,smooth:!0,showGrid:!0,showLabels:!0}};var L,v,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    showGrid: true,
    showLabels: true
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,D,G;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var q,j,S;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: salesData,
    fillColor: 'var(--status-success)',
    lineColor: 'var(--status-success)',
    fillOpacity: 0.3,
    showGrid: true,
    showLabels: true
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,A,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    fillOpacity: 0.5,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(O=(A=u.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var V,N,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    smooth: true,
    showGrid: false,
    showLabels: true
  }
}`,...(H=(N=d.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var W,Y,$;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    fillColor: 'var(--status-warning)',
    lineColor: 'var(--status-warning)',
    fillOpacity: 0.25,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...($=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const ge=["Default","Smooth","Sales","HighOpacity","NoGrid","Warning"];export{l as Default,u as HighOpacity,d as NoGrid,c as Sales,i as Smooth,p as Warning,ge as __namedExportsOrder,xe as default};
