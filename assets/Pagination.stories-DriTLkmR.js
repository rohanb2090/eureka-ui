import{j as P}from"./jsx-runtime-BYYWji4R.js";import{r as t}from"./index-ClcD9ViR.js";import{B as z}from"./Button-Dc7N5QmK.js";import{c as Y}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DVF2XGCm.js";function Z(T={}){const{totalItems:c=0,pageSize:g=10,currentPage:o,defaultPage:S=1,onPageChange:l,hasNextPage:f,hasPreviousPage:b,onNext:n,onPrevious:i,type:r="page",isDisabled:e=!1,"aria-label":q="Pagination"}=T,[w,H]=t.useState(S),a=o!==void 0?o:w,u=t.useMemo(()=>Math.ceil(c/g)||1,[c,g]),d=t.useMemo(()=>r==="cursor"?b??!1:a>1,[r,a,b]),m=t.useMemo(()=>r==="cursor"?f??!1:a<u,[r,a,u,f]),p=t.useCallback(s=>{e||s<1||s>u||s!==a&&(o===void 0&&H(s),l==null||l(s))},[e,u,a,o,l]),B=t.useCallback(()=>{e||!m||(r==="cursor"?n==null||n():p(a+1))},[e,m,r,a,n,p]),I=t.useCallback(()=>{e||!d||(r==="cursor"?i==null||i():p(a-1))},[e,d,r,a,i,p]),J=t.useMemo(()=>r==="cursor"?[]:Array.from({length:u},(s,y)=>y+1),[r,u]),K=t.useCallback(s=>{const y=s===a;return{"aria-label":`Go to page ${s}`,...y&&{"aria-current":"page"},onClick:()=>p(s),disabled:e||y}},[a,p,e]),Q=t.useCallback(()=>({"aria-label":"Go to previous page",onClick:I,disabled:e||!d}),[I,e,d]),X=t.useCallback(()=>({"aria-label":"Go to next page",onClick:B,disabled:e||!m}),[B,e,m]);return{navProps:{role:"navigation","aria-label":q},getPageButtonProps:K,getPreviousButtonProps:Q,getNextButtonProps:X,state:{currentPage:a,totalPages:u,pageSize:g,totalItems:c,canGoNext:m,canGoPrevious:d,pageNumbers:J}}}function F({showPageNumbers:T=!0,maxPageButtons:c=7,className:g,...o}){const{navProps:S,getPageButtonProps:l,getPreviousButtonProps:f,getNextButtonProps:b,state:n}=Z(o),{type:i="page"}=o,r=T&&i==="page"?n.pageNumbers.slice(0,c):[];return P.jsxs("nav",{...S,className:Y("flex items-center justify-center gap-[var(--spacing-sm)]",g),children:[P.jsx(z,{...f(),variant:"secondary",size:"sm",children:"Previous"}),r.map(e=>{const q=l(e),w=e===n.currentPage;return P.jsx(z,{...q,variant:w?"primary":"ghost",size:"sm",className:"min-w-[40px]",children:e},e)}),P.jsx(z,{...b(),variant:"secondary",size:"sm",children:"Next"}),i==="page"&&P.jsxs("span",{className:"ml-[var(--spacing-md)] text-sm text-[var(--text-muted)]",children:["Page ",n.currentPage," of ",n.totalPages]})]})}F.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{totalItems:{required:!1,tsType:{name:"number"},description:"Total number of items"},pageSize:{required:!1,tsType:{name:"number"},description:"Items per page"},currentPage:{required:!1,tsType:{name:"number"},description:"Current page (1-indexed, controlled)"},defaultPage:{required:!1,tsType:{name:"number"},description:"Default page (uncontrolled)"},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Called when page changes"},hasNextPage:{required:!1,tsType:{name:"boolean"},description:"Whether there is a next page"},hasPreviousPage:{required:!1,tsType:{name:"boolean"},description:"Whether there is a previous page"},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when next is clicked"},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when previous is clicked"},type:{required:!1,tsType:{name:"union",raw:"'page' | 'cursor'",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'cursor'"}]},description:"Pagination type"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether pagination is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for pagination nav"},showPageNumbers:{required:!1,tsType:{name:"boolean"},description:"Show page numbers (for page-based pagination)",defaultValue:{value:"true",computed:!1}},maxPageButtons:{required:!1,tsType:{name:"number"},description:"Maximum page buttons to show before using ellipsis",defaultValue:{value:"7",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Components/Pagination",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["page","cursor"]},isDisabled:{control:"boolean"},showPageNumbers:{control:"boolean"}}},h={args:{type:"page",totalItems:100,pageSize:10,defaultPage:1}},v={args:{type:"page",totalItems:100,pageSize:10,defaultPage:5}},x={args:{type:"cursor",hasNextPage:!0,hasPreviousPage:!0}},C={args:{type:"page",totalItems:100,pageSize:10,defaultPage:1,isDisabled:!0}},N={args:{type:"page",totalItems:100,pageSize:10,defaultPage:1,showPageNumbers:!1}};var k,j,D;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'page',
    totalItems: 100,
    pageSize: 10,
    defaultPage: 1
  }
}`,...(D=(j=h.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var M,G,W;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'page',
    totalItems: 100,
    pageSize: 10,
    defaultPage: 5
  }
}`,...(W=(G=v.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var _,A,E;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'cursor',
    hasNextPage: true,
    hasPreviousPage: true
  }
}`,...(E=(A=x.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,V,L;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'page',
    totalItems: 100,
    pageSize: 10,
    defaultPage: 1,
    isDisabled: true
  }
}`,...(L=(V=C.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var O,U,$;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'page',
    totalItems: 100,
    pageSize: 10,
    defaultPage: 1,
    showPageNumbers: false
  }
}`,...($=(U=N.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const ie=["PageBased","CurrentPageMiddle","CursorBased","Disabled","WithoutPageNumbers"];export{v as CurrentPageMiddle,x as CursorBased,C as Disabled,h as PageBased,N as WithoutPageNumbers,ie as __namedExportsOrder,oe as default};
