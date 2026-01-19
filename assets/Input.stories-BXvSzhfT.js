import{j as be}from"./jsx-runtime-DF2Pcvd1.js";import{r as t}from"./index-B2-qRKKC.js";import{c as fe}from"./index-DVF2XGCm.js";import{c as ye}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";function he(I={}){const{value:s,defaultValue:n,isDisabled:e=!1,isReadOnly:a=!1,isInvalid:l=!1,isRequired:q=!1,onChange:o,onFocus:i,onBlur:u,onKeyDown:E,type:ne="text",placeholder:le,autoFocus:oe,autoComplete:ie,maxLength:ue,name:de,id:pe,"aria-label":x,"aria-labelledby":w,"aria-describedby":D,"aria-errormessage":L}=I,[ce,R]=t.useState(!1),me=t.useCallback(r=>{e||a||o==null||o(r.target.value,r)},[e,a,o]),ge=t.useCallback(r=>{R(!0),i==null||i(r)},[i]),ve=t.useCallback(r=>{R(!1),u==null||u(r)},[u]);return{inputProps:{type:ne,...s!==void 0&&{value:s},...s===void 0&&n!==void 0&&{defaultValue:n},disabled:e,readOnly:a,required:q,placeholder:le,autoFocus:oe,autoComplete:ie,maxLength:ue,name:de,id:pe,...x&&{"aria-label":x},...w&&{"aria-labelledby":w},...D&&{"aria-describedby":D},...L&&{"aria-errormessage":L},...l&&{"aria-invalid":!0},...q&&{"aria-required":!0},onChange:me,onFocus:ge,onBlur:ve,...E&&{onKeyDown:E}},state:{isFocused:ce,isDisabled:e,isReadOnly:a,isInvalid:l}}}const Ie=fe(["w-full","px-[var(--spacing-md)]","bg-[var(--bg-surface)]","border","rounded-[var(--radius-md)]","text-[var(--text-primary)]","placeholder:text-[var(--text-muted)]","transition-colors duration-150","focus:outline-none","focus:ring-2","focus:ring-[var(--border-focus)]","focus:border-transparent","disabled:opacity-[var(--opacity-disabled)]","disabled:cursor-not-allowed","read-only:bg-[var(--bg-subtle)]","read-only:cursor-default"],{variants:{size:{sm:"h-[var(--spacing-2xl)] text-sm",md:"h-[var(--spacing-3xl)] text-base",lg:"h-[var(--spacing-4xl)] text-base"},state:{default:"border-[var(--border-default)] hover:border-[var(--border-strong)]",invalid:"border-[var(--status-error)]"}},defaultVariants:{size:"md",state:"default"}}),T=t.forwardRef(({size:I="md",className:s,...n},e)=>{const{inputProps:a,state:l}=he(n);return be.jsx("input",{ref:e,...a,className:ye(Ie({size:I,state:l.isInvalid?"invalid":"default"}),s)})});T.displayName="Input";T.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!1,tsType:{name:"string"},description:"Current input value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (uncontrolled)"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether the input is disabled"},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the input is read-only"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Whether the input has an error"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the input is required"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Called when value changes"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"KeyDown handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the input"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element describing the input"},"aria-errormessage":{required:!1,tsType:{name:"string"},description:"ID of element containing error message"},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'number'"}]},description:"HTML input type"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus on mount"},autoComplete:{required:!1,tsType:{name:"string"},description:"Autocomplete attribute"},maxLength:{required:!1,tsType:{name:"number"},description:"Maximum length"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input ID"},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["InputVariantProps"]};const De={title:"Components/Input",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","email","password","search","tel","url","number"]},isDisabled:{control:"boolean"},isReadOnly:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}}},d={args:{placeholder:"Enter text..."}},p={args:{defaultValue:"Default value"}},c={args:{placeholder:"Disabled input",isDisabled:!0}},m={args:{value:"Read-only value",isReadOnly:!0}},g={args:{placeholder:"Invalid input",isInvalid:!0,value:"invalid@"}},v={args:{placeholder:"Required field",isRequired:!0}},b={args:{type:"password",placeholder:"Enter password"}},f={args:{type:"email",placeholder:"email@example.com"}},y={args:{size:"sm",placeholder:"Small input"}},h={args:{size:"lg",placeholder:"Large input"}};var M,S,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var C,H,V;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value'
  }
}`,...(V=(H=p.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var O,z,K;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    isDisabled: true
  }
}`,...(K=(z=c.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var W,B,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 'Read-only value',
    isReadOnly: true
  }
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var P,_,j;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Invalid input',
    isInvalid: true,
    value: 'invalid@'
  }
}`,...(j=(_=g.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var k,A,G;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Required field',
    isRequired: true
  }
}`,...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,Q,U;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'email@example.com'
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small input'
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large input'
  }
}`,...(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const Le=["Default","WithValue","Disabled","ReadOnly","Invalid","Required","Password","Email","Small","Large"];export{d as Default,c as Disabled,f as Email,g as Invalid,h as Large,b as Password,m as ReadOnly,v as Required,y as Small,p as WithValue,Le as __namedExportsOrder,De as default};
