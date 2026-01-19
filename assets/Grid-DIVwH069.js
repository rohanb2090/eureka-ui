import{j as r}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{M as a}from"./index-D1jK-JWs.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BX-MtSzs.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function t(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Foundations/Grid System"}),`
`,r.jsx(e.h1,{id:"grid-system",children:"Grid System"}),`
`,r.jsxs(e.p,{children:["We use a standard ",r.jsx(e.strong,{children:"12-column grid system"})," to organize content. It's built on top of CSS Grid and Flexbox, fully responsive and fluid."]}),`
`,r.jsx(e.h2,{id:"columns",children:"Columns"}),`
`,r.jsx(e.p,{children:"The grid is divided into 12 vertical columns. You can span content across any number of columns."}),`
`,r.jsxs("div",{className:"grid grid-cols-12 gap-4 p-4 bg-bg-subtle rounded-lg mb-8",children:[r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-1 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"1"}),r.jsx("div",{className:"col-span-4 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"4"}),r.jsx("div",{className:"col-span-4 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"4"}),r.jsx("div",{className:"col-span-4 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"4"}),r.jsx("div",{className:"col-span-6 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"6"}),r.jsx("div",{className:"col-span-6 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"6"}),r.jsx("div",{className:"col-span-12 bg-action-primary/20 border border-action-primary text-action-primary text-center py-2 text-xs rounded",children:"12"})]}),`
`,r.jsx(e.h2,{id:"gaps",children:"Gaps"}),`
`,r.jsx(e.p,{children:"We use our spacing scale for gaps between columns and rows."}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"gap-4"})," (16px) is the default component gap."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"gap-6"})," (24px) is the default layout gap."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"gap-8"})," (32px) is used for major section separation."]}),`
`]}),`
`,r.jsx(e.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,r.jsx(e.p,{children:"Design for mobile first, then scale up using these breakpoints:"}),`
`,r.jsxs(e.p,{children:[`| Breakpoint | Width | Prefix |
| :--- | :--- | :--- |
| `,r.jsx(e.strong,{children:"Small"})," | 640px | ",r.jsx(e.code,{children:"sm:"}),` |
| `,r.jsx(e.strong,{children:"Medium"})," | 768px | ",r.jsx(e.code,{children:"md:"}),` |
| `,r.jsx(e.strong,{children:"Large"})," | 1024px | ",r.jsx(e.code,{children:"lg:"}),` |
| `,r.jsx(e.strong,{children:"X-Large"})," | 1280px | ",r.jsx(e.code,{children:"xl:"}),` |
| `,r.jsx(e.strong,{children:"2X-Large"})," | 1536px | ",r.jsx(e.code,{children:"2xl:"})," |"]}),`
`,r.jsx(e.h2,{id:"container",children:"Container"}),`
`,r.jsxs(e.p,{children:["Use the ",r.jsx(e.code,{children:"container"})," class to center content and apply horizontal padding."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<div className="container mx-auto px-4">
  {/* Page Content */}
</div>
`})})]})}function h(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{h as default};
