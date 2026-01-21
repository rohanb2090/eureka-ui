import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as t,a as m,b as a,c as n}from"./Tabs-B4A-Tlow.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-CytzSlOG.js";const x={title:"Components/Tabs",component:t,tags:["autodocs"],argTypes:{}},s={render:()=>e.jsxs(t,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(m,{className:"grid w-full grid-cols-2",children:[e.jsx(a,{value:"account",children:"Account"}),e.jsx(a,{value:"password",children:"Password"})]}),e.jsxs(n,{value:"account",className:"p-4 border border-border-subtle mt-2",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsx("p",{className:"text-text-secondary",children:"Make changes to your account here."})]}),e.jsxs(n,{value:"password",className:"p-4 border border-border-subtle mt-2",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-text-secondary",children:"Change your password here."})]})]})},r={render:()=>e.jsx(t,{defaultValue:"day",children:e.jsxs(m,{children:[e.jsx(a,{value:"day",children:"Day"}),e.jsx(a,{value:"month",children:"Month"}),e.jsx(a,{value:"year",children:"Year"}),e.jsx(a,{value:"all",disabled:!0,children:"All Time"})]})})};var o,l,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border border-border-subtle mt-2">
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-text-secondary">Make changes to your account here.</p>
            </TabsContent>
            <TabsContent value="password" className="p-4 border border-border-subtle mt-2">
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-text-secondary">Change your password here.</p>
            </TabsContent>
        </Tabs>
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="day">
            <TabsList>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
                <TabsTrigger value="all" disabled>
                    All Time
                </TabsTrigger>
            </TabsList>
        </Tabs>
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const j=["Default","Compact"];export{r as Compact,s as Default,j as __namedExportsOrder,x as default};
