import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{r as t}from"./index-CcKhGcwW.js";import{c as oe}from"./index-DVF2XGCm.js";import{c as F}from"./cn-CytzSlOG.js";import{C as de}from"./chevron-down-B5L34KAw.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ce(q){const{options:r,value:e,defaultValue:o,isDisabled:l=!1,isReadOnly:d=!1,isRequired:c=!1,isInvalid:u=!1,onChange:a,onFocus:p,onBlur:m,name:Z,id:$,"aria-label":D,"aria-labelledby":E,"aria-describedby":V}=q,[ee,ae]=t.useState(o),w=e!==void 0?e:ee,[re,I]=t.useState(!1),se=t.useMemo(()=>r.find(s=>s.value===w)||null,[r,w]),te=t.useCallback(s=>{if(l||d){s.preventDefault();return}const T=s.target.value,R=r.find(ie=>ie.value===T);R&&(e===void 0&&ae(T),a==null||a(T,R))},[l,d,r,e,a]),ne=t.useCallback(s=>{I(!0),p==null||p(s)},[p]),le=t.useCallback(s=>{I(!1),m==null||m(s)},[m]);return{selectProps:{...e!==void 0&&{value:e},...e===void 0&&o!==void 0&&{defaultValue:o},disabled:l,required:c,name:Z,id:$,...D&&{"aria-label":D},...E&&{"aria-labelledby":E},...V&&{"aria-describedby":V},...u&&{"aria-invalid":!0},...c&&{"aria-required":!0},onChange:te,onFocus:ne,onBlur:le},state:{selectedOption:se,isFocused:re,isDisabled:l,isReadOnly:d,isInvalid:u},options:r}}const ue=oe(["w-full","px-[var(--spacing-md)]","bg-[var(--bg-surface)]","border","rounded-[var(--radius-md)]","text-[var(--text-primary)]","cursor-pointer","transition-colors duration-150","focus:outline-none","focus:ring-2","focus:ring-[var(--border-focus)]","focus:border-transparent","disabled:opacity-[var(--opacity-disabled)]","disabled:cursor-not-allowed"],{variants:{size:{sm:"h-[var(--spacing-2xl)] text-sm",md:"h-[var(--spacing-3xl)] text-base",lg:"h-[var(--spacing-4xl)] text-base"},state:{default:"border-[var(--border-default)] hover:border-[var(--border-strong)]",invalid:"border-[var(--status-error)]"}},defaultVariants:{size:"md",state:"default"}}),x=t.forwardRef(({size:q="md",options:r,placeholder:e,className:o,...l},d)=>{const{selectProps:c,state:u}=ce({options:r,...l});return i.jsxs("div",{className:F("relative w-full",o),children:[i.jsxs("select",{ref:d,...c,className:ue({size:q,state:u.isInvalid?"invalid":"default",className:F("appearance-none pr-10")}),children:[e&&i.jsx("option",{value:"",disabled:!0,children:e}),r.map(a=>i.jsx("option",{value:a.value,disabled:a.isDisabled,children:a.label},a.value))]}),i.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-tertiary",children:i.jsx(de,{size:16})})]})});x.displayName="Select";x.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Available options"},value:{required:!1,tsType:{name:"string"},description:"Current selected value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (uncontrolled)"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether select is disabled"},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Whether select is read-only"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether select is required"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Whether select is invalid"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, option: SelectOption) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"SelectOption"},name:"option"}],return:{name:"void"}}},description:"Called when selection changes"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLSelectElement"}],raw:"FocusEvent<HTMLSelectElement>"},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLSelectElement"}],raw:"FocusEvent<HTMLSelectElement>"},name:"e"}],return:{name:"void"}}},description:"Blur handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the select"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element describing the select"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder option text"},name:{required:!1,tsType:{name:"string"},description:"Select name attribute"},id:{required:!1,tsType:{name:"string"},description:"Select ID"},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["SelectVariantProps"]};const n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4",isDisabled:!0}],ye={title:"Components/Select",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}}},b={args:{options:n,placeholder:"Select an option"}},f={args:{options:n,defaultValue:"2"}},v={args:{options:n,placeholder:"Disabled select",isDisabled:!0}},g={args:{options:n,isInvalid:!0}},y={args:{options:n,placeholder:"Required field",isRequired:!0}},h={args:{options:n,size:"sm",placeholder:"Small select"}},S={args:{options:n,size:"lg",placeholder:"Large select"}};var L,O,C;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: 'Select an option'
  }
}`,...(C=(O=b.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var z,j,M;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: '2'
  }
}`,...(M=(j=f.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var N,H,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: 'Disabled select',
    isDisabled: true
  }
}`,...(W=(H=v.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var B,_,k;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options,
    isInvalid: true
  }
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var A,P,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: 'Required field',
    isRequired: true
  }
}`,...(U=(P=y.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options,
    size: 'sm',
    placeholder: 'Small select'
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options,
    size: 'lg',
    placeholder: 'Large select'
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const he=["Default","WithDefaultValue","Disabled","Invalid","Required","Small","Large"];export{b as Default,v as Disabled,g as Invalid,S as Large,y as Required,h as Small,f as WithDefaultValue,he as __namedExportsOrder,ye as default};
