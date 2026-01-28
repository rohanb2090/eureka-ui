import{j as r}from"./jsx-runtime-Blucd9Qg.js";import{c as G}from"./cn-CytzSlOG.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";function B({value:f,min:n=0,max:p=100,label:h,unit:v,thresholds:o,color:w="var(--action-primary)",size:e=200,className:D}){const a=e*.1,t=e/2-a,s=e/2,g=Math.min(Math.max(f,n),p),V=(g-n)/(p-n)*100,l=Math.PI*t,A=`${l} ${l}`,L=l-V/100*l;let x=w;if(o){const c=[...o].sort((i,b)=>b.value-i.value).find(i=>g>=i.value);c&&(x=c.color)}return r.jsx("div",{className:G("flex flex-col items-center gap-2",D),children:r.jsxs("div",{className:"relative",style:{width:e,height:e/2+20},children:[r.jsxs("svg",{width:e,height:e/2+20,viewBox:`0 0 ${e} ${e/2+20}`,children:[r.jsx("path",{d:`M ${a},${s} A ${t},${t} 0 0,1 ${e-a},${s}`,fill:"none",stroke:"var(--bg-subtle)",strokeWidth:a,strokeLinecap:"butt"}),r.jsx("path",{d:`M ${a},${s} A ${t},${t} 0 0,1 ${e-a},${s}`,fill:"none",stroke:x,strokeWidth:a,strokeDasharray:A,strokeDashoffset:L,strokeLinecap:"butt",className:"transition-all duration-700 ease-out"}),o&&o.map((y,c)=>{const $=(180-(y.value-n)/(p-n)*180)*Math.PI/180,P=s+t*Math.cos($),_=s-t*Math.sin($);return r.jsx("circle",{cx:P,cy:_,r:2,fill:"var(--bg-surface)",stroke:"var(--border-strong)",strokeWidth:1},c)})]}),r.jsxs("div",{className:"absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end h-full",children:[r.jsxs("span",{className:"text-3xl font-bold text-[var(--text-primary)]",children:[f,v&&r.jsx("span",{className:"text-sm font-normal text-[var(--text-tertiary)] ml-0.5",children:v})]}),h&&r.jsx("span",{className:"text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider",children:h})]})]})})}B.__docgenInfo={description:"",methods:[],displayName:"GaugeChart",props:{value:{required:!0,tsType:{name:"number"},description:"Current value"},min:{required:!1,tsType:{name:"number"},description:"Minimum value (default 0)",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value (default 100)",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the gauge"},unit:{required:!1,tsType:{name:"string"},description:'Unit (e.g., "%", "ms")'},thresholds:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    color: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}}]}}],raw:`{
    value: number;
    color: string;
}[]`},description:"Optional thresholds for color segments"},color:{required:!1,tsType:{name:"string"},description:"Default color if no threshold matches",defaultValue:{value:"'var(--action-primary)'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Size of the gauge in pixels (default: 200)",defaultValue:{value:"200",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Data Visualization/GaugeChart",component:B,tags:["autodocs"]},u={args:{label:"System Load",value:65,unit:"%"}},m={args:{label:"Temperature",value:92,max:100,unit:"°C",thresholds:[{value:0,color:"#51CF66"},{value:70,color:"#FF922B"},{value:90,color:"#FF6B6B"}]}},d={args:{label:"Current Speed",value:120,min:0,max:240,unit:" km/h",color:"#339AF0"}};var j,k,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'System Load',
    value: 65,
    unit: '%'
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var C,F,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    value: 92,
    max: 100,
    unit: '°C',
    thresholds: [{
      value: 0,
      color: '#51CF66'
    }, {
      value: 70,
      color: '#FF922B'
    }, {
      value: 90,
      color: '#FF6B6B'
    }]
  }
}`,...(q=(F=m.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var M,S,N;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Current Speed',
    value: 120,
    min: 0,
    max: 240,
    unit: ' km/h',
    color: '#339AF0'
  }
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const U=["Default","Critical","Speedometer"];export{m as Critical,u as Default,d as Speedometer,U as __namedExportsOrder,R as default};
