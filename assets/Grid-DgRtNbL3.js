import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{M as t}from"./index-DpNmWE7K.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BMKVPxlE.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function n(r){const s={blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundations/Grid System"}),`
`,e.jsx(s.h1,{id:"grid-system",children:"Grid System"}),`
`,e.jsxs(s.p,{children:["Our grid system is built on the ",e.jsx(s.strong,{children:"2x Grid"})," philosophy. It uses a base unit of ",e.jsx(s.strong,{children:"8px"})," (2x mini unit of 4px) to ensure consistent visual rhythm, alignment, and scalability across all screen sizes."]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"the-2x-grid-base",children:"The 2x Grid Base"}),`
`,e.jsxs(s.p,{children:["Every spacing, sizing, and layout decision in the Enterprise Design System is a multiple of ",e.jsx(s.strong,{children:"8px"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mini Unit (4px)"}),": Used for micro-spacing within components (e.g., icon padding)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Base Unit (8px)"}),": The fundamental building block for layout and geometry."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h1,{id:"grid-fundamentals",children:"Grid Fundamentals"}),`
`,e.jsxs(s.p,{children:["The grid consists of three core elements: ",e.jsx(s.strong,{children:"Columns"}),", ",e.jsx(s.strong,{children:"Gutters"}),", and ",e.jsx(s.strong,{children:"Margins"}),"."]}),`
`,e.jsx(s.h2,{id:"grid-anatomy",children:"Grid Anatomy"}),`
`,e.jsx("div",{className:"relative w-full overflow-x-auto border border-border-default rounded bg-bg-canvas mb-12 p-8",children:e.jsxs("div",{className:"min-w-[800px] flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between items-start h-12 text-xs font-mono text-text-secondary mb-2 px-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"whitespace-nowrap mb-1",children:"Margin"}),e.jsx("div",{className:"h-4 w-px bg-text-secondary/50"})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"whitespace-nowrap mb-1",children:"Gutter"}),e.jsx("div",{className:"h-4 w-px bg-text-secondary/50"})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"whitespace-nowrap mb-1",children:"Column"}),e.jsx("div",{className:"h-4 w-px bg-text-secondary/50"})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"whitespace-nowrap mb-1",children:"Margin"}),e.jsx("div",{className:"h-4 w-px bg-text-secondary/50"})]})]}),e.jsxs("div",{className:"flex w-full h-64 border border-text-disabled/20 relative",children:[e.jsx("div",{className:"w-8 h-full bg-success-500/20 border-r border-success-500/30 flex-shrink-0 flex items-center justify-center"}),e.jsx("div",{className:"flex-1 grid grid-cols-12 gap-4 h-full bg-bg-surface",children:Array.from({length:12}).map((a,d)=>e.jsx(s.div,{className:"bg-red-500/20 h-full border-x border-red-500/10 hover:bg-red-500/30 transition-colors"},d))}),e.jsx("div",{className:"w-8 h-full bg-success-500/20 border-l border-success-500/30 flex-shrink-0 flex items-center justify-center"})]}),e.jsxs("div",{className:"flex justify-between text-[10px] text-text-secondary font-mono border-t border-text-disabled/20 pt-2 mt-2",children:[e.jsx("span",{children:"Fluid Space"}),e.jsx("span",{children:"1280px / 1440px / 1920px"}),e.jsx("span",{children:"Fluid Space"})]}),e.jsxs("div",{className:"flex gap-6 text-[10px] text-text-secondary mt-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-success-500/20 border border-success-500/30"}),e.jsx("span",{children:"Margin"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-red-500/20 border border-red-500/10"}),e.jsx("span",{children:"Column"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-bg-surface border border-text-disabled/20"}),e.jsx("span",{children:"Gutter"})]})]})]})}),`
`,e.jsx(s.h2,{id:"1-columns",children:"1. Columns"}),`
`,e.jsxs(s.p,{children:["Content is placed within columns. Use a ",e.jsx(s.strong,{children:"12-column"})," grid for most standard layouts."]}),`
`,e.jsx(s.h2,{id:"2-gutters",children:"2. Gutters"}),`
`,e.jsxs(s.p,{children:["Gutters are the gaps between columns. We use a ",e.jsx(s.strong,{children:"Pink"})," color to visualize gaps below."]}),`
`,e.jsxs("div",{className:"flex flex-col gap-8 mb-12",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono mb-2 text-text-secondary",children:"Compact (gap-4 / 16px)"}),e.jsxs("div",{className:"relative border border-border-default rounded bg-bg-canvas p-4",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 bg-pink-500/30 rounded",children:[e.jsx("div",{className:"h-16 bg-bg-surface border border-border-default flex items-center justify-center text-xs z-10",children:"Col"}),e.jsx("div",{className:"h-16 bg-bg-surface border border-border-default flex items-center justify-center text-xs z-10",children:"Col"}),e.jsx("div",{className:"h-16 bg-bg-surface border border-border-default flex items-center justify-center text-xs z-10",children:"Col"})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("div",{className:"w-4 h-4 bg-pink-500/30 rounded"}),e.jsx("span",{className:"text-[10px] text-text-secondary uppercase tracking-wider",children:"Gutter (16px)"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono mb-2 text-text-secondary",children:"Wide (gap-8 / 32px)"}),e.jsxs("div",{className:"relative border border-border-default rounded bg-bg-canvas p-4",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-8 bg-pink-500/30 rounded",children:[e.jsx("div",{className:"h-16 bg-bg-surface border border-border-default flex items-center justify-center text-xs z-10",children:"Col"}),e.jsx("div",{className:"h-16 bg-bg-surface border border-border-default flex items-center justify-center text-xs z-10",children:"Col"}),e.jsx("div",{className:"h-16 bg-bg-surface border border-border-default flex items-center justify-center text-xs z-10",children:"Col"})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("div",{className:"w-4 h-4 bg-pink-500/30 rounded"}),e.jsx("span",{className:"text-[10px] text-text-secondary uppercase tracking-wider",children:"Gutter (32px)"})]})]})]})]}),`
`,e.jsx(s.h2,{id:"3-margins",children:"3. Margins"}),`
`,e.jsxs(s.p,{children:["Margins are the outer spacing of the grid container. We use ",e.jsx(s.strong,{children:"Blue"})," to visualize margins."]}),`
`,e.jsxs("div",{className:"mb-12",children:[e.jsx("div",{className:"text-xs font-mono mb-2 text-text-secondary",children:"Example: Desktop Margin (px-8)"}),e.jsxs("div",{className:"w-full border border-border-default rounded p-4",children:[e.jsx("div",{className:"bg-action-primary/20 p-8 w-full rounded",children:e.jsx("div",{className:"w-full h-24 bg-bg-surface border border-dashed border-text-disabled flex items-center justify-center text-text-secondary relative",children:e.jsx(s.p,{children:"Grid Content"})})}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("div",{className:"w-4 h-4 bg-action-primary/20 rounded"}),e.jsx("span",{className:"text-[10px] text-text-secondary uppercase tracking-wider",children:"Margin / Padding (32px)"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h1,{id:"breakpoint-systems",children:"Breakpoint Systems"}),`
`,e.jsx(s.p,{children:"We offer two breakpoint systems depending on the application type."}),`
`,e.jsx(s.h2,{id:"a-standard-system-mobile-first",children:"A. Standard System (Mobile-First)"}),`
`,e.jsx(s.p,{children:"Best for public-facing websites and simple applications. Starts at mobile and scales up."}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.p,{children:[`| Breakpoint | Prefix | Width | Column Count |
| :--- | :--- | :--- | :--- |
| `,e.jsx(s.strong,{children:"Small"})," | ",e.jsx(s.code,{children:"sm:"}),` | 640px | 4 (Fluid) |
| `,e.jsx(s.strong,{children:"Medium"})," | ",e.jsx(s.code,{children:"md:"}),` | 768px | 8 (Fluid) |
| `,e.jsx(s.strong,{children:"Large"})," | ",e.jsx(s.code,{children:"lg:"}),` | 1024px | 12 (Fluid) |
| `,e.jsx(s.strong,{children:"X-Large"})," | ",e.jsx(s.code,{children:"xl:"})," | 1280px | 12 (Fixed Max) |"]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"b-enterprise-dashboard-system-high-density",children:"B. Enterprise Dashboard System (High Density)"}),`
`,e.jsxs(s.p,{children:["Optimized for complex, data-rich interfaces (e.g., admin panels, trading terminals) where ",e.jsx(s.strong,{children:"sidebar navigation"})," consumes horizontal space and users have large displays."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.p,{children:[`| Breakpoint | Prefix | Min Width | usage Criteria | Recommended Columns |
| :--- | :--- | :--- | :--- | :--- |
| `,e.jsx(s.strong,{children:"Compact"}),` | (Default) | < 1024px | Mobile/Tablet Portrait views of dashboard. | 4 (Stacked) |
| `,e.jsx(s.strong,{children:"Laptop"})," | ",e.jsx(s.code,{children:"lg:"}),` | 1024px | Standard laptop with sidebar open. | 8 or 12 |
| `,e.jsx(s.strong,{children:"Desktop"})," | ",e.jsx(s.code,{children:"xl:"}),` | 1440px | Standard monitor (1080p+). ideal for tables. | 12 |
| `,e.jsx(s.strong,{children:"Ultra"})," | ",e.jsx(s.code,{children:"2xl:"})," | 1920px | Large monitors. High density data. | ",e.jsx(s.strong,{children:"16"})," (For fine-grained control) |"]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Note on 16 Columns"}),': In "Ultra" mode, switching to a 16-column grid allows for more precise widget placement in complex dashboards. Use ',e.jsx(s.code,{children:"grid-cols-16"})," (custom utility) if enabled, or stick to ",e.jsx(s.code,{children:"grid-cols-12"})," for consistency."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h1,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Standard Dashboard Layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-6">
  {/* Card spans full width on mobile, half on tablet, 1/4 on laptop, 3/12 on desktop */}
  <div className="col-span-1 lg:col-span-1 xl:col-span-3">Stat Card</div>
</div>
`})})]})}function b(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{b as default};
