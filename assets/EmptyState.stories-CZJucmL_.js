import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{B as P}from"./Button-DEpwmpii.js";import{a as F}from"./cn-Dj5kSLHa.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BvxWzTOX.js";function E({icon:l,title:A,description:d,action:t,secondaryAction:r,className:R}){return e.jsxs("div",{className:F("flex flex-col items-center justify-center text-center","py-[var(--spacing-4xl)] px-[var(--spacing-lg)]",R),role:"status","aria-live":"polite",children:[l&&e.jsx("div",{className:"text-4xl text-[var(--text-muted)] mb-[var(--spacing-md)]","aria-hidden":"true",children:l}),e.jsx("h3",{className:"text-lg font-semibold text-[var(--text-primary)] mb-[var(--spacing-sm)]",children:A}),d&&e.jsx("p",{className:"text-sm text-[var(--text-secondary)] max-w-md mb-[var(--spacing-lg)]",children:d}),(t||r)&&e.jsxs("div",{className:"flex flex-col sm:flex-row gap-[var(--spacing-sm)] items-center",children:[t&&e.jsx(P,{variant:"primary",onClick:t.onClick,children:t.label}),r&&e.jsx("button",{onClick:r.onClick,className:"text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline",children:r.label})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{type:{required:!1,tsType:{name:"union",raw:"'no-data' | 'filtered' | 'error' | 'permission'",elements:[{name:"literal",value:"'no-data'"},{name:"literal",value:"'filtered'"},{name:"literal",value:"'error'"},{name:"literal",value:"'permission'"}]},description:"Type of empty state"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon or illustration"},title:{required:!0,tsType:{name:"string"},description:"Title"},description:{required:!1,tsType:{name:"string"},description:"Description"},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    label: string;
    onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Primary action"},secondaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    label: string;
    onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Secondary action (link style)"},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/EmptyState",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["no-data","filtered","error","permission"]}}},a={args:{type:"no-data",icon:"📭",title:"No items found",description:"Get started by creating your first item."}},n={args:{type:"no-data",icon:"📋",title:"No projects yet",description:"Create your first project to get started.",action:{label:"Create Project",onClick:()=>alert("Creating project...")}}},i={args:{type:"filtered",icon:"🔍",title:"No results found",description:"Try adjusting your search or filter criteria.",action:{label:"Clear filters",onClick:()=>alert("Clearing filters...")}}},o={args:{type:"error",icon:"⚠️",title:"Failed to load data",description:"There was a problem loading this content.",action:{label:"Try again",onClick:()=>alert("Retrying...")}}},s={args:{type:"permission",icon:"🔒",title:"Access denied",description:"You don't have permission to view this content."}},c={args:{type:"no-data",icon:"📭",title:"No items found",description:"Get started by creating your first item.",action:{label:"Create Item",onClick:()=>alert("Creating...")},secondaryAction:{label:"Learn more",onClick:()=>alert("Opening docs...")}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'no-data',
    icon: '📭',
    title: 'No items found',
    description: 'Get started by creating your first item.'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'no-data',
    icon: '📋',
    title: 'No projects yet',
    description: 'Create your first project to get started.',
    action: {
      label: 'Create Project',
      onClick: () => alert('Creating project...')
    }
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,x,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'filtered',
    icon: '🔍',
    title: 'No results found',
    description: 'Try adjusting your search or filter criteria.',
    action: {
      label: 'Clear filters',
      onClick: () => alert('Clearing filters...')
    }
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var b,h,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'error',
    icon: '⚠️',
    title: 'Failed to load data',
    description: 'There was a problem loading this content.',
    action: {
      label: 'Try again',
      onClick: () => alert('Retrying...')
    }
  }
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var j,N,T;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'permission',
    icon: '🔒',
    title: 'Access denied',
    description: 'You don\\'t have permission to view this content.'
  }
}`,...(T=(N=s.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var S,q,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'no-data',
    icon: '📭',
    title: 'No items found',
    description: 'Get started by creating your first item.',
    action: {
      label: 'Create Item',
      onClick: () => alert('Creating...')
    },
    secondaryAction: {
      label: 'Learn more',
      onClick: () => alert('Opening docs...')
    }
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const L=["NoData","WithAction","FilteredNoResults","Error","Permission","WithSecondaryAction"];export{o as Error,i as FilteredNoResults,a as NoData,s as Permission,n as WithAction,c as WithSecondaryAction,L as __namedExportsOrder,B as default};
