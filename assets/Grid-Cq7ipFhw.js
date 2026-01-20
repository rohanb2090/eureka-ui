import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{M as t}from"./index-CkQgSTIF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-COce1a1z.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundations/Grid System"}),`
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
`,e.jsxs(n.p,{children:["Content is placed within columns. Use a ",e.jsx(n.strong,{children:"12-column"})," grid for most standard layouts to allow for flexible division into halves, thirds, quarters, and sixths."]}),`
`,e.jsxs("div",{className:"grid grid-cols-12 gap-4 h-32 mb-8 mt-4",children:[e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"1"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"2"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"3"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"4"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"5"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"6"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"7"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"8"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"9"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"10"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"11"}),e.jsx("div",{className:"col-span-1 bg-action-primary/10 border border-dashed border-action-primary flex items-center justify-center text-xs text-action-primary font-mono",children:"12"})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"2-gutters",children:"2. Gutters"}),`
`,e.jsx(n.p,{children:"Gutters are the gaps between columns. They help separate content and are defined by our spacing tokens."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Compact (",e.jsx(n.code,{children:"gap-4"})," / 16px)"]}),": High-density dashboards and data tables."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Standard (",e.jsx(n.code,{children:"gap-6"})," / 24px)"]}),": Default application layouts."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Wide (",e.jsx(n.code,{children:"gap-8"})," / 32px)"]}),": Marketing pages or low-density views."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"3-margins",children:"3. Margins"}),`
`,e.jsx(n.p,{children:"Margins are the outer spacing of the grid container. They prevent content from touching the edges of the screen."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile"}),": ",e.jsx(n.code,{children:"px-4"})," (16px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tablet"}),": ",e.jsx(n.code,{children:"px-6"})," (24px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desktop"}),": ",e.jsx(n.code,{children:"px-8"})," (32px) or centered ",e.jsx(n.code,{children:"container"})]}),`
`]}),`
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
`})})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
