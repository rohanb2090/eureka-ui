import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{M as a}from"./index-DIIimmc9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BA9IO3_E.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function o(d){const l={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Foundations/Elevation"}),`
`,e.jsx(l.h1,{id:"elevation-z-axis",children:"Elevation (Z-Axis)"}),`
`,e.jsx(l.p,{children:"Elevation is the relative distance between two surfaces along the z-axis. Elements with higher elevation values are visually distinguished by larger, softer shadows."}),`
`,e.jsx(l.h2,{id:"depth-model",children:"Depth Model"}),`
`,e.jsx(l.p,{children:"In the Enterprise Design System, all elements base themselves on a 0dp surface level (background)."}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:"Depths"})," are measured in ",e.jsx(l.code,{children:"dp"})," (density-independent pixels)."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.strong,{children:"Shadows"})," are the only visual cue for depth (we do not use Z-axis translation)."]}),`
`]}),`
`,e.jsx(l.h2,{id:"light-mode-preview",children:"Light Mode Preview"}),`
`,e.jsx("div",{className:"p-8 rounded-xl border border-slate-300 mb-12 shadow-inner",style:{backgroundColor:"#F1F5F9"},children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{level:0,shadow:"none",label:"No Shadow"},{level:1,shadow:"shadow-sm",label:"Shadow SM"},{level:2,shadow:"shadow",label:"Shadow"},{level:3,shadow:"shadow-md",label:"Shadow MD"},{level:4,shadow:"shadow-lg",label:"Shadow LG"},{level:5,shadow:"shadow-xl",label:"Shadow XL"}].map(s=>e.jsxs(l.div,{className:"flex flex-col items-center",children:[e.jsx(l.div,{className:`w-32 h-32 bg-white rounded-lg ${s.shadow} flex items-center justify-center text-xs text-slate-600 font-medium border border-slate-200`,children:s.label}),e.jsxs(l.div,{className:"mt-2 text-xs font-semibold text-slate-700",children:["Level ",s.level]})]},s.level))})}),`
`,e.jsx(l.h2,{id:"dark-mode-preview",children:"Dark Mode Preview"}),`
`,e.jsx("div",{className:"p-8 rounded-xl border border-neutral-700 mb-12 shadow-inner",style:{backgroundColor:"#171717"},children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{level:0,shadow:"none",label:"No Shadow"},{level:1,shadow:"shadow-sm",label:"Shadow SM"},{level:2,shadow:"shadow",label:"Shadow"},{level:3,shadow:"shadow-md",label:"Shadow MD"},{level:4,shadow:"shadow-lg",label:"Shadow LG"},{level:5,shadow:"shadow-xl",label:"Shadow XL"}].map(s=>e.jsxs(l.div,{className:"flex flex-col items-center",children:[e.jsx(l.div,{className:`w-32 h-32 rounded-lg ${s.shadow} shadow-black flex items-center justify-center text-xs text-neutral-300 font-medium border border-white/10`,style:{backgroundColor:"#333333"},children:s.label}),e.jsxs(l.div,{className:"mt-2 text-xs font-semibold text-neutral-400",children:["Level ",s.level]})]},s.level))})}),`
`,e.jsx(l.h2,{id:"elevation-values",children:"Elevation Values"}),`
`,e.jsxs(l.p,{children:[`| Level | Value (dp) | Tailwind Class | Use Case |
| :--- | :--- | :--- | :--- |
| `,e.jsx(l.strong,{children:"0"})," | 0dp | ",e.jsx(l.code,{children:"none"}),` | Background, Wallpaper |
| `,e.jsx(l.strong,{children:"1"})," | 1dp | ",e.jsx(l.code,{children:"shadow-sm"}),` | Table rows, card outlines |
| `,e.jsx(l.strong,{children:"2"})," | 3dp | ",e.jsx(l.code,{children:"shadow"}),` | Standard Cards, Contained Buttons |
| `,e.jsx(l.strong,{children:"3"})," | 6dp | ",e.jsx(l.code,{children:"shadow-md"}),` | Dropdown Menus, Sticky Headers |
| `,e.jsx(l.strong,{children:"4"})," | 8dp | ",e.jsx(l.code,{children:"shadow-lg"}),` | Modals, Navigation Drawers |
| `,e.jsx(l.strong,{children:"5"})," | 12dp+ | ",e.jsx(l.code,{children:"shadow-xl"})," | Large Dialogs |"]})]})}function g(d={}){const{wrapper:l}={...n(),...d.components};return l?e.jsx(l,{...d,children:e.jsx(o,{...d})}):o(d)}export{g as default};
