import{j as o}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Checkbox-CCoHLqNs.js";import"./iframe-C4cmufTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE1rps4w.js";import"./utilities-BByubqM6.js";import"./cvaVariants-B_bvYhrT.js";const p={title:"Example/Checkbox",component:t,tags:["autodocs"],argTypes:{sizeType:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},label:{control:"text"},error:{control:"text"},success:{control:"boolean"},handleChange:{control:"check"},defaultChecked:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text",description:"Native checkbox attribute <b>name</b> which will represent name of the checkbox value stored in the submitted form"},classNameLabel:{control:"check"},classNameError:{control:"check"},classNameContainerCheckboxAndLabel:{control:"check"},classNameInputCheckbox:{control:"check"},className:{control:"check",description:"Checkbox container className"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},r={render:e=>o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx(t,{defaultChecked:!0,...e,label:e.label||"English",name:"english",value:"english",handleChange:a=>console.log(a)}),o.jsx(t,{...e,label:e.label||"French",name:"french",value:"french",handleChange:a=>console.log(a)}),o.jsx(t,{...e,label:e.label||"Spanish",name:"spanish",value:"spanish",handleChange:a=>console.log(a)})]})},l={args:{label:"Checkbox label medium",sizeType:"medium",handleChange:e=>console.log(e),defaultChecked:!0}},s={args:{label:"Checkbox label large",sizeType:"large",error:"Error message",handleChange:e=>console.log(e),defaultChecked:!0}},c={args:{label:"Checkbox label Error",error:"Error message",handleChange:e=>console.log(e),defaultChecked:!0}},n={args:{label:"Checkbox label Success",success:!0,handleChange:e=>console.log(e),defaultChecked:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col gap-2">\r
        <Checkbox defaultChecked {...args} label={args.label || "English"} name="english" value={"english"} handleChange={v => console.log(v)} />\r
        <Checkbox {...args} label={args.label || "French"} name="french" value={"french"} handleChange={v => console.log(v)} />\r
        <Checkbox {...args} label={args.label || "Spanish"} name="spanish" value={"spanish"} handleChange={v => console.log(v)} />\r
      </div>;
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox label medium",
    sizeType: "medium",
    handleChange: v => console.log(v),
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox label large",
    sizeType: "large",
    error: "Error message",
    handleChange: v => console.log(v),
    defaultChecked: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox label Error",
    error: "Error message",
    handleChange: v => console.log(v),
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox label Success",
    success: true,
    handleChange: v => console.log(v),
    defaultChecked: true
  }
}`,...n.parameters?.docs?.source}}};const C=["CheckboxUsage","CheckboxMedium","CheckboxLarge","CheckboxDefaultError","CheckboxDefaultSuccess"];export{c as CheckboxDefaultError,n as CheckboxDefaultSuccess,s as CheckboxLarge,l as CheckboxMedium,r as CheckboxUsage,C as __namedExportsOrder,p as default};
