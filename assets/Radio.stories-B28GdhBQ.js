import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as o}from"./index-B2-qRKKC.js";import{c as S}from"./index-DVF2XGCm.js";import{c as V}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";function W(a){const{value:r,isChecked:t=!1,isDisabled:n=!1,isReadOnly:s=!1,isRequired:d=!1,isInvalid:b=!1,onChange:p,onFocus:u,onBlur:c,name:R,id:y,"aria-label":v,"aria-labelledby":m,"aria-describedby":f}=a,[T,j]=o.useState(!1),G=o.useCallback(l=>{if(n||s){l.preventDefault();return}p==null||p(r,l)},[n,s,r,p]),k=o.useCallback(l=>{j(!0),u==null||u(l)},[u]),H=o.useCallback(l=>{j(!1),c==null||c(l)},[c]),M=o.useCallback(l=>{(n||s)&&l.preventDefault()},[n,s]);return{inputProps:{type:"radio",value:r,checked:t,disabled:n,readOnly:s,required:d,name:R||"",id:y,...v&&{"aria-label":v},...m&&{"aria-labelledby":m},...f&&{"aria-describedby":f},...b&&{"aria-invalid":!0},...d&&{"aria-required":!0},onChange:G,onFocus:k,onBlur:H,onKeyDown:M},state:{isChecked:t,isFocused:T,isDisabled:n,isReadOnly:s,isInvalid:b}}}function _(a){const{value:r,defaultValue:t,name:n,onChange:s,isDisabled:d=!1,isRequired:b=!1,"aria-label":p,"aria-labelledby":u}=a,[c,R]=o.useState(t),y=r!==void 0?r:c,v=o.useCallback(m=>({...m,name:n,isChecked:y===m.value,isDisabled:d||m.isDisabled,isRequired:b,onChange:(f,T)=>{r===void 0&&R(f),s==null||s(f)}}),[n,y,d,b,r,s]);return{groupProps:{role:"radiogroup",...p&&{"aria-label":p},...u&&{"aria-labelledby":u}},getRadioProps:v}}const B=S(["rounded-full","border","transition-colors duration-150","cursor-pointer","focus:outline-none","focus:ring-2","focus:ring-[var(--border-focus)]","focus:ring-offset-2","text-[var(--action-primary)]","disabled:opacity-[var(--opacity-disabled)]","disabled:cursor-not-allowed"],{variants:{size:{sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},state:{default:"border-[var(--border-default)]",invalid:"border-[var(--status-error)]"}},defaultVariants:{size:"md",state:"default"}}),i=o.forwardRef(({size:a="md",className:r,...t},n)=>{const{inputProps:s,state:d}=W(t);return e.jsx("input",{ref:n,...s,className:V(B({size:a,state:d.isInvalid?"invalid":"default"}),r)})});i.displayName="Radio";function g({children:a,className:r,...t}){const{groupProps:n}=_(t);return e.jsx("div",{...n,className:V("space-y-2",r),children:a})}i.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!0,tsType:{name:"string"},description:"Radio value"},isChecked:{required:!1,tsType:{name:"boolean"},description:"Whether this radio is checked"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether radio is disabled"},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Whether radio is read-only"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether radio is required (typically set on group level)"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Whether radio is invalid"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Called when radio is selected"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Blur handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the radio"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element describing the radio"},name:{required:!1,tsType:{name:"string"},description:"Radio name attribute (required for grouping)"},id:{required:!1,tsType:{name:"string"},description:"Radio ID"},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["RadioVariantProps"]};g.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:"Current selected value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (uncontrolled)"},name:{required:!0,tsType:{name:"string"},description:"Group name (required)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when selection changes"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether entire group is disabled"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether entire group is required"},"aria-label":{required:!1,tsType:{name:"string"},description:"Group label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the group"},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Radio",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isDisabled:{control:"boolean"},isRequired:{control:"boolean"}}},h={args:{name:"example"},render:a=>e.jsxs(g,{...a,children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option1",name:a.name}),e.jsx("span",{children:"Option 1"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option2",name:a.name}),e.jsx("span",{children:"Option 2"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option3",name:a.name}),e.jsx("span",{children:"Option 3"})]})]})},x={args:{name:"example2",defaultValue:"option2"},render:a=>e.jsxs(g,{...a,children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option1",name:a.name}),e.jsx("span",{children:"Option 1"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option2",name:a.name}),e.jsx("span",{children:"Option 2 (Selected)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option3",name:a.name}),e.jsx("span",{children:"Option 3"})]})]})},q={args:{name:"example3",isDisabled:!0},render:a=>e.jsxs(g,{...a,children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option1",name:a.name}),e.jsx("span",{children:"Option 1 (Disabled)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(i,{value:"option2",name:a.name}),e.jsx("span",{children:"Option 2 (Disabled)"})]})]})};var D,N,E;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: "example"
  } as any,
  render: args => <RadioGroup {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name={args.name} />
                <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name={args.name} />
                <span>Option 2</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option3" name={args.name} />
                <span>Option 3</span>
            </label>
        </RadioGroup>
}`,...(E=(N=h.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var O,I,C;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: "example2",
    defaultValue: "option2"
  } as any,
  render: args => <RadioGroup {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name={args.name} />
                <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name={args.name} />
                <span>Option 2 (Selected)</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option3" name={args.name} />
                <span>Option 3</span>
            </label>
        </RadioGroup>
}`,...(C=(I=x.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var w,L,F;q.parameters={...q.parameters,docs:{...(w=q.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: "example3",
    isDisabled: true
  } as any,
  render: args => <RadioGroup {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name={args.name} />
                <span>Option 1 (Disabled)</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name={args.name} />
                <span>Option 2 (Disabled)</span>
            </label>
        </RadioGroup>
}`,...(F=(L=q.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const Q=["Default","DefaultSelected","Disabled"];export{h as Default,x as DefaultSelected,q as Disabled,Q as __namedExportsOrder,J as default};
