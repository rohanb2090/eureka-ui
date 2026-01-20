import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{M as o}from"./index-Aoa0DoOi.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-rRKPiqpf.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function a(d){const s={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Elevation"}),`
`,e.jsx(s.h1,{id:"elevation-z-axis",children:"Elevation (Z-Axis)"}),`
`,e.jsx(s.p,{children:"Elevation is the relative distance between two surfaces along the z-axis. Elements with higher elevation values are visually distinguished by larger, softer shadows."}),`
`,e.jsx(s.h2,{id:"depth-model",children:"Depth Model"}),`
`,e.jsx(s.p,{children:"In the Enterprise Design System, all elements base themselves on a 0dp surface level (background)."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Depths"})," are measured in ",e.jsx(s.code,{children:"dp"})," (density-independent pixels)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shadows"})," are the only visual cue for depth (we do not use Z-axis translation)."]}),`
`]}),`
`,e.jsx(s.h2,{id:"light-mode-preview",children:"Light Mode Preview"}),`
`,e.jsx("div",{className:"p-12 rounded-xl mb-12 shadow-inner",style:{backgroundColor:"#E2E8F0"},children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",children:[{level:0,shadow:"none",label:"No Shadow"},{level:1,shadow:"shadow-sm",label:"Shadow SM"},{level:2,shadow:"shadow",label:"Shadow"},{level:3,shadow:"shadow-md",label:"Shadow MD"},{level:4,shadow:"shadow-lg",label:"Shadow LG"},{level:5,shadow:"shadow-xl",label:"Shadow XL"}].map(l=>e.jsxs(s.div,{className:"flex flex-col items-center",children:[e.jsx(s.div,{className:`w-32 h-32 bg-white rounded-lg ${l.shadow} flex items-center justify-center text-xs text-slate-600 font-medium`,children:l.label}),e.jsxs(s.div,{className:"mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest",children:["Level ",l.level]})]},l.level))})}),`
`,e.jsx(s.h2,{id:"dark-mode-preview",children:"Dark Mode Preview"}),`
`,e.jsx("div",{className:"p-12 rounded-xl mb-12 shadow-inner",style:{backgroundColor:"#0F172A"},children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",children:[{level:0,shadow:"none",label:"No Shadow"},{level:1,shadow:"shadow-sm",label:"Shadow SM"},{level:2,shadow:"shadow",label:"Shadow"},{level:3,shadow:"shadow-md",label:"Shadow MD"},{level:4,shadow:"shadow-lg",label:"Shadow LG"},{level:5,shadow:"shadow-xl",label:"Shadow XL"}].map(l=>e.jsxs(s.div,{className:"flex flex-col items-center",children:[e.jsx(s.div,{className:`w-32 h-32 rounded-lg ${l.shadow} shadow-black/80 flex items-center justify-center text-xs text-slate-300 font-medium`,style:{backgroundColor:"#1E293B"},children:l.label}),e.jsxs(s.div,{className:"mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest",children:["Level ",l.level]})]},l.level))})}),`
`,e.jsx(s.h2,{id:"elevation-values",children:"Elevation Values"}),`
`,e.jsxs(s.p,{children:[`| Level | Value (dp) | Tailwind Class | Use Case |
| :--- | :--- | :--- | :--- |
| `,e.jsx(s.strong,{children:"0"})," | 0dp | ",e.jsx(s.code,{children:"none"}),` | Background, Wallpaper |
| `,e.jsx(s.strong,{children:"1"})," | 1dp | ",e.jsx(s.code,{children:"shadow-sm"}),` | Table rows, card outlines |
| `,e.jsx(s.strong,{children:"2"})," | 3dp | ",e.jsx(s.code,{children:"shadow"}),` | Standard Cards, Contained Buttons |
| `,e.jsx(s.strong,{children:"3"})," | 6dp | ",e.jsx(s.code,{children:"shadow-md"}),` | Dropdown Menus, Sticky Headers |
| `,e.jsx(s.strong,{children:"4"})," | 8dp | ",e.jsx(s.code,{children:"shadow-lg"}),` | Modals, Navigation Drawers |
| `,e.jsx(s.strong,{children:"5"})," | 12dp+ | ",e.jsx(s.code,{children:"shadow-xl"})," | Large Dialogs |"]})]})}function p(d={}){const{wrapper:s}={...n(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(a,{...d})}):a(d)}export{p as default};
