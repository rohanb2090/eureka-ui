import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{c as s}from"./cn-CytzSlOG.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z={info:{bg:"bg-blue-50 dark:bg-blue-950",border:"border-blue-200 dark:border-blue-800",text:"text-blue-800 dark:text-blue-200",icon:"ℹ️"},success:{bg:"bg-green-50 dark:bg-green-950",border:"border-green-200 dark:border-green-800",text:"text-green-800 dark:text-green-200",icon:"✓"},warning:{bg:"bg-yellow-50 dark:bg-yellow-950",border:"border-yellow-200 dark:border-yellow-800",text:"text-yellow-800 dark:text-yellow-200",icon:"⚠️"},error:{bg:"bg-red-50 dark:bg-red-950",border:"border-red-200 dark:border-red-800",text:"text-red-800 dark:text-red-200",icon:"✕"}};function P({severity:d="info",icon:_,title:g,message:R,action:m,onDismiss:u,className:Y}){const e=z[d],V=d==="error"||d==="warning"?"alert":"status";return r.jsxs("div",{role:V,className:s(e.bg,"border",e.border,"rounded-[var(--radius-md)]","p-[var(--spacing-md)]","flex gap-[var(--spacing-sm)]",Y),children:[r.jsx("span",{className:"flex-shrink-0","aria-hidden":"true",children:_||e.icon}),r.jsxs("div",{className:"flex-1 min-w-0",children:[g&&r.jsx("h5",{className:s("font-medium mb-1",e.text),children:g}),r.jsx("p",{className:s("text-sm",e.text),children:R}),m&&r.jsx("button",{onClick:m.onClick,className:s("mt-2 text-sm font-medium underline",e.text,"hover:opacity-80"),children:m.label})]}),u&&r.jsx("button",{onClick:u,className:s("flex-shrink-0",e.text,"hover:opacity-80"),"aria-label":"Dismiss alert",children:"✕"})]})}P.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{severity:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Alert severity",defaultValue:{value:"'info'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon"},title:{required:!1,tsType:{name:"string"},description:"Alert title (optional)"},message:{required:!0,tsType:{name:"string"},description:"Alert message"},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    label: string;
    onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Optional action button"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Whether alert is dismissible"},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/InlineAlert",component:P,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{severity:{control:"select",options:["info","success","warning","error"]}}},a={args:{severity:"info",message:"This is an informational message."}},n={args:{severity:"success",message:"Operation completed successfully."}},t={args:{severity:"warning",message:"Please review this cautionary notice."}},i={args:{severity:"error",message:"An error occurred. Please try again."}},o={args:{severity:"info",title:"Important Information",message:"This alert has both a title and a message."}},c={args:{severity:"warning",message:"You have unsaved changes.",action:{label:"Save now",onClick:()=>alert("Saving...")}}},l={args:{severity:"info",message:"This alert can be dismissed.",onDismiss:()=>alert("Dismissed")}};var p,b,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    message: 'This is an informational message.'
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,f,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    message: 'Operation completed successfully.'
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,w,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    message: 'Please review this cautionary notice.'
  }
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,S,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    message: 'An error occurred. Please try again.'
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,I,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'Important Information',
    message: 'This alert has both a title and a message.'
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var q,C,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    message: 'You have unsaved changes.',
    action: {
      label: 'Save now',
      onClick: () => alert('Saving...')
    }
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var W,O,E;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    message: 'This alert can be dismissed.',
    onDismiss: () => alert('Dismissed')
  }
}`,...(E=(O=l.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const K=["Info","Success","Warning","Error","WithTitle","WithAction","Dismissible"];export{l as Dismissible,i as Error,a as Info,n as Success,t as Warning,c as WithAction,o as WithTitle,K as __namedExportsOrder,J as default};
