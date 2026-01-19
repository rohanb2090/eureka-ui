import{j as t}from"./jsx-runtime-DF2Pcvd1.js";import{u as se}from"./useLineChart-CWIrXZOY.js";import{c as b}from"./cn-CytzSlOG.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ae=400,oe=300,e={top:20,right:20,bottom:40,left:60};function M({data:R,maxY:_,minY:I,smooth:E=!1,showPoints:F=!0,showGrid:p=!0,gridLines:J=5,showLabels:$=!0,lineColor:z="var(--action-primary)",pointColor:O="var(--action-primary)",className:B,width:h=ae,height:f=oe}){const{pathData:K,points:Q,maxY:U,minY:x,chartProps:X,getPointProps:Z,gridLines:ee,hoveredIndex:y}=se({data:R,maxY:_,minY:I,smooth:E,showGrid:p,gridLines:J}),w=h-e.left-e.right,s=f-e.top-e.bottom,te=U-x||1;return t.jsx("div",{className:b("inline-block",B),children:t.jsxs("svg",{...X,width:h,height:f,className:"select-none",style:{overflow:"visible"},children:[p&&ee.map((r,a)=>{const re=(r-x)/te,m=e.top+s-re*s;return t.jsxs("g",{children:[t.jsx("line",{x1:e.left,y1:m,x2:e.left+w,y2:m,stroke:"var(--border-subtle)",strokeWidth:"1",strokeDasharray:"4 2"}),t.jsx("text",{x:e.left-8,y:m+4,textAnchor:"end",className:"text-xs pointer-events-none",fill:"var(--text-secondary)",children:Math.round(r)})]},`grid-${a}`)}),t.jsx("path",{d:K,fill:"none",stroke:z,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),F&&Q.map((r,a)=>t.jsxs("g",{children:[t.jsx("circle",{...Z(a),cx:r.x,cy:r.y,r:y===a?6:4,fill:"white",stroke:O,strokeWidth:"2",className:b("transition-all cursor-pointer","focus:outline-none focus:ring-2 focus:ring-border-focus")}),$&&t.jsx("text",{x:r.x,y:e.top+s+20,textAnchor:"middle",className:"text-xs pointer-events-none",fill:"var(--text-secondary)",children:r.label}),y===a&&t.jsx("text",{x:r.x,y:r.y-12,textAnchor:"middle",className:"text-sm font-medium pointer-events-none",fill:"var(--text-primary)",children:r.value})]},`point-${a}`)),t.jsx("line",{x1:e.left,y1:e.top+s,x2:e.left+w,y2:e.top+s,stroke:"var(--border-default)",strokeWidth:"2"}),t.jsx("line",{x1:e.left,y1:e.top,x2:e.left,y2:e.top+s,stroke:"var(--border-default)",strokeWidth:"2"})]})})}M.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:""},maxY:{required:!1,tsType:{name:"number"},description:""},minY:{required:!1,tsType:{name:"number"},description:""},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPoints:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gridLines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},lineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},pointColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--action-primary)'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const o=[{x:"Mon",y:22},{x:"Tue",y:24},{x:"Wed",y:19},{x:"Thu",y:27},{x:"Fri",y:25},{x:"Sat",y:29},{x:"Sun",y:23}],ne=[{x:"Jan",y:45e3},{x:"Feb",y:52e3},{x:"Mar",y:48e3},{x:"Apr",y:61e3},{x:"May",y:55e3},{x:"Jun",y:67e3}],me={title:"Components/LineChart",component:M,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{smooth:{control:"boolean"},showPoints:{control:"boolean"},showGrid:{control:"boolean"},showLabels:{control:"boolean"},gridLines:{control:"number",min:2,max:10}}},n={args:{data:o,showPoints:!0,showGrid:!0,showLabels:!0}},i={args:{data:o,smooth:!0,showPoints:!0,showGrid:!0,showLabels:!0}},u={args:{data:o,showPoints:!1,showGrid:!0,showLabels:!0}},l={args:{data:ne,showPoints:!0,showGrid:!0,showLabels:!0,lineColor:"var(--status-success)",pointColor:"var(--status-success)"}},c={args:{data:o,showPoints:!0,showGrid:!1,showLabels:!0}},d={args:{data:o,smooth:!0,showPoints:!1,showGrid:!0,showLabels:!0}};var g,v,L;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    showPoints: true,
    showGrid: true,
    showLabels: true
  }
}`,...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var P,T,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    smooth: true,
    showPoints: true,
    showGrid: true,
    showLabels: true
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var G,j,C;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    showPoints: false,
    showGrid: true,
    showLabels: true
  }
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,q,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    showPoints: true,
    showGrid: true,
    showLabels: true,
    lineColor: 'var(--status-success)',
    pointColor: 'var(--status-success)'
  }
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var S,V,W;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    showPoints: true,
    showGrid: false,
    showLabels: true
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var A,Y,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: temperatureData,
    smooth: true,
    showPoints: false,
    showGrid: true,
    showLabels: true
  }
}`,...(H=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const pe=["Default","Smooth","WithoutPoints","Revenue","NoGrid","SmoothNoPoints"];export{n as Default,c as NoGrid,l as Revenue,i as Smooth,d as SmoothNoPoints,u as WithoutPoints,pe as __namedExportsOrder,me as default};
