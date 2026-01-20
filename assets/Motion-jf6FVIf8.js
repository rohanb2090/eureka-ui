import{j as n}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{M as r}from"./index-CByln311.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-HbM1k8PY.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Foundations/Motion"}),`
`,n.jsx(e.h1,{id:"motion",children:"Motion"}),`
`,n.jsx(e.p,{children:"Values for transitions and animations."}),`
`,n.jsx(e.h2,{id:"duration",children:"Duration"}),`
`,n.jsxs(e.p,{children:[`| Token | Value | Usage |
| :--- | :--- | :--- |
| `,n.jsx(e.code,{children:"duration-75"}),` | 75ms | Micro-interactions |
| `,n.jsx(e.code,{children:"duration-100"}),` | 100ms | Simple hover effects |
| `,n.jsx(e.code,{children:"duration-200"}),` | 200ms | Standard transitions |
| `,n.jsx(e.code,{children:"duration-300"}),` | 300ms | Larger movements |
| `,n.jsx(e.code,{children:"duration-500"})," | 500ms | Modal entry / exit |"]}),`
`,n.jsx(e.h2,{id:"easing",children:"Easing"}),`
`,n.jsxs(e.p,{children:[`| Class | Value | Usage |
| :--- | :--- | :--- |
| `,n.jsx(e.code,{children:"ease-linear"}),` | linear | Color changes |
| `,n.jsx(e.code,{children:"ease-in"}),` | cubic-bezier(0.4, 0, 1, 1) | Exits |
| `,n.jsx(e.code,{children:"ease-out"}),` | cubic-bezier(0, 0, 0.2, 1) | Entries |
| `,n.jsx(e.code,{children:"ease-in-out"})," | cubic-bezier(0.4, 0, 0.2, 1) | General movement |"]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className="transition-all duration-200 ease-in-out hover:bg-bg-subtle" />
`})})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{j as default};
