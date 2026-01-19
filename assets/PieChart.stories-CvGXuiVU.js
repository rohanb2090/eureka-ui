import{j as s}from"./jsx-runtime-DF2Pcvd1.js";import{r as l}from"./index-B2-qRKKC.js";import{a as O}from"./cn-Dj5kSLHa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q=["var(--action-primary)","var(--status-success)","var(--status-warning)","var(--status-error)","var(--status-info)"];function me(L){const{data:t,variant:r="pie"}=L,[S,h]=l.useState(null),o=l.useMemo(()=>t.reduce((e,a)=>e+a.value,0),[t]),c=l.useMemo(()=>{if(o===0)return[];let e=-90;return t.map((a,oe)=>{const le=a.value/o*100,j=a.value/o*360,k=e,M=e+j,n=100,u=r==="donut"?60:0,g=k*Math.PI/180,v=M*Math.PI/180,A=100+n*Math.cos(g),T=100+n*Math.sin(g),R=100+n*Math.cos(v),I=100+n*Math.sin(v),D=j>180?1:0;let N;if(r==="donut"){const ce=100+u*Math.cos(g),ue=100+u*Math.sin(g),ie=100+u*Math.cos(v),de=100+u*Math.sin(v);N=[`M ${A} ${T}`,`A ${n} ${n} 0 ${D} 1 ${R} ${I}`,`L ${ie} ${de}`,`A ${u} ${u} 0 ${D} 0 ${ce} ${ue}`,"Z"].join(" ")}else N=["M 100 100",`L ${A} ${T}`,`A ${n} ${n} 0 ${D} 1 ${R} ${I}`,"Z"].join(" ");return e=M,{startAngle:k,endAngle:M,value:a.value,percentage:le,label:a.label,color:a.color||q[oe%q.length],path:N}})},[t,o,r]),i=l.useCallback(e=>{h(e)},[]),d=l.useCallback(()=>{h(null)},[]),C=l.useCallback(e=>{const a=c[e];return{tabIndex:0,role:"graphics-symbol","aria-label":`${a.label}: ${a.value} (${a.percentage.toFixed(1)}%)`,onMouseEnter:()=>i(e),onMouseLeave:d,onFocus:()=>i(e),onBlur:d}},[c,i,d]),m=l.useMemo(()=>({role:"img","aria-label":`${r==="donut"?"Donut":"Pie"} chart with ${t.length} segments`}),[t.length,r]);return{segments:c,total:o,chartProps:m,getSegmentProps:C,hoveredIndex:S}}function ne({data:L,variant:t="pie",size:r=200,showLabels:S=!0,showPercentages:h=!0,className:o}){const{segments:c,total:i,chartProps:d,getSegmentProps:C,hoveredIndex:m}=me({data:L,variant:t});return s.jsxs("div",{className:O("inline-flex flex-col items-center gap-4",o),children:[s.jsxs("svg",{...d,width:r,height:r,viewBox:"0 0 200 200",className:"select-none",children:[c.map((e,a)=>s.jsx("path",{...C(a),d:e.path,fill:e.color,className:O("transition-opacity cursor-pointer","focus:outline-none focus:ring-2 focus:ring-border-focus",m!==null&&m!==a&&"opacity-50"),style:{transform:m===a?"scale(1.05)":"scale(1)",transformOrigin:"100px 100px",transition:"transform 200ms, opacity 200ms"}},`segment-${a}`)),t==="donut"&&s.jsx("text",{x:"100",y:"105",textAnchor:"middle",className:"text-2xl font-bold pointer-events-none",fill:"var(--text-primary)",children:i})]}),S&&s.jsx("div",{className:"flex flex-wrap gap-3 justify-center max-w-xs",children:c.map((e,a)=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:e.color}}),s.jsxs("span",{className:"text-sm text-text-secondary",children:[e.label,h&&s.jsxs("span",{className:"text-text-tertiary ml-1",children:["(",e.percentage.toFixed(1),"%)"]})]})]},`legend-${a}`))})]})}ne.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"PieChartDataPoint"}],raw:"PieChartDataPoint[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'pie' | 'donut'",elements:[{name:"literal",value:"'pie'"},{name:"literal",value:"'donut'"}]},description:"",defaultValue:{value:"'pie'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPercentages:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const p=[{label:"Product A",value:35},{label:"Product B",value:25},{label:"Product C",value:20},{label:"Product D",value:15},{label:"Others",value:5}],pe=[{label:"Salaries",value:45e3,color:"var(--action-primary)"},{label:"Marketing",value:2e4,color:"var(--status-info)"},{label:"Operations",value:15e3,color:"var(--status-success)"},{label:"R&D",value:12e3,color:"var(--status-warning)"},{label:"Other",value:8e3,color:"var(--status-error)"}],fe={title:"Components/PieChart",component:ne,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["pie","donut"]},showLabels:{control:"boolean"},showPercentages:{control:"boolean"},size:{control:"number",min:100,max:400}}},b={args:{data:p,variant:"pie",showLabels:!0,showPercentages:!0}},f={args:{data:p,variant:"donut",showLabels:!0,showPercentages:!0}},x={args:{data:pe,variant:"donut",showLabels:!0,showPercentages:!0}},w={args:{data:p,variant:"pie",showLabels:!0,showPercentages:!1}},P={args:{data:p,variant:"donut",showLabels:!1}},$={args:{data:p,variant:"donut",size:300,showLabels:!0,showPercentages:!0}},y={args:{data:[{label:"Completed",value:75},{label:"Remaining",value:25}],variant:"donut",showLabels:!0,showPercentages:!0}};var E,_,F;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'pie',
    showLabels: true,
    showPercentages: true
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var V,z,B;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'donut',
    showLabels: true,
    showPercentages: true
  }
}`,...(B=(z=f.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var W,Z,H;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: expenseData,
    variant: 'donut',
    showLabels: true,
    showPercentages: true
  }
}`,...(H=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var U,G,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'pie',
    showLabels: true,
    showPercentages: false
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'donut',
    showLabels: false
  }
}`,...(X=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    variant: 'donut',
    size: 300,
    showLabels: true,
    showPercentages: true
  }
}`,...(ae=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const xe=["Pie","Donut","WithCustomColors","NoPercentages","NoLabels","Large","TwoSegments"];export{f as Donut,$ as Large,P as NoLabels,w as NoPercentages,b as Pie,y as TwoSegments,x as WithCustomColors,xe as __namedExportsOrder,fe as default};
