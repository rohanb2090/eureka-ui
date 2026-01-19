import{j as s}from"./jsx-runtime-DF2Pcvd1.js";import{r as i}from"./index-B2-qRKKC.js";import{a as I}from"./cn-Dj5kSLHa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const oe=400,le=300,c={top:20,right:20,bottom:40,left:60};function ne(A){const{data:a,orientation:G="vertical",maxValue:m,showGrid:p=!0,gridLines:v=5}=A,[B,b]=i.useState(null),o=i.useMemo(()=>m!==void 0?m:Math.max(...a.map(e=>e.value),0),[a,m]),f=oe-c.left-c.right,h=le-c.top-c.bottom,g=i.useMemo(()=>{const e=a.length,t=8;if(G==="vertical"){const d=t*(e-1),y=(f-d)/e;return a.map((n,W)=>{const C=n.value/o*h;return{x:c.left+W*(y+t),y:c.top+(h-C),width:y,height:C,value:n.value,label:n.label,color:n.color||"var(--action-primary)"}})}else{const d=t*(e-1),y=(h-d)/e;return a.map((n,W)=>{const C=n.value/o*f;return{x:c.left,y:c.top+W*(y+t),width:C,height:y,value:n.value,label:n.label,color:n.color||"var(--action-primary)"}})}},[a,G,o,f,h]),k=i.useMemo(()=>{if(!p)return[];const e=[];for(let t=0;t<=v;t++)e.push(o/v*t);return e},[p,v,o]),x=i.useCallback(e=>{b(e)},[]),u=i.useCallback(()=>{b(null)},[]),L=i.useCallback(e=>{const t=g[e];return{tabIndex:0,role:"graphics-symbol","aria-label":`${t.label}: ${t.value}`,onMouseEnter:()=>x(e),onMouseLeave:u,onFocus:()=>x(e),onBlur:u}},[g,x,u]),l=i.useMemo(()=>({role:"img","aria-label":`Bar chart with ${a.length} bars`}),[a.length]);return{bars:g,maxValue:o,chartProps:l,getBarProps:L,gridLines:k,hoveredIndex:B}}const ie=400,ce=300,r={top:20,right:20,bottom:40,left:60};function se({data:A,orientation:a="vertical",maxValue:G,showGrid:m=!0,gridLines:p=5,showLabels:v=!0,className:B,width:b=ie,height:o=ce}){const{bars:f,maxValue:h,chartProps:g,getBarProps:k,gridLines:x,hoveredIndex:u}=ne({data:A,orientation:a,maxValue:G,showGrid:m,gridLines:p}),L=b-r.left-r.right,l=o-r.top-r.bottom;return s.jsx("div",{className:I("inline-block",B),children:s.jsxs("svg",{...g,width:b,height:o,className:"select-none",style:{overflow:"visible"},children:[m&&x.map((e,t)=>{const d=a==="vertical"?r.top+l-e/h*l:r.top+t/p*l;return s.jsxs("g",{children:[s.jsx("line",{x1:r.left,y1:d,x2:r.left+L,y2:d,stroke:"var(--border-subtle)",strokeWidth:"1",strokeDasharray:"4 2"}),a==="vertical"&&s.jsx("text",{x:r.left-8,y:d+4,textAnchor:"end",className:"text-xs",fill:"var(--text-secondary)",children:Math.round(e)})]},`grid-${t}`)}),f.map((e,t)=>s.jsxs("g",{children:[s.jsx("rect",{...k(t),x:e.x,y:e.y,width:e.width,height:e.height,fill:e.color,className:I("transition-opacity cursor-pointer","focus:outline-none focus:ring-2 focus:ring-border-focus",u!==null&&u!==t&&"opacity-50"),rx:a==="vertical"?2:0,ry:a==="vertical"?2:0}),v&&s.jsx("text",{x:a==="vertical"?e.x+e.width/2:r.left-8,y:a==="vertical"?r.top+l+20:e.y+e.height/2+4,textAnchor:a==="vertical"?"middle":"end",className:"text-xs pointer-events-none",fill:"var(--text-secondary)",children:e.label}),u===t&&s.jsx("text",{x:a==="vertical"?e.x+e.width/2:e.x+e.width+8,y:a==="vertical"?e.y-8:e.y+e.height/2+4,textAnchor:a==="vertical"?"middle":"start",className:"text-sm font-medium pointer-events-none",fill:"var(--text-primary)",children:e.value})]},`bar-${t}`)),s.jsx("line",{x1:r.left,y1:r.top+l,x2:r.left+L,y2:r.top+l,stroke:"var(--border-default)",strokeWidth:"2"}),s.jsx("line",{x1:r.left,y1:r.top,x2:r.left,y2:r.top+l,stroke:"var(--border-default)",strokeWidth:"2"})]})})}se.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataPoint"}],raw:"ChartDataPoint[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},maxValue:{required:!1,tsType:{name:"number"},description:""},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gridLines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const w=[{label:"Jan",value:45},{label:"Feb",value:52},{label:"Mar",value:61},{label:"Apr",value:48},{label:"May",value:67},{label:"Jun",value:71}],ue=[{label:"Electronics",value:234,color:"var(--status-info)"},{label:"Clothing",value:189,color:"var(--status-success)"},{label:"Food",value:156,color:"var(--status-warning)"},{label:"Books",value:98,color:"var(--action-primary)"}],ve={title:"Components/BarChart",component:se,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},showGrid:{control:"boolean"},showLabels:{control:"boolean"},gridLines:{control:"number",min:2,max:10}}},D={args:{data:w,orientation:"vertical",showGrid:!0,showLabels:!0}},H={args:{data:w,orientation:"horizontal",showGrid:!0,showLabels:!0}},T={args:{data:ue,orientation:"vertical",showGrid:!0,showLabels:!0}},V={args:{data:w,orientation:"vertical",showGrid:!1,showLabels:!0}},M={args:{data:w,orientation:"vertical",showGrid:!0,showLabels:!1}},N={args:{data:w,orientation:"vertical",maxValue:100,showGrid:!0,showLabels:!0}},j={args:{data:[{label:"A",value:25},{label:"B",value:18},{label:"C",value:32}],orientation:"vertical",showGrid:!0,showLabels:!0}};var S,q,E;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: true
  }
}`,...(E=(q=D.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var P,_,$;H.parameters={...H.parameters,docs:{...(P=H.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'horizontal',
    showGrid: true,
    showLabels: true
  }
}`,...($=(_=H.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,R,F;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: true
  }
}`,...(F=(R=T.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var J,O,K;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: false,
    showLabels: true
  }
}`,...(K=(O=V.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var Q,U,X;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    showGrid: true,
    showLabels: false
  }
}`,...(X=(U=M.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data: salesData,
    orientation: 'vertical',
    maxValue: 100,
    showGrid: true,
    showLabels: true
  }
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const be=["Vertical","Horizontal","WithColors","NoGrid","NoLabels","CustomMaxValue","SmallDataset"];export{N as CustomMaxValue,H as Horizontal,V as NoGrid,M as NoLabels,j as SmallDataset,D as Vertical,T as WithColors,be as __namedExportsOrder,ve as default};
