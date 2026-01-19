import{P as y}from"./PieChart-D10C6Pr2.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";const e=[{label:"Product A",value:35},{label:"Product B",value:25},{label:"Product C",value:20},{label:"Product D",value:15},{label:"Others",value:5}],z=[{label:"Salaries",value:45e3,color:"var(--action-primary)"},{label:"Marketing",value:2e4,color:"var(--status-info)"},{label:"Operations",value:15e3,color:"var(--status-success)"},{label:"R&D",value:12e3,color:"var(--status-warning)"},{label:"Other",value:8e3,color:"var(--status-error)"}],B={title:"Components/PieChart",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["pie","donut"]},showLabels:{control:"boolean"},showPercentages:{control:"boolean"},size:{control:"number",min:100,max:400}}},a={args:{data:e,variant:"pie",showLabels:!0,showPercentages:!0}},r={args:{data:e,variant:"donut",showLabels:!0,showPercentages:!0}},s={args:{data:z,variant:"donut",showLabels:!0,showPercentages:!0}},t={args:{data:e,variant:"pie",showLabels:!0,showPercentages:!1}},o={args:{data:e,variant:"donut",showLabels:!1}},n={args:{data:e,variant:"donut",size:300,showLabels:!0,showPercentages:!0}},l={args:{data:[{label:"Completed",value:75},{label:"Remaining",value:25}],variant:"donut",showLabels:!0,showPercentages:!0}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'pie',
    showLabels: true,
    showPercentages: true
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'donut',
    showLabels: true,
    showPercentages: true
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: expenseData,
    variant: 'donut',
    showLabels: true,
    showPercentages: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,w,P;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'pie',
    showLabels: true,
    showPercentages: false
  }
}`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var L,S,D;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'donut',
    showLabels: false
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var C,f,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'donut',
    size: 300,
    showLabels: true,
    showPercentages: true
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,N,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'Completed',
      value: 75
    }, {
      label: 'Remaining',
      value: 25
    }],
    variant: 'donut',
    showLabels: true,
    showPercentages: true
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const E=["Pie","Donut","WithCustomColors","NoPercentages","NoLabels","Large","TwoSegments"];export{r as Donut,n as Large,o as NoLabels,t as NoPercentages,a as Pie,l as TwoSegments,s as WithCustomColors,E as __namedExportsOrder,B as default};
