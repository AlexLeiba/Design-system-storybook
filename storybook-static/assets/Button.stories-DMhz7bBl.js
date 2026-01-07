import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as g}from"./Button-BFQyiAQi.js";import{C as h,a as b}from"./chevron-right-BxutLZoo.js";import"./index-BE1rps4w.js";import"./utilities-BByubqM6.js";import"./iframe-C4cmufTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-n8mzvmWM.js";const R={title:"Example/Button",component:g,tags:["autodocs"],argTypes:{children:{control:"text",defaultValue:"Click me",description:"You can pass any JSX value here or the button label for example."},variant:{control:"radio",options:["primary","secondary","tertiary","ghost","link"],defaultValue:"primary",description:"Button variant <b>primary</b>, <b>secondary</b>, <b>tertiary</b>, <b>ghost</b>, <b>link</b>."},size:{control:"radio",options:["small","medium","large"],defaultValue:"medium",description:"Button size <b>small</b>, <b>medium</b>, <b>large</b>."},iconLeft:{control:"boolean",defaultValue:!1},iconRight:{control:"boolean",defaultValue:!1},loading:{control:"boolean",defaultValue:!1,type:"boolean"},disabled:{control:"boolean",defaultValue:!1,type:"boolean"},className:{control:"check",defaultValue:"",description:"Button container className"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},a={render:r=>e.jsx(g,{...r,children:r.children||"Click me",iconLeft:r.iconLeft&&e.jsx(b,{}),iconRight:r.iconRight&&e.jsx(h,{})})},i={args:{variant:"secondary",size:"medium",children:"Click me"}},n={args:{variant:"tertiary",size:"medium",children:"Click me"}},s={args:{variant:"destructive",size:"medium",children:"Click me"}},o={args:{variant:"ghost",size:"medium",children:"Click me"}},t={args:{variant:"link",size:"medium",children:"Click me"}},c={args:{size:"small",variant:"primary",children:"Click me"}},m={args:{size:"medium",variant:"primary",children:"Click me"}},l={args:{size:"large",variant:"primary",children:"Click me"}},d={args:{size:"large",variant:"primary",children:"Click me",loading:!0}},u={args:{size:"large",variant:"primary",children:"Click me",disabled:!0}},p={args:{size:"large",variant:"primary",children:"Click me",iconLeft:e.jsx(b,{}),iconRight:e.jsx(h,{})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} children={args.children || "Click me"} iconLeft={args.iconLeft && <ChevronLeft />} iconRight={args.iconRight && <ChevronRight />} />
  // args: {
  //   variant: "primary",
  //   size: "medium",
  //   children: <Label>Click me</Label>,
  //   iconLeft: <ChevronLeft />,
  //   iconRight: <ChevronRight />,
  // },
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "medium",
    children: "Click me"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Click me"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    size: "medium",
    children: "Click me"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "medium",
    children: "Click me"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "medium",
    children: "Click me"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    variant: "primary",
    children: "Click me"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    variant: "primary",
    children: "Click me"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "primary",
    children: "Click me"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
    loading: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "primary",
    children: "Click me",
    iconLeft: <ChevronLeft />,
    iconRight: <ChevronRight />
  }
}`,...p.parameters?.docs?.source}}};const x=["Primary","Secondary","Tertiary","Destructive","Ghost","Link","Small","Medium","Large","Loading","Disabled","WithIcons"];export{s as Destructive,u as Disabled,o as Ghost,l as Large,t as Link,d as Loading,m as Medium,a as Primary,i as Secondary,c as Small,n as Tertiary,p as WithIcons,x as __namedExportsOrder,R as default};
