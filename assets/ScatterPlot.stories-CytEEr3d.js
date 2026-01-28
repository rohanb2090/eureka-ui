import{j as s}from"./jsx-runtime-Blucd9Qg.js";import{r as T}from"./index-CcKhGcwW.js";import{c as B}from"./cn-CytzSlOG.js";import{u as R}from"./useChartTheme-CFbgSgLJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U=400,O=300,m={top:20,right:40,bottom:40,left:60};function J(P){const{data:i,xMin:y,xMax:b,yMin:M,yMax:h,width:L=U,height:D=O}=P,[k,j]=T.useState(null),o=y!==void 0?y:Math.min(...i.map(a=>a.x),0),l=b!==void 0?b:Math.max(...i.map(a=>a.x),10),t=M!==void 0?M:Math.min(...i.map(a=>a.y),0),x=h!==void 0?h:Math.max(...i.map(a=>a.y),10),F=L-m.left-m.right,f=D-m.top-m.bottom,S=T.useMemo(()=>i.map((a,r)=>{const A=(a.x-o)/(l-o),u=(a.y-t)/(x-t);return{...a,id:a.id||`point-${r}`,cx:m.left+A*F,cy:m.top+f-u*f,r:a.size||5}}),[i,o,l,t,x,F,f]),H=T.useMemo(()=>{const a=[];for(let r=0;r<=5;r++)a.push(o+(l-o)*(r/5));return a},[o,l]),q=T.useMemo(()=>{const a=[];for(let r=0;r<=5;r++)a.push(t+(x-t)*(r/5));return a},[t,x]);return{points:S,xTicks:H,yTicks:q,xMin:o,xMax:l,yMin:t,yMax:x,hoveredPoint:k,setHoveredPoint:j}}const K=450,Q=350,e={top:20,right:40,bottom:50,left:60};function G({data:P,xLabel:i,yLabel:y,xMin:b,xMax:M,yMin:h,yMax:L,showGrid:D=!0,showYAxis:k=!0,className:j,width:o=K,height:l=Q}){const t=R(),{points:x,xTicks:F,yTicks:f,xMin:S,xMax:H,yMin:q,yMax:a,hoveredPoint:r,setHoveredPoint:A}=J({data:P,xMin:b,xMax:M,yMin:h,yMax:L,width:o,height:l}),u=o-e.left-e.right,c=l-e.top-e.bottom,N=S??0,V=H??10,z=q??0,Y=a??10,$=n=>!n||n.includes("var(--action-primary)")?t.actionPrimary:n.includes("var(--status-success)")?t.statusSuccess:n.includes("var(--status-warning)")?t.statusWarning:n.includes("var(--status-error)")?t.statusError:n.includes("var(--status-info)")?t.statusInfo:n;return s.jsx("div",{className:B("inline-block bg-bg-surface p-4",j),style:{backgroundColor:t.bgSurface},children:s.jsxs("svg",{width:o,height:l,className:"select-none",style:{overflow:"visible"},children:[f.map((n,d)=>{const E=(n-z)/(Y-z||1),p=e.top+c-E*c;return s.jsxs("g",{children:[D&&s.jsx("line",{x1:e.left,y1:p,x2:e.left+u,y2:p,stroke:t.borderSubtle,strokeWidth:"1",strokeDasharray:"4 2"}),k&&s.jsx("text",{x:e.left-8,y:p+4,textAnchor:"end",className:"text-[10px]",fill:t.textSecondary,style:{fontFamily:"inherit"},children:n.toFixed(1)})]},`y-${d}`)}),F.map((n,d)=>{const E=(n-N)/(V-N||1),p=e.left+E*u;return s.jsx("g",{children:s.jsx("text",{x:p,y:e.top+c+20,textAnchor:"middle",className:"text-[10px]",fill:t.textSecondary,style:{fontFamily:"inherit"},children:n.toFixed(1)})},`x-${d}`)}),x.map(n=>{const d=r===n.id;return s.jsx("circle",{cx:n.cx,cy:n.cy,r:d?n.r+2:n.r,fill:$(n.color),className:B("transition-all duration-150 cursor-pointer",r&&!d&&"opacity-30"),onMouseEnter:()=>A(n.id),onMouseLeave:()=>A(null)},n.id)}),s.jsx("line",{x1:e.left,y1:e.top+c,x2:e.left+u,y2:e.top+c,stroke:t.borderDefault,strokeWidth:"2"}),s.jsx("line",{x1:e.left,y1:e.top,x2:e.left,y2:e.top+c,stroke:t.borderDefault,strokeWidth:"2"}),i&&s.jsx("text",{x:e.left+u/2,y:l+10,textAnchor:"middle",className:"text-xs font-semibold",fill:t.textSecondary,style:{fontFamily:"inherit"},children:i}),y&&s.jsx("text",{transform:`rotate(-90, ${e.left/2}, ${e.top+c/2})`,x:e.left/2,y:e.top+c/2,textAnchor:"middle",className:"text-xs font-semibold",fill:t.textSecondary,style:{fontFamily:"inherit"},children:y})]})})}G.__docgenInfo={description:"",methods:[],displayName:"ScatterPlot",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ScatterPoint"}],raw:"ScatterPoint[]"},description:""},xLabel:{required:!1,tsType:{name:"string"},description:""},yLabel:{required:!1,tsType:{name:"string"},description:""},xMin:{required:!1,tsType:{name:"number"},description:""},xMax:{required:!1,tsType:{name:"number"},description:""},yMin:{required:!1,tsType:{name:"number"},description:""},yMax:{required:!1,tsType:{name:"number"},description:""},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"450",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"350",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showYAxis:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const re={title:"Data Visualization/ScatterPlot",component:G,tags:["autodocs"]},g={args:{data:[{x:2,y:5,label:"A",color:"#339AF0"},{x:4,y:8,label:"B",color:"#339AF0"},{x:6,y:3,label:"C",color:"#339AF0"},{x:8,y:7,label:"D",color:"#339AF0"},{x:3,y:9,label:"E",color:"#339AF0"},{x:7,y:4,label:"F",color:"#339AF0"}],xLabel:"Time (s)",yLabel:"Velocity (m/s)",xMin:0,xMax:10,yMin:0,yMax:10}},v={args:{data:[{x:10,y:20,size:8,label:"Large",color:"#FF6B6B"},{x:40,y:60,size:15,label:"X-Large",color:"#51CF66"},{x:70,y:30,size:5,label:"Small",color:"#339AF0"},{x:90,y:80,size:12,label:"Large",color:"#FF922B"}],xMin:0,xMax:100,yMin:0,yMax:100,xLabel:"Market Share",yLabel:"Growth Rate"}};var C,I,W;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: [{
      x: 2,
      y: 5,
      label: 'A',
      color: '#339AF0'
    }, {
      x: 4,
      y: 8,
      label: 'B',
      color: '#339AF0'
    }, {
      x: 6,
      y: 3,
      label: 'C',
      color: '#339AF0'
    }, {
      x: 8,
      y: 7,
      label: 'D',
      color: '#339AF0'
    }, {
      x: 3,
      y: 9,
      label: 'E',
      color: '#339AF0'
    }, {
      x: 7,
      y: 4,
      label: 'F',
      color: '#339AF0'
    }],
    xLabel: 'Time (s)',
    yLabel: 'Velocity (m/s)',
    xMin: 0,
    xMax: 10,
    yMin: 0,
    yMax: 10
  }
}`,...(W=(I=g.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var X,_,w;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: [{
      x: 10,
      y: 20,
      size: 8,
      label: 'Large',
      color: '#FF6B6B'
    }, {
      x: 40,
      y: 60,
      size: 15,
      label: 'X-Large',
      color: '#51CF66'
    }, {
      x: 70,
      y: 30,
      size: 5,
      label: 'Small',
      color: '#339AF0'
    }, {
      x: 90,
      y: 80,
      size: 12,
      label: 'Large',
      color: '#FF922B'
    }],
    xMin: 0,
    xMax: 100,
    yMin: 0,
    yMax: 100,
    xLabel: 'Market Share',
    yLabel: 'Growth Rate'
  }
}`,...(w=(_=v.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const se=["Default","Bubble"];export{v as Bubble,g as Default,se as __namedExportsOrder,re as default};
