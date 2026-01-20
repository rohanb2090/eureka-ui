import{L as D}from"./LineChart-D7VjfI2Z.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLineChart-gvCLjaeN.js";import"./cn-CytzSlOG.js";const e=[{x:"Mon",y:22},{x:"Tue",y:24},{x:"Wed",y:19},{x:"Thu",y:27},{x:"Fri",y:25},{x:"Sat",y:29},{x:"Sun",y:23}],v=[{x:"Jan",y:45e3},{x:"Feb",y:52e3},{x:"Mar",y:48e3},{x:"Apr",y:61e3},{x:"May",y:55e3},{x:"Jun",y:67e3}],J={title:"Components/LineChart",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{smooth:{control:"boolean"},showPoints:{control:"boolean"},showGrid:{control:"boolean"},showLabels:{control:"boolean"},gridLines:{control:"number",min:2,max:10}}},s={args:{data:e,showPoints:!0,showGrid:!0,showLabels:!0}},r={args:{data:e,smooth:!0,showPoints:!0,showGrid:!0,showLabels:!0}},o={args:{data:e,showPoints:!1,showGrid:!0,showLabels:!0}},t={args:{data:v,showPoints:!0,showGrid:!0,showLabels:!0,lineColor:"var(--status-success)",pointColor:"var(--status-success)"}},a={args:{data:e,showPoints:!0,showGrid:!1,showLabels:!0}},n={args:{data:e,smooth:!0,showPoints:!1,showGrid:!0,showLabels:!0}};var u,i,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    showPoints: true,
    showGrid: true,
    showLabels: true
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,h,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    smooth: true,
    showPoints: true,
    showGrid: true,
    showLabels: true
  }
}`,...(d=(h=r.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var l,p,w;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    showPoints: false,
    showGrid: true,
    showLabels: true
  }
}`,...(w=(p=o.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var g,b,L;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    showPoints: true,
    showGrid: true,
    showLabels: true,
    lineColor: 'var(--status-success)',
    pointColor: 'var(--status-success)'
  }
}`,...(L=(b=t.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var P,x,y;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    showPoints: true,
    showGrid: false,
    showLabels: true
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var G,S,f;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    smooth: true,
    showPoints: false,
    showGrid: true,
    showLabels: true
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const R=["Default","Smooth","WithoutPoints","Revenue","NoGrid","SmoothNoPoints"];export{s as Default,a as NoGrid,t as Revenue,r as Smooth,n as SmoothNoPoints,o as WithoutPoints,R as __namedExportsOrder,J as default};
