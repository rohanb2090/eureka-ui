import{A as O}from"./AreaChart-BDnmSkx2.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLineChart-C0b-Qqqg.js";import"./cn-CytzSlOG.js";import"./useChartTheme-DTpb8nho.js";const a=[{x:"00:00",y:120},{x:"04:00",y:80},{x:"08:00",y:240},{x:"12:00",y:380},{x:"16:00",y:320},{x:"20:00",y:200},{x:"23:59",y:150}],S=[{x:"Jan",y:4500},{x:"Feb",y:5200},{x:"Mar",y:4800},{x:"Apr",y:6100},{x:"May",y:5500},{x:"Jun",y:6700}],_={title:"Data Visualization/AreaChart",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{smooth:{control:"boolean"},showGrid:{control:"boolean"},showLabels:{control:"boolean"},fillOpacity:{control:"number",min:0,max:1,step:.1}}},r={args:{data:a,showGrid:!0,showLabels:!0}},s={args:{data:a,smooth:!0,showGrid:!0,showLabels:!0}},t={args:{data:S,fillColor:"var(--status-success)",lineColor:"var(--status-success)",fillOpacity:.3,showGrid:!0,showLabels:!0}},o={args:{data:a,fillOpacity:.5,smooth:!0,showGrid:!0,showLabels:!0}},e={args:{data:a,smooth:!0,showGrid:!1,showLabels:!0}},n={args:{data:a,fillColor:"var(--status-warning)",lineColor:"var(--status-warning)",fillOpacity:.25,smooth:!0,showGrid:!0,showLabels:!0}};var i,c,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    showGrid: true,
    showLabels: true
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,w;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: salesData,
    fillColor: 'var(--status-success)',
    lineColor: 'var(--status-success)',
    fillOpacity: 0.3,
    showGrid: true,
    showLabels: true
  }
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    fillOpacity: 0.5,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,G;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    smooth: true,
    showGrid: false,
    showLabels: true
  }
}`,...(G=(x=e.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var L,D,C;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: trafficData,
    fillColor: 'var(--status-warning)',
    lineColor: 'var(--status-warning)',
    fillOpacity: 0.25,
    smooth: true,
    showGrid: true,
    showLabels: true
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const z=["Default","Smooth","Sales","HighOpacity","NoGrid","Warning"];export{r as Default,o as HighOpacity,e as NoGrid,t as Sales,s as Smooth,n as Warning,z as __namedExportsOrder,_ as default};
