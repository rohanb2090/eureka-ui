import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{M as d}from"./index-beQPpJgj.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CaYlArbZ.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function i(s){const n={blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundations/Grid System"}),`
`,e.jsx(n.h1,{id:"grid-system",children:"Grid System"}),`
`,e.jsxs(n.p,{children:["Our grid system is built on the ",e.jsx(n.strong,{children:"2x Grid"})," philosophy. It uses a base unit of ",e.jsx(n.strong,{children:"8px"})," (2x mini unit of 4px) to ensure consistent visual rhythm, alignment, and scalability across all screen sizes."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"the-2x-grid-base",children:"The 2x Grid Base"}),`
`,e.jsxs(n.p,{children:["Every spacing, sizing, and layout decision in the Enterprise Design System is a multiple of ",e.jsx(n.strong,{children:"8px"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mini Unit (4px)"}),": Used for micro-spacing within components (e.g., icon padding)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Base Unit (8px)"}),": The fundamental building block for layout and geometry."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"grid-fundamentals",children:"Grid Fundamentals"}),`
`,e.jsxs(n.p,{children:["The grid consists of three core elements: ",e.jsx(n.strong,{children:"Columns"}),", ",e.jsx(n.strong,{children:"Gutters"}),", and ",e.jsx(n.strong,{children:"Margins"}),"."]}),`
`,e.jsx(n.h2,{id:"1-columns",children:"1. Columns"}),`
`,e.jsxs(n.p,{children:["Content is placed within columns. Use a ",e.jsx(n.strong,{children:"12-column"})," grid for most standard layouts."]}),`
`,e.jsx("div",{className:"grid grid-cols-12 gap-2 w-full mb-12 border border-border-default p-2 rounded bg-bg-canvas",children:Array.from({length:12}).map((o,r)=>e.jsxs(n.div,{className:"col-span-1 h-32 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-text-secondary font-mono",children:["Col ",r+1]},r))}),`
`,e.jsx(n.h2,{id:"2-gutters",children:"2. Gutters"}),`
`,e.jsx(n.p,{children:"Gutters are the gaps between columns."}),`
`,e.jsxs("div",{className:"flex flex-col gap-8 mb-12",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono mb-2 text-text-secondary",children:"Compact (gap-4 / 16px)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 border border-border-default p-2 rounded bg-bg-canvas",children:[e.jsx("div",{className:"h-16 bg-action-primary/10 border border-action-primary flex items-center justify-center text-xs",children:"Content"}),e.jsx("div",{className:"hidden md:flex absolute left-1/2 -ml-2 w-4 bg-error-500/20 h-16 items-center justify-center text-[10px] text-error-700",children:"16px"}),e.jsx("div",{className:"h-16 bg-action-primary/10 border border-action-primary flex items-center justify-center text-xs",children:"Content"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono mb-2 text-text-secondary",children:"Wide (gap-8 / 32px)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-8 border border-border-default p-2 rounded bg-bg-canvas",children:[e.jsx("div",{className:"h-16 bg-action-primary/10 border border-action-primary flex items-center justify-center text-xs",children:"Content"}),e.jsx("div",{className:"h-16 bg-action-primary/10 border border-action-primary flex items-center justify-center text-xs",children:"Content"})]})]})]}),`
`,e.jsx(n.h2,{id:"3-margins",children:"3. Margins"}),`
`,e.jsx(n.p,{children:"Margins are the outer spacing of the grid container."}),`
`,e.jsxs("div",{className:"mb-12",children:[e.jsx("div",{className:"text-xs font-mono mb-2 text-text-secondary",children:"Example: Desktop Margin (px-8)"}),e.jsxs("div",{className:"w-full bg-warning-100 border border-warning-300 p-8 rounded relative",children:[e.jsx("div",{className:"absolute top-0 left-0 p-1 text-[10px] text-warning-800 font-mono",children:"Margin (32px)"}),e.jsx("div",{className:"w-full h-24 bg-bg-canvas border border-dashed border-text-disabled flex items-center justify-center text-text-secondary",children:e.jsx(n.p,{children:"Grid Container Content"})})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"breakpoint-systems",children:"Breakpoint Systems"}),`
`,e.jsx(n.p,{children:"We offer two breakpoint systems depending on the application type."}),`
`,e.jsx(n.h2,{id:"a-standard-system-mobile-first",children:"A. Standard System (Mobile-First)"}),`
`,e.jsx(n.p,{children:"Best for public-facing websites and simple applications. Starts at mobile and scales up."}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:[`| Breakpoint | Prefix | Width | Column Count |
| :--- | :--- | :--- | :--- |
| `,e.jsx(n.strong,{children:"Small"})," | ",e.jsx(n.code,{children:"sm:"}),` | 640px | 4 (Fluid) |
| `,e.jsx(n.strong,{children:"Medium"})," | ",e.jsx(n.code,{children:"md:"}),` | 768px | 8 (Fluid) |
| `,e.jsx(n.strong,{children:"Large"})," | ",e.jsx(n.code,{children:"lg:"}),` | 1024px | 12 (Fluid) |
| `,e.jsx(n.strong,{children:"X-Large"})," | ",e.jsx(n.code,{children:"xl:"})," | 1280px | 12 (Fixed Max) |"]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"b-enterprise-dashboard-system-high-density",children:"B. Enterprise Dashboard System (High Density)"}),`
`,e.jsxs(n.p,{children:["Optimized for complex, data-rich interfaces (e.g., admin panels, trading terminals) where ",e.jsx(n.strong,{children:"sidebar navigation"})," consumes horizontal space and users have large displays."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:[`| Breakpoint | Prefix | Min Width | usage Criteria | Recommended Columns |
| :--- | :--- | :--- | :--- | :--- |
| `,e.jsx(n.strong,{children:"Compact"}),` | (Default) | < 1024px | Mobile/Tablet Portrait views of dashboard. | 4 (Stacked) |
| `,e.jsx(n.strong,{children:"Laptop"})," | ",e.jsx(n.code,{children:"lg:"}),` | 1024px | Standard laptop with sidebar open. | 8 or 12 |
| `,e.jsx(n.strong,{children:"Desktop"})," | ",e.jsx(n.code,{children:"xl:"}),` | 1440px | Standard monitor (1080p+). ideal for tables. | 12 |
| `,e.jsx(n.strong,{children:"Ultra"})," | ",e.jsx(n.code,{children:"2xl:"})," | 1920px | Large monitors. High density data. | ",e.jsx(n.strong,{children:"16"})," (For fine-grained control) |"]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note on 16 Columns"}),': In "Ultra" mode, switching to a 16-column grid allows for more precise widget placement in complex dashboards. Use ',e.jsx(n.code,{children:"grid-cols-16"})," (custom utility) if enabled, or stick to ",e.jsx(n.code,{children:"grid-cols-12"})," for consistency."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Standard Dashboard Layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-6">
  {/* Card spans full width on mobile, half on tablet, 1/4 on laptop, 3/12 on desktop */}
  <div className="col-span-1 lg:col-span-1 xl:col-span-3">Stat Card</div>
</div>
`})})]})}function b(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{b as default};
