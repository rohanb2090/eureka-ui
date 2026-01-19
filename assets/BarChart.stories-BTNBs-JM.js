import{B as z}from"./BarChart-C5otA4i6.js";import"./jsx-runtime-DF2Pcvd1.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";const a=[{label:"Jan",value:45},{label:"Feb",value:52},{label:"Mar",value:61},{label:"Apr",value:48},{label:"May",value:67},{label:"Jun",value:71}],M=[{label:"Electronics",value:234,color:"var(--status-info)"},{label:"Clothing",value:189,color:"var(--status-success)"},{label:"Food",value:156,color:"var(--status-warning)"},{label:"Books",value:98,color:"var(--action-primary)"}],J={title:"Components/BarChart",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},showGrid:{control:"boolean"},showLabels:{control:"boolean"},gridLines:{control:"number",min:2,max:10}}},e={args:{data:a,orientation:"vertical",showGrid:!0,showLabels:!0}},r={args:{data:a,orientation:"horizontal",showGrid:!0,showLabels:!0}},o={args:{data:M,orientation:"vertical",showGrid:!0,showLabels:!0}},t={args:{data:a,orientation:"vertical",showGrid:!1,showLabels:!0}},s={args:{data:a,orientation:"vertical",showGrid:!0,showLabels:!1}},n={args:{data:a,orientation:"vertical",maxValue:100,showGrid:!0,showLabels:!0}},l={args:{data:[{label:"A",value:25},{label:"B",value:18},{label:"C",value:32}],orientation:"vertical",showGrid:!0,showLabels:!0}};var i,c,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(L=(g=t.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var G,C,D;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: false
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,f,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    maxValue: 100,
    showGrid: true,
    showLabels: true
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,B,V;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const W=["Vertical","Horizontal","WithColors","NoGrid","NoLabels","CustomMaxValue","SmallDataset"];export{n as CustomMaxValue,r as Horizontal,t as NoGrid,s as NoLabels,l as SmallDataset,e as Vertical,o as WithColors,W as __namedExportsOrder,J as default};
