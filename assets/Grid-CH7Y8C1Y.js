import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{M as l}from"./index-DR0uvf9B.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CUuobcDd.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Foundations/Grid System"}),`
`,e.jsx(r.h1,{id:"responsive-layout-grid",children:"Responsive Layout Grid"}),`
`,e.jsxs(r.p,{children:["The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. It uses a ",e.jsx(r.strong,{children:"column-based structure"})," that scales from mobile to desktop."]}),`
`,e.jsx(r.h2,{id:"key-concepts",children:"Key Concepts"}),`
`,e.jsxs(r.p,{children:["The grid consists of three elements: ",e.jsx(r.strong,{children:"Columns"}),", ",e.jsx(r.strong,{children:"Gutters"}),", and ",e.jsx(r.strong,{children:"Margins"}),"."]}),`
`,e.jsx("div",{className:"flex flex-col gap-8 my-12",children:e.jsxs("div",{className:"w-full border border-border-default rounded-lg bg-bg-canvas overflow-hidden",children:[e.jsx("div",{className:"relative h-64 w-full flex items-center justify-center p-6 bg-slate-50 dark:bg-neutral-900",children:e.jsxs("div",{className:"h-full w-full max-w-4xl flex relative",children:[e.jsx("div",{className:"h-full w-8 bg-green-200 dark:bg-green-900/30 border-x border-green-300 dark:border-green-800 flex items-center justify-center relative z-10",children:e.jsx("span",{className:"text-[10px] font-mono text-green-800 dark:text-green-400 -rotate-90",children:"Margin"})}),e.jsxs("div",{className:"flex-1 flex gap-4 h-full bg-bg-surface px-4",children:[e.jsx("div",{className:"flex-1 bg-pink-100 dark:bg-pink-900/30 border-x border-pink-200 dark:border-pink-800 h-full flex items-center justify-center relative",children:e.jsx("span",{className:"text-[10px] font-mono text-pink-700 dark:text-pink-400",children:"Col"})}),e.jsx("div",{className:"flex-1 bg-pink-100 dark:bg-pink-900/30 border-x border-pink-200 dark:border-pink-800 h-full flex items-center justify-center relative",children:e.jsx("span",{className:"text-[10px] font-mono text-pink-700 dark:text-pink-400",children:"Col"})}),e.jsx("div",{className:"flex-1 bg-pink-100 dark:bg-pink-900/30 border-x border-pink-200 dark:border-pink-800 h-full flex items-center justify-center relative",children:e.jsx("span",{className:"text-[10px] font-mono text-pink-700 dark:text-pink-400",children:"Col"})}),e.jsx("div",{className:"flex-1 bg-pink-100 dark:bg-pink-900/30 border-x border-pink-200 dark:border-pink-800 h-full flex items-center justify-center relative",children:e.jsx("span",{className:"text-[10px] font-mono text-pink-700 dark:text-pink-400",children:"Col"})})]}),e.jsx("div",{className:"h-full w-8 bg-green-200 dark:bg-green-900/30 border-x border-green-300 dark:border-green-800 flex items-center justify-center relative z-10",children:e.jsx("span",{className:"text-[10px] font-mono text-green-800 dark:text-green-400 -rotate-90",children:"Margin"})}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-full bg-slate-200/50 dark:bg-slate-700/50 border-x border-slate-300 dark:border-slate-600 flex items-center justify-center",children:e.jsx("span",{className:"text-[10px] font-mono text-slate-600 dark:text-slate-300 -rotate-90 bg-white/80 dark:bg-neutral-800/80 px-1 rounded",children:"Gutter"})})]})}),e.jsxs("div",{className:"p-4 border-t border-border-default bg-bg-surface text-xs text-text-secondary flex gap-6",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(r.p,{children:[e.jsx("div",{className:"w-3 h-3 bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800"})," Columns (Content)"]})}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(r.p,{children:[e.jsx("div",{className:"w-3 h-3 bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600"})," Gutters (Spacing)"]})}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(r.p,{children:[e.jsx("div",{className:"w-3 h-3 bg-green-200 dark:bg-green-900/30 border border-green-300 dark:border-green-800"})," Margins (Safe Area)"]})})]})]})}),`
`,e.jsx(r.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(r.p,{children:"The grid adapts the number of columns and spacing specifications based on the breakpoint."}),`
`,e.jsx(r.h3,{id:"1-mobile--600dp",children:"1. Mobile (< 600dp)"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"4 Columns"}),". Best for portraits and compact lists."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Columns"}),": 4"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Margins"}),": 16px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gutters"}),": 16px"]}),`
`]}),`
`,e.jsx(r.h3,{id:"2-tablet-600dp---840dp",children:"2. Tablet (600dp - 840dp)"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"8 Columns"}),". Used for tablet portrait and large phones."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Columns"}),": 8"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Margins"}),": 32px"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gutters"}),": 24px"]}),`
`]}),`
`,e.jsx(r.h3,{id:"3-desktop--840dp",children:"3. Desktop (> 840dp)"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"12 Columns"}),". Standard layout for web applications."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Columns"}),": 12"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Margins"}),": Auto / Max-width"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gutters"}),": 24px"]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"breakpoint-table",children:"Breakpoint Table"}),`
`,e.jsxs(r.p,{children:[`| Breakpoint | Range (dp) | Columns | Gutter | Margin |
| :--- | :--- | :--- | :--- | :--- |
| `,e.jsx(r.strong,{children:"Small"}),` | 0 - 599 | 4 | 16px | 16px |
| `,e.jsx(r.strong,{children:"Medium"}),` | 600 - 904 | 8 | 24px | 32px |
| `,e.jsx(r.strong,{children:"Large"}),` | 905 - 1239 | 12 | 24px | Auto |
| `,e.jsx(r.strong,{children:"X-Large"}),` | 1240 - 1439 | 12 | 24px | Auto |
| `,e.jsx(r.strong,{children:"2X-Large"})," | 1440+ | 12 | 24px | Auto |"]}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h1,{id:"usage",children:"Usage"}),`
`,e.jsxs(r.p,{children:["Use the grid to align content. Content should span ",e.jsx(r.strong,{children:"columns"}),", not gutters."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 lg:gap-6">
  <div className="col-span-4">Main Content</div>
  <div className="col-span-4 lg:col-span-8">Side / Context</div>
</div>
`})})]})}function j(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{j as default};
