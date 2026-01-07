import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-C4cmufTQ.js";import{c as g}from"./utilities-BByubqM6.js";import{B as N}from"./Button-BFQyiAQi.js";import{c as W}from"./index-BE1rps4w.js";import{L as r}from"./Label-C8ZseV-A.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-n8mzvmWM.js";import"./cvaVariants-B_bvYhrT.js";const q=W("inline-flex gap-2 p-1 border-2 border-gray-200 rounded-2xl",{variants:{position:{left:"inline-flex flex-row justify-start",center:"inline-flex flex-row justify-center",right:"inline-flex flex-row justify-end"}}}),x=h.createContext({tabContent:"",setTabContent:()=>{}});function y(){return h.useContext(x)}function b({defaultValue:i,fullWidth:n=!1,children:s,className:l="",...o}){const[u,m]=h.useState(i);return e.jsx(x.Provider,{value:{tabContent:u,setTabContent:m},children:e.jsx("div",{className:g(n?"flex flex-col":"",l),...o,children:s})})}function c({children:i,className:n="",fullWidth:s=!1,position:l="left",...o}){return e.jsx("div",{className:g(q({position:l}),n),...o,children:i})}function a({value:i,children:n,variant:s,size:l,loading:o,className:u="",fullWidth:m=!1,...C}){const{setTabContent:j,tabContent:L}=y();return e.jsx(N,{loading:o,variant:L===i?s||"primary":"ghost",size:l,onClick:()=>j?.(i),className:g(m?"w-full":"",u),...C,children:n})}function t({value:i,children:n,className:s="",...l}){const{tabContent:o}=y();return e.jsx("div",{className:g(s),...l,children:o===i&&n})}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!0,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const k={title:"Example/Tabs",component:d,tags:["autodocs"],argTypes:{value:{control:"check",description:"on <b>TabsTrigger</b> the <b>value</b> attribute represents the tab id, based on selected <b>value</b> the <b>TabsContent</b> will render its content."},defaultValue:{control:"check",description:"Represents the default selected tab."},loading:{control:"boolean",defaultValue:!1},variant:{control:"radio",options:["primary","secondary","tertiary"],defaultValue:"primary"},size:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},disabled:{control:"boolean",defaultValue:!1},fullWidthContainer:{control:"boolean",defaultValue:!1},fullWidthTabs:{control:"boolean",defaultValue:!1}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}};function d({variant:i,size:n,loading:s,disabled:l,fullWidthContainer:o,fullWidthTabs:u,position:m="left"}){return e.jsxs(b,{defaultValue:"tab1",fullWidth:o,className:"",children:[e.jsxs(c,{position:m,className:"mb-8",children:[e.jsx(a,{fullWidth:u,variant:i,size:n,loading:s,value:"tab1",disabled:l,className:"",children:"Tab 1"}),e.jsx(a,{fullWidth:u,variant:i,size:n,loading:s,value:"tab2",disabled:l,className:"",children:"Tab 2"}),e.jsx(a,{fullWidth:u,variant:i,size:n,loading:s,value:"tab3",disabled:l,className:"",children:"Tab 3"})]}),e.jsxs(t,{value:"tab1",className:"",children:[e.jsx(r,{children:"Content of Tab 1"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem pariatur veniam."})]}),e.jsxs(t,{value:"tab2",children:[e.jsx(r,{children:"Content of Tab 2"}),e.jsx("p",{children:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem pariatur veniam."})]}),e.jsxs(t,{value:"tab3",children:[e.jsx(r,{children:"Content of Tab 3"}),e.jsx("p",{children:"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem pariatur veniam."})]})]})}function T(){return e.jsxs(b,{defaultValue:"tab1",fullWidth:!0,children:[e.jsxs(c,{children:[e.jsx(a,{fullWidth:!0,variant:"secondary",size:"medium",loading:!1,value:"tab1",disabled:!1,children:"Tab 1"}),e.jsx(a,{fullWidth:!0,variant:"secondary",size:"medium",loading:!1,value:"tab2",disabled:!1,children:"Tab 2"}),e.jsx(a,{fullWidth:!0,variant:"secondary",size:"medium",loading:!1,value:"tab3",disabled:!1,children:"Tab 3"})]}),e.jsxs(t,{value:"tab1",children:[e.jsx(r,{children:"Content of Tab 1"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem pariatur veniam."})]}),e.jsxs(t,{value:"tab2",children:[e.jsx(r,{children:"Content of Tab 2"}),e.jsx("p",{children:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem pariatur veniam."})]}),e.jsxs(t,{value:"tab3",children:[e.jsx(r,{children:"Content of Tab 3"}),e.jsx("p",{children:"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem pariatur veniam."})]})]})}const p={render:()=>e.jsxs(b,{defaultValue:"tab1",fullWidth:!0,children:[e.jsxs(c,{position:"center",className:" ",children:[e.jsx(a,{variant:"tertiary",value:"tab1",children:"Tab 1"}),e.jsx(a,{variant:"tertiary",value:"tab2",children:"Tab 2"}),e.jsx(a,{variant:"tertiary",value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx(r,{children:"Content of Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx(r,{children:"Content of Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx(r,{children:"Content of Tab 3"})})]})},f={render:()=>e.jsxs(b,{defaultValue:"tab1",fullWidth:!0,children:[e.jsxs(c,{position:"right",className:" ",children:[e.jsx(a,{variant:"tertiary",value:"tab1",children:"Tab 1"}),e.jsx(a,{variant:"tertiary",value:"tab2",children:"Tab 2"}),e.jsx(a,{variant:"tertiary",value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx(r,{children:"Content of Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx(r,{children:"Content of Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx(r,{children:"Content of Tab 3"})})]})},v={render:()=>e.jsxs(b,{defaultValue:"tab1",fullWidth:!0,children:[e.jsxs(c,{children:[e.jsx(a,{size:"large",variant:"secondary",value:"tab1",className:"w-full",children:"Tab 1"}),e.jsx(a,{size:"large",variant:"tertiary",value:"tab2",className:"w-full",children:"Tab 2"}),e.jsx(a,{size:"large",variant:"primary",value:"tab3",className:"w-full",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx(r,{children:"Content of Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx(r,{children:"Content of Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx(r,{children:"Content of Tab 3"})})]})};d.__docgenInfo={description:"",methods:[],displayName:"TabsDefault",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},fullWidthContainer:{required:!1,tsType:{name:"boolean"},description:""},fullWidthTabs:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:'"right" | "center" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"TabsSecondaryFullWidth"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`function TabsDefault({
  variant,
  size,
  loading,
  disabled,
  fullWidthContainer,
  fullWidthTabs,
  position = "left"
}: TabsContentProps) {
  return <Tabs defaultValue={"tab1"} fullWidth={fullWidthContainer} className="">\r
      <TabsList position={position} className="mb-8">\r
        <TabsTrigger fullWidth={fullWidthTabs} variant={variant} size={size} loading={loading} value={"tab1"} disabled={disabled} className="">\r
          Tab 1\r
        </TabsTrigger>\r
        <TabsTrigger fullWidth={fullWidthTabs} variant={variant} size={size} loading={loading} value={"tab2"} disabled={disabled} className="">\r
          Tab 2\r
        </TabsTrigger>\r
        <TabsTrigger fullWidth={fullWidthTabs} variant={variant} size={size} loading={loading} value={"tab3"} disabled={disabled} className="">\r
          Tab 3\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value={"tab1"} className="">\r
        <Label>Content of Tab 1</Label>\r
        <p>\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel\r
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem\r
          pariatur veniam.\r
        </p>\r
      </TabsContent>\r
      <TabsContent value={"tab2"}>\r
        <Label>Content of Tab 2</Label>\r
        <p>\r
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel\r
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem\r
          pariatur veniam.\r
        </p>\r
      </TabsContent>\r
      <TabsContent value={"tab3"}>\r
        <Label>Content of Tab 3</Label>\r
        <p>\r
          3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel\r
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem\r
          pariatur veniam.\r
        </p>\r
      </TabsContent>\r
    </Tabs>;
}`,...d.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`function TabsSecondaryFullWidth() {
  return <Tabs defaultValue={"tab1"} fullWidth>\r
      <TabsList>\r
        <TabsTrigger fullWidth variant={"secondary"} size={"medium"} loading={false} value={"tab1"} disabled={false}>\r
          Tab 1\r
        </TabsTrigger>\r
        <TabsTrigger fullWidth variant={"secondary"} size={"medium"} loading={false} value={"tab2"} disabled={false}>\r
          Tab 2\r
        </TabsTrigger>\r
        <TabsTrigger fullWidth variant={"secondary"} size={"medium"} loading={false} value={"tab3"} disabled={false}>\r
          Tab 3\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value={"tab1"}>\r
        <Label>Content of Tab 1</Label>\r
        <p>\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel\r
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem\r
          pariatur veniam.\r
        </p>\r
      </TabsContent>\r
      <TabsContent value={"tab2"}>\r
        <Label>Content of Tab 2</Label>\r
        <p>\r
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel\r
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem\r
          pariatur veniam.\r
        </p>\r
      </TabsContent>\r
      <TabsContent value={"tab3"}>\r
        <Label>Content of Tab 3</Label>\r
        <p>\r
          3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel\r
          cupiditate blanditiis exercitationem alias voluptas. Eius iusto quidem\r
          pariatur veniam.\r
        </p>\r
      </TabsContent>\r
    </Tabs>;
}`,...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" fullWidth>\r
      <TabsList position="center" className=" ">\r
        <TabsTrigger variant="tertiary" value="tab1">\r
          Tab 1\r
        </TabsTrigger>\r
        <TabsTrigger variant="tertiary" value="tab2">\r
          Tab 2\r
        </TabsTrigger>\r
        <TabsTrigger variant="tertiary" value="tab3">\r
          Tab 3\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="tab1">\r
        <Label>Content of Tab 1</Label>\r
      </TabsContent>\r
      <TabsContent value="tab2">\r
        <Label>Content of Tab 2</Label>\r
      </TabsContent>\r
      <TabsContent value="tab3">\r
        <Label>Content of Tab 3</Label>\r
      </TabsContent>\r
    </Tabs>
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" fullWidth>\r
      <TabsList position="right" className=" ">\r
        <TabsTrigger variant="tertiary" value="tab1">\r
          Tab 1\r
        </TabsTrigger>\r
        <TabsTrigger variant="tertiary" value="tab2">\r
          Tab 2\r
        </TabsTrigger>\r
        <TabsTrigger variant="tertiary" value="tab3">\r
          Tab 3\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="tab1">\r
        <Label>Content of Tab 1</Label>\r
      </TabsContent>\r
      <TabsContent value="tab2">\r
        <Label>Content of Tab 2</Label>\r
      </TabsContent>\r
      <TabsContent value="tab3">\r
        <Label>Content of Tab 3</Label>\r
      </TabsContent>\r
    </Tabs>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" fullWidth>\r
      <TabsList>\r
        <TabsTrigger size="large" variant="secondary" value="tab1" className="w-full">\r
          Tab 1\r
        </TabsTrigger>\r
        <TabsTrigger size="large" variant="tertiary" value="tab2" className="w-full">\r
          Tab 2\r
        </TabsTrigger>\r
        <TabsTrigger size="large" variant="primary" value="tab3" className="w-full">\r
          Tab 3\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="tab1">\r
        <Label>Content of Tab 1</Label>\r
      </TabsContent>\r
      <TabsContent value="tab2">\r
        <Label>Content of Tab 2</Label>\r
      </TabsContent>\r
      <TabsContent value="tab3">\r
        <Label>Content of Tab 3</Label>\r
      </TabsContent>\r
    </Tabs>
}`,...v.parameters?.docs?.source}}};const D=["TabsDefault","TabsSecondaryFullWidth","TabsTertiaryCenter","TabsTertiaryRight","TabsLargeFullWidth"];export{d as TabsDefault,v as TabsLargeFullWidth,T as TabsSecondaryFullWidth,p as TabsTertiaryCenter,f as TabsTertiaryRight,D as __namedExportsOrder,k as default};
