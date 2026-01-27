import{B}from"./BarChart-bEdmaXZG.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useBarChart-B_hYUnMB.js";import"./cn-CytzSlOG.js";import"./useChartTheme-DtcSC9jR.js";const a=[{label:"Jan",value:45},{label:"Feb",value:52},{label:"Mar",value:61},{label:"Apr",value:48},{label:"May",value:67},{label:"Jun",value:71}],M=[{label:"Electronics",value:234,color:"var(--status-info)"},{label:"Clothing",value:189,color:"var(--status-success)"},{label:"Food",value:156,color:"var(--status-warning)"},{label:"Books",value:98,color:"var(--action-primary)"}],_={title:"Data Visualization/BarChart",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},showGrid:{control:"boolean"},showLabels:{control:"boolean"},gridLines:{control:"number",min:2,max:10}}},e={args:{data:a,orientation:"vertical",showGrid:!0,showLabels:!0}},r={args:{data:a,orientation:"horizontal",showGrid:!0,showLabels:!0}},o={args:{data:M,orientation:"vertical",showGrid:!0,showLabels:!0}},t={args:{data:a,orientation:"vertical",showGrid:!1,showLabels:!0}},s={args:{data:a,orientation:"vertical",showGrid:!0,showLabels:!1}},n={args:{data:a,orientation:"vertical",maxValue:100,showGrid:!0,showLabels:!0}},l={args:{data:[{label:"A",value:25},{label:"B",value:18},{label:"C",value:32}],orientation:"vertical",showGrid:!0,showLabels:!0}};var i,c,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: true
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'horizontal',
    showGrid: true,
    showLabels: true
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,b,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: true
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,g,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: false,
    showLabels: true
  }
}`,...(L=(g=t.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var G,D,C;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: false
  }
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,f,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    maxValue: 100,
    showGrid: true,
    showLabels: true
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var V,y,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'A',
      value: 25
    }, {
      label: 'B',
      value: 18
    }, {
      label: 'C',
      value: 32
    }],
    orientation: 'vertical',
    showGrid: true,
    showLabels: true
  }
}`,...(z=(y=l.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const k=["Vertical","Horizontal","WithColors","NoGrid","NoLabels","CustomMaxValue","SmallDataset"];export{n as CustomMaxValue,r as Horizontal,t as NoGrid,s as NoLabels,l as SmallDataset,e as Vertical,o as WithColors,k as __namedExportsOrder,_ as default};
