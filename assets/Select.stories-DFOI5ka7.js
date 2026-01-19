import{j as T}from"./jsx-runtime-BYYWji4R.js";import{r as t}from"./index-ClcD9ViR.js";import{c as ie}from"./index-DVF2XGCm.js";import{c as oe}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";function de(S){const{options:r,value:e,defaultValue:i,isDisabled:l=!1,isReadOnly:o=!1,isRequired:d=!1,isInvalid:c=!1,onChange:a,onFocus:u,onBlur:p,name:Y,id:Z,"aria-label":x,"aria-labelledby":E,"aria-describedby":V}=S,[$,ee]=t.useState(i),I=e!==void 0?e:$,[ae,R]=t.useState(!1),re=t.useMemo(()=>r.find(s=>s.value===I)||null,[r,I]),se=t.useCallback(s=>{if(l||o){s.preventDefault();return}const q=s.target.value,F=r.find(le=>le.value===q);F&&(e===void 0&&ee(q),a==null||a(q,F))},[l,o,r,e,a]),te=t.useCallback(s=>{R(!0),u==null||u(s)},[u]),ne=t.useCallback(s=>{R(!1),p==null||p(s)},[p]);return{selectProps:{...e!==void 0&&{value:e},...e===void 0&&i!==void 0&&{defaultValue:i},disabled:l,required:d,name:Y,id:Z,...x&&{"aria-label":x},...E&&{"aria-labelledby":E},...V&&{"aria-describedby":V},...c&&{"aria-invalid":!0},...d&&{"aria-required":!0},onChange:se,onFocus:te,onBlur:ne},state:{selectedOption:re,isFocused:ae,isDisabled:l,isReadOnly:o,isInvalid:c},options:r}}const ce=ie(["w-full","px-[var(--spacing-md)]","bg-[var(--bg-surface)]","border","rounded-[var(--radius-md)]","text-[var(--text-primary)]","cursor-pointer","transition-colors duration-150","focus:outline-none","focus:ring-2","focus:ring-[var(--border-focus)]","focus:border-transparent","disabled:opacity-[var(--opacity-disabled)]","disabled:cursor-not-allowed"],{variants:{size:{sm:"h-[var(--spacing-2xl)] text-sm",md:"h-[var(--spacing-3xl)] text-base",lg:"h-[var(--spacing-4xl)] text-base"},state:{default:"border-[var(--border-default)] hover:border-[var(--border-strong)]",invalid:"border-[var(--status-error)]"}},defaultVariants:{size:"md",state:"default"}}),D=t.forwardRef(({size:S="md",options:r,placeholder:e,className:i,...l},o)=>{const{selectProps:d,state:c}=de({options:r,...l});return T.jsxs("select",{ref:o,...d,className:oe(ce({size:S,state:c.isInvalid?"invalid":"default"}),i),children:[e&&T.jsx("option",{value:"",disabled:!0,children:e}),r.map(a=>T.jsx("option",{value:a.value,disabled:a.isDisabled,children:a.label},a.value))]})});D.displayName="Select";D.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Available options"},value:{required:!1,tsType:{name:"string"},description:"Current selected value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (uncontrolled)"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether select is disabled"},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Whether select is read-only"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether select is required"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Whether select is invalid"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, option: SelectOption) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"SelectOption"},name:"option"}],return:{name:"void"}}},description:"Called when selection changes"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLSelectElement"}],raw:"FocusEvent<HTMLSelectElement>"},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLSelectElement"}],raw:"FocusEvent<HTMLSelectElement>"},name:"e"}],return:{name:"void"}}},description:"Blur handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the select"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element describing the select"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder option text"},name:{required:!1,tsType:{name:"string"},description:"Select name attribute"},id:{required:!1,tsType:{name:"string"},description:"Select ID"},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["SelectVariantProps"]};const n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4",isDisabled:!0}],ge={title:"Components/Select",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}}},m={args:{options:n,placeholder:"Select an option"}},b={args:{options:n,defaultValue:"2"}},f={args:{options:n,placeholder:"Disabled select",isDisabled:!0}},g={args:{options:n,isInvalid:!0}},v={args:{options:n,placeholder:"Required field",isRequired:!0}},y={args:{options:n,size:"sm",placeholder:"Small select"}},h={args:{options:n,size:"lg",placeholder:"Large select"}};var L,O,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: 'Select an option'
  }
}`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var z,C,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: '2'
  }
}`,...(M=(C=b.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var H,W,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: 'Disabled select',
    isDisabled: true
  }
}`,...(j=(W=f.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var B,N,_;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options,
    isInvalid: true
  }
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var k,A,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: 'Required field',
    isRequired: true
  }
}`,...(P=(A=v.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var U,G,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options,
    size: 'sm',
    placeholder: 'Small select'
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options,
    size: 'lg',
    placeholder: 'Large select'
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ve=["Default","WithDefaultValue","Disabled","Invalid","Required","Small","Large"];export{m as Default,f as Disabled,g as Invalid,h as Large,v as Required,y as Small,b as WithDefaultValue,ve as __namedExportsOrder,ge as default};
