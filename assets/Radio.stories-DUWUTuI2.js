import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as t}from"./index-CcKhGcwW.js";import{c as W}from"./index-DVF2XGCm.js";import{c as F}from"./cn-CytzSlOG.js";import"./_commonjsHelpers-Cpj98o6Y.js";function _(n){const{value:r,isChecked:o=!1,isDisabled:i=!1,isReadOnly:a=!1,isRequired:s=!1,isInvalid:b=!1,onChange:u,onFocus:l,onBlur:c,name:f,id:g,"aria-label":v,"aria-labelledby":y,"aria-describedby":p}=n,[x,D]=t.useState(!1),V=t.useCallback(m=>{if(i||a){m.preventDefault();return}u==null||u(r,m)},[i,a,r,u]),H=t.useCallback(m=>{D(!0),l==null||l(m)},[l]),M=t.useCallback(m=>{D(!1),c==null||c(m)},[c]),S=t.useCallback(m=>{(i||a)&&m.preventDefault()},[i,a]);return{inputProps:{type:"radio",value:r,checked:o,disabled:i,readOnly:a,required:s,name:f||"",id:g,...v&&{"aria-label":v},...y&&{"aria-labelledby":y},...p&&{"aria-describedby":p},...b&&{"aria-invalid":!0},...s&&{"aria-required":!0},onChange:V,onFocus:H,onBlur:M,onKeyDown:S},state:{isChecked:o,isFocused:x,isDisabled:i,isReadOnly:a,isInvalid:b}}}function B(n){const{value:r,defaultValue:o,name:i,onChange:a,isDisabled:s=!1,isRequired:b=!1,"aria-label":u,"aria-labelledby":l}=n,[c,f]=t.useState(o),g=r!==void 0?r:c,v=t.useCallback(p=>({...p,name:i,isChecked:g===p.value,isDisabled:s||p.isDisabled,isRequired:b,onChange:(x,D)=>{r===void 0&&f(x),a==null||a(x)}}),[i,g,s,b,r,a]),y=t.useCallback(p=>{r===void 0&&f(p),a==null||a(p)},[r,a]);return{groupProps:{role:"radiogroup",...u&&{"aria-label":u},...l&&{"aria-labelledby":l}},getRadioProps:v,value:g,onChange:y}}const P=W(["rounded-full","border","transition-colors duration-150","cursor-pointer","appearance-none","grid place-content-center","focus:outline-none","focus:ring-2","focus:ring-[var(--border-focus)]","focus:ring-offset-2",'before:content-[""]',"before:block","before:w-[0.65em] before:h-[0.65em]","before:rounded-full","before:scale-0 checked:before:scale-100","before:transition-transform before:duration-150","before:bg-current","checked:border-[var(--action-primary)]","checked:text-[var(--action-primary)]","disabled:opacity-[var(--opacity-disabled)]","disabled:cursor-not-allowed"],{variants:{size:{sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},state:{default:"border-[var(--border-default)]",invalid:"border-[var(--status-error)]"}},defaultVariants:{size:"md",state:"default"}}),G=t.createContext(void 0),d=t.forwardRef(({size:n="md",className:r,...o},i)=>{const a=t.useContext(G),s={...o};if(a){a.name&&!s.name&&(s.name=a.name),a.isDisabled&&(s.isDisabled=!0),s.value!==void 0&&(s.isChecked=a.value===s.value);const l=s.onChange;s.onChange=(c,f)=>{l==null||l(c,f),a.onChange(c)}}const{inputProps:b,state:u}=_(s);return e.jsx("input",{ref:i,...b,className:F(P({size:n,state:u.isInvalid?"invalid":"default"}),r)})});d.displayName="Radio";function h({children:n,className:r,...o}){const{groupProps:i,value:a,onChange:s}=B(o);return e.jsx(G.Provider,{value:{value:a,onChange:s,name:o.name,isDisabled:o.isDisabled},children:e.jsx("div",{...i,className:F("space-y-2",r),children:n})})}d.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!0,tsType:{name:"string"},description:"Radio value"},isChecked:{required:!1,tsType:{name:"boolean"},description:"Whether this radio is checked"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether radio is disabled"},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"Whether radio is read-only"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether radio is required (typically set on group level)"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Whether radio is invalid"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Called when radio is selected"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Blur handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the radio"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element describing the radio"},name:{required:!1,tsType:{name:"string"},description:"Radio name attribute (required for grouping)"},id:{required:!1,tsType:{name:"string"},description:"Radio ID"},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["RadioVariantProps"]};h.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:"Current selected value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (uncontrolled)"},name:{required:!0,tsType:{name:"string"},description:"Group name (required)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when selection changes"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether entire group is disabled"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether entire group is required"},"aria-label":{required:!1,tsType:{name:"string"},description:"Group label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element labeling the group"},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Components/Radio",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isDisabled:{control:"boolean"},isRequired:{control:"boolean"}}},R={args:{name:"example",children:null},render:n=>e.jsxs(h,{...n,children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option1",name:n.name}),e.jsx("span",{children:"Option 1"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option2",name:n.name}),e.jsx("span",{children:"Option 2"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option3",name:n.name}),e.jsx("span",{children:"Option 3"})]})]})},q={args:{name:"example2",defaultValue:"option2",children:null},render:n=>e.jsxs(h,{...n,children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option1",name:n.name}),e.jsx("span",{children:"Option 1"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option2",name:n.name}),e.jsx("span",{children:"Option 2 (Selected)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option3",name:n.name}),e.jsx("span",{children:"Option 3"})]})]})},T={args:{name:"example3",isDisabled:!0,children:null},render:n=>e.jsxs(h,{...n,children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option1",name:n.name}),e.jsx("span",{children:"Option 1 (Disabled)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(d,{value:"option2",name:n.name}),e.jsx("span",{children:"Option 2 (Disabled)"})]})]})};var j,C,N;R.parameters={...R.parameters,docs:{...(j=R.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: "example",
    children: null
  },
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
}`,...(N=(C=R.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var E,I,O;q.parameters={...q.parameters,docs:{...(E=q.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: "example2",
    defaultValue: "option2",
    children: null
  },
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
}`,...(O=(I=q.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var w,k,L;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: "example3",
    isDisabled: true,
    children: null
  },
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
}`,...(L=(k=T.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const X=["Default","DefaultSelected","Disabled"];export{R as Default,q as DefaultSelected,T as Disabled,X as __namedExportsOrder,Q as default};
