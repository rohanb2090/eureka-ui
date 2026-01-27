import{M as p}from"./MeterChart-DZtmnnfu.js";import"./jsx-runtime-Blucd9Qg.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";const F={title:"Data Visualization/MeterChart",component:p,tags:["autodocs"]},a={args:{label:"Storage Usage",value:45,max:100,unit:"GB"}},e={args:{label:"System CPU",value:85,max:100,unit:"%",thresholds:[{value:0,color:"#51CF66",label:"Healthy"},{value:70,color:"#FF922B",label:"Warning"},{value:90,color:"#FF6B6B",label:"Critical"}]}},r={args:{label:"Project Completion",value:12,max:20,unit:" tasks",color:"#339AF0"}};var o,s,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Storage Usage',
    value: 45,
    max: 100,
    unit: 'GB'
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'System CPU',
    value: 85,
    max: 100,
    unit: '%',
    thresholds: [{
      value: 0,
      color: '#51CF66',
      label: 'Healthy'
    }, {
      value: 70,
      color: '#FF922B',
      label: 'Warning'
    }, {
      value: 90,
      color: '#FF6B6B',
      label: 'Critical'
    }]
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,i,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Project Completion',
    value: 12,
    max: 20,
    unit: ' tasks',
    color: '#339AF0'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["Default","WithThresholds","Progress"];export{a as Default,r as Progress,e as WithThresholds,C as __namedExportsOrder,F as default};
