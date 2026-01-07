import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C4cmufTQ.js";import{c as y}from"./index-BE1rps4w.js";import{l as N}from"./cvaVariants-B_bvYhrT.js";import{c as s}from"./utilities-BByubqM6.js";import"./preload-helper-PPVm8Dsz.js";const S=y("accent-black",{variants:{sizeType:{small:"w-4 h-4",medium:"w-6 h-6",large:"w-8 h-8"},errorState:{false:"",true:"border-red-500 focus:border-red-600 focus:ring-red-600 pr-12 accent-red-600"},successState:{false:"",true:"border-green-500 focus:border-green-600 focus:ring-green-600 pr-12 accent-green-600"}},defaultVariants:{sizeType:"small"}});function l({label:e,error:a,success:d,sizeType:u,className:p="",classNameRadioInput:g="",classNameLabel:b="",classNameError:h="",classNameContainerCheckboxAndLabel:f="",disabled:m,handleChange:v,...x}){return r.jsxs("div",{className:s("flex-col gap-1",p),children:[r.jsxs("div",{className:s("flex gap-2 items-center",f),children:[r.jsx("input",{disabled:m,className:s(S({sizeType:u,errorState:!!a,successState:!!d}),g),type:"radio",id:e,onChange:R=>v(R.target.value),...x}),r.jsx("label",{htmlFor:e,children:r.jsx("p",{className:s(N({errorState:!!a,successState:!!d,sizeType:u,disabledState:m}),b),children:e})})]}),a&&r.jsx("p",{className:s("text-sm text-red-600",h),children:a})]})}l.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},classNameLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameRadioInput:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameContainerCheckboxAndLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const k={title:"Example/Radio",component:l,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},sizeType:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},success:{control:"boolean"},error:{control:"text"},handleChange:{action:"handleChange",description:"handleChange will return the value stored under the attribute <b>value</b> which import styled from 'styled-components/native'; accessible via event.target.value"},title:{control:"text",description:"Radio label"},value:{control:"text",description:"Native radio attribute <b>value</b> which will be stored in the submitted form"},name:{control:"text",description:"Native radio attribute <b>name</b> which will be shared across all radio options in the same group"},classNameLabel:{control:"check"},classNameRadioInput:{control:"check"},classNameError:{control:"check"},classNameContainerCheckboxAndLabel:{control:"check"},className:{control:"check",description:"Radio container className"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},o={render:e=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx(l,{...e,defaultValue:"english",label:e.label||"English",name:"language",value:"english",handleChange:a=>console.log(a)}),r.jsx(l,{...e,label:e.label||"French",name:"language",value:"french",handleChange:a=>console.log(a)}),r.jsx(l,{...e,label:e.label||"Spanish",name:"language",value:"spanish",handleChange:a=>console.log(a)})]})},n={args:{label:"Radio label medium",sizeType:"medium"}},t={args:{label:"Radio label large",sizeType:"large"}},i={args:{label:"Radio label success",success:!0}},c={args:{label:"Radio label error",error:"Error message"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col gap-2">\r
        <Radio {...args} defaultValue={"english"} label={args.label || "English"} name="language" value={"english"} handleChange={v => console.log(v)} />\r
        <Radio {...args} label={args.label || "French"} name="language" value={"french"} handleChange={v => console.log(v)} />\r
        <Radio {...args} label={args.label || "Spanish"} name="language" value={"spanish"} handleChange={v => console.log(v)} />\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Radio label medium",
    sizeType: "medium"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Radio label large",
    sizeType: "large"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Radio label success",
    success: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Radio label error",
    error: "Error message"
  }
}`,...c.parameters?.docs?.source}}};const q=["RadioUsage","RadioDefaultMedium","RadioDefaultLarge","RadioSuccess","RadioError"];export{t as RadioDefaultLarge,n as RadioDefaultMedium,c as RadioError,i as RadioSuccess,o as RadioUsage,q as __namedExportsOrder,k as default};
