import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{c as B}from"./cn-CytzSlOG.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";function T({value:o,max:i=100,label:u,unit:c,thresholds:a,color:F="var(--action-primary)",className:N,showValue:d=!0}){const q=Math.min(Math.max(o/i*100,0),100);let p=F;if(a){const t=[...a].sort((m,w)=>w.value-m.value).find(m=>o>=m.value);t&&(p=t.color)}return e.jsxs("div",{className:B("flex flex-col gap-2 w-full",N),children:[(u||d)&&e.jsxs("div",{className:"flex justify-between items-baseline gap-2",children:[u&&e.jsx("span",{className:"text-sm font-medium text-[var(--text-secondary)]",children:u}),d&&e.jsxs("span",{className:"text-sm font-bold text-[var(--text-primary)]",children:[o,c&&e.jsx("span",{className:"ml-0.5 font-normal text-[var(--text-tertiary)]",children:c}),e.jsxs("span",{className:"ml-1 font-normal text-[var(--text-tertiary)]",children:["/ ",i,c]})]})]}),e.jsx("div",{className:"relative h-2 w-full bg-[var(--bg-subtle)] overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full transition-all duration-500 ease-out",style:{width:`${q}%`,backgroundColor:p}})}),a&&e.jsx("div",{className:"flex justify-between mt-1 h-1 w-full relative",children:a.map((r,t)=>e.jsx("div",{className:"absolute h-1 w-0.5 bg-[var(--border-strong)]",style:{left:`${r.value/i*100}%`},title:r.label||`${r.value}`},t))})]})}T.__docgenInfo={description:"",methods:[],displayName:"MeterChart",props:{value:{required:!0,tsType:{name:"number"},description:"Current value"},max:{required:!1,tsType:{name:"number"},description:"Maximum possible value",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the metric"},unit:{required:!1,tsType:{name:"string"},description:'Optional unit (e.g., "%", "GB")'},thresholds:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    color: string;
    label?: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}],raw:`{
    value: number;
    color: string;
    label?: string;
}[]`},description:"Optional thresholds for color coding"},color:{required:!1,tsType:{name:"string"},description:"Default bar color",defaultValue:{value:"'var(--action-primary)'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"Whether to show the value text",defaultValue:{value:"true",computed:!1}}}};const W={title:"Data Visualization/MeterChart",component:T,tags:["autodocs"]},s={args:{label:"Storage Usage",value:45,max:100,unit:"GB"}},l={args:{label:"System CPU",value:85,max:100,unit:"%",thresholds:[{value:0,color:"#51CF66",label:"Healthy"},{value:70,color:"#FF922B",label:"Warning"},{value:90,color:"#FF6B6B",label:"Critical"}]}},n={args:{label:"Project Completion",value:12,max:20,unit:" tasks",color:"#339AF0"}};var v,f,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Storage Usage',
    value: 45,
    max: 100,
    unit: 'GB'
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,b,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,j,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Project Completion',
    value: 12,
    max: 20,
    unit: ' tasks',
    color: '#339AF0'
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const D=["Default","WithThresholds","Progress"];export{s as Default,n as Progress,l as WithThresholds,D as __namedExportsOrder,W as default};
