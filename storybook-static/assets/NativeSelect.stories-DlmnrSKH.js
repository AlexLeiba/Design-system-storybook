import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C4cmufTQ.js";import{c as S}from"./index-BE1rps4w.js";import{c as b}from"./utilities-BByubqM6.js";import{L as E}from"./Label-C8ZseV-A.js";import"./preload-helper-PPVm8Dsz.js";import"./cvaVariants-B_bvYhrT.js";const z=S("flex flex-col gap-1 pr-2 border  border-gray-400",{variants:{sizeType:{small:"",medium:"",large:""},successState:{true:"border-green-500 focus:border-green-600 focus:ring-green-600 ",false:""},errorState:{true:"border-red-500 focus:border-red-600 focus:ring-red-600 ",false:""}},defaultVariants:{sizeType:"medium",successState:!1,errorState:!1}}),L=S("outline-none disabled:text-gray-400",{variants:{sizeType:{small:"text-sm  py-1 px-2",medium:"text-xl  py-1 px-2",large:" text-2xl  py-2 px-4"},successState:{true:"border-green-500 focus:border-green-600 focus:ring-green-600 text-green-600",false:""},errorState:{true:"border-red-500 focus:border-red-600 focus:ring-red-600 text-red-600",false:""}},defaultVariants:{sizeType:"medium",successState:!1,errorState:!1}});function N({label:s,error:a,success:i,options:p,disabled:d=!1,sizeType:v="medium",handleSelectValue:g,classNameSelectInput:f="",classNameLabel:y="",classNameError:h="",className:x="",...T}){return e.jsxs("div",{className:"flex flex-col gap-1",children:[s&&e.jsx(E,{classNameLabel:y,label:s,error:a,success:i,disabled:d,size:v,children:s}),e.jsx("div",{className:b(z({errorState:!!a,successState:!!i}),x),children:e.jsx("select",{disabled:d,id:s||"select",className:b(L({sizeType:v,errorState:!!a,successState:!!i}),f),onChange:l=>g(l.target.value),...T,children:p&&p.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))})}),a&&e.jsx("p",{className:b("text-sm text-red-600",h),children:a})]})}N.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  value: string;\r
  label: string;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"OptionsType[]"},description:""},classNameSelectInput:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},handleSelectValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},sizeType:{defaultValue:{value:'"medium"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const _={title:"Example/NativeSelect",component:N,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text"},options:{control:"select",defaultValue:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}]},sizeType:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},disabled:{control:"boolean"},handleSelectValue:{action:"check",description:"handleSelectValue handler which will return the value selected and stored under the <b>name attribute</b>"},className:{control:"check",description:"Select container class"},classNameError:{control:"check"},classNameLabel:{control:"check"},classNameSelectInput:{control:"check"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},r={args:{label:"Select label",value:"default Select placeholder...",sizeType:"medium",options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}},t={args:{label:"Select label",value:"type here...",sizeType:"medium",success:!0,options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}},n={args:{label:"Select label",value:"type here...",sizeType:"medium",error:"Error message",options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}},c={args:{label:"Select label",value:"type here...",sizeType:"medium",disabled:!0,options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}},u={args:{label:"Select label",value:"primary Select value...",sizeType:"small",options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}},o={args:{label:"Select label",value:"primary Select value...",sizeType:"medium",options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}},m={args:{label:"Select label",value:"primary Select value...",sizeType:"large",options:[{value:"value1",label:"label1"},{value:"value2",label:"label2"},{value:"value3",label:"label3"}],className:"",classNameError:"",classNameLabel:"",classNameSelectInput:""}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "default Select placeholder...",
    sizeType: "medium",
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "type here...",
    sizeType: "medium",
    success: true,
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "type here...",
    sizeType: "medium",
    error: "Error message",
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "type here...",
    sizeType: "medium",
    disabled: true,
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "primary Select value...",
    sizeType: "small",
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "primary Select value...",
    sizeType: "medium",
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select label",
    value: "primary Select value...",
    sizeType: "large",
    options: [{
      value: "value1",
      label: "label1"
    }, {
      value: "value2",
      label: "label2"
    }, {
      value: "value3",
      label: "label3"
    }],
    className: "",
    classNameError: "",
    classNameLabel: "",
    classNameSelectInput: ""
  }
}`,...m.parameters?.docs?.source}}};const C=["DefaultSelect","SelectSuccess","SelectError","SelectDisabled","SelectSmall","SelectMedium","SelectLarge"];export{r as DefaultSelect,c as SelectDisabled,n as SelectError,m as SelectLarge,o as SelectMedium,u as SelectSmall,t as SelectSuccess,C as __namedExportsOrder,_ as default};
