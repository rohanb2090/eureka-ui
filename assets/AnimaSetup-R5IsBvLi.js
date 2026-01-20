import{j as n}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{M as r}from"./index-CM9ZO6T_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BMKFMt1h.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function s(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Foundations/Anima Setup"}),`
`,n.jsx(e.h1,{id:"figma-integration-anima-cli",children:"Figma Integration (Anima CLI)"}),`
`,n.jsxs(e.p,{children:["This design system uses the ",n.jsx(e.strong,{children:"Anima Storybook CLI"})," to bridge the gap between code and design."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`[!NOTE]
We utilize the CLI approach instead of the Storybook Addon to ensure full compatibility with `,n.jsx(e.strong,{children:"Storybook 8"})," and our Vite-based build system."]}),`
`]}),`
`,n.jsx(e.h2,{id:"for-designers",children:"For Designers"}),`
`,n.jsx(e.h3,{id:"1-setup",children:"1. Setup"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Install the ",n.jsx(e.strong,{children:"Anima"})," plugin in Figma."]}),`
`,n.jsxs(e.li,{children:["Ensure you have access to the ",n.jsx(e.strong,{children:"Eureka UI"})," project in Anima."]}),`
`]}),`
`,n.jsx(e.h3,{id:"2-connect-to-storybook",children:"2. Connect to Storybook"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["In the Anima plugin, select ",n.jsx(e.strong,{children:'"Import from Storybook"'}),"."]}),`
`,n.jsx(e.li,{children:"Paste the URL of our deployed Storybook (e.g., from Chromatic) or use the sync token."}),`
`]}),`
`,n.jsx(e.h3,{id:"how-to-get-your-anima-token",children:"How to get your Anima Token"}),`
`,n.jsxs(e.p,{children:["You can find your ",n.jsx(e.strong,{children:"Anima Team Token"})," in two places:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"In Figma"}),": Open the Anima plugin, go to the ",n.jsx(e.strong,{children:'"Manage Design System"'})," screen, and you'll find the access token there."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"In Anima Web App"}),": Log in to ",n.jsx(e.a,{href:"https://www.animaapp.com",rel:"nofollow",children:"animaapp.com"}),", go to your ",n.jsx(e.strong,{children:"Team Settings"}),", and look for the ",n.jsx(e.strong,{children:"API Token"})," or ",n.jsx(e.strong,{children:"Access Token"})," section."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"for-developers",children:"For Developers"}),`
`,n.jsx(e.h3,{id:"1-setup-environment",children:"1. Setup Environment"}),`
`,n.jsxs(e.p,{children:["Ensure your ",n.jsx(e.strong,{children:"ANIMA_TEAM_TOKEN"})," is set in your ",n.jsx(e.code,{children:".env"})," file or environment variables."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-env",children:`# .env
ANIMA_TEAM_TOKEN="your_token_here"
`})}),`
`,n.jsx(e.h3,{id:"2-sync-to-anima",children:"2. Sync to Anima"}),`
`,n.jsx(e.p,{children:"The sync process is decoupled from the dev server to maintain build stability. Run the sync command after building Storybook:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 1. Build Storybook
npm run build-storybook

# 2. Sync to Anima
npm run anima-sync
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[`[!IMPORTANT]
The `,n.jsx(e.code,{children:"npm run anima-sync"})," command requires a valid ",n.jsx(e.code,{children:"ANIMA_TEAM_TOKEN"}),"."]}),`
`]})]})}function j(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{j as default};
