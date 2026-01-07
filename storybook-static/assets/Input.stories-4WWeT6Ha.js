import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as E}from"./iframe-C4cmufTQ.js";import{c as q}from"./index-BE1rps4w.js";import{l as V}from"./cvaVariants-B_bvYhrT.js";import{c as r}from"./utilities-BByubqM6.js";import{c as z}from"./createLucideIcon-n8mzvmWM.js";import{B as _,a as C}from"./badge-check-DdGey_EI.js";import"./preload-helper-PPVm8Dsz.js";const L=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],D=z("eye-closed",L);const M=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],P=z("eye",M),S=q(["py-2 px-3  text-gray-900 w-full","focus:outline-none focus:ring focus:ring-gray-6","disabled:ring disabled:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50  "],{variants:{variant:{primary:"border rounded-2xl border-gray-400",secondary:"border rounded-3xl border-gray-400 disabled:bg-gray-200"},sizeType:{small:"text-base ",medium:"text-xl ",large:"p-4 text-2xl"},errorState:{false:"",true:"border-red-500 focus:border-red-600 focus:ring-red-600 pr-12"},successState:{false:"",true:"border-green-500 focus:border-green-600 focus:ring-green-600 pr-12"},passwordType:{false:"",true:"pr-12"},weight:{thin:"font-thin",normal:"font-normal",medium:"font-medium",bold:"font-bold"}},defaultVariants:{variant:"primary",sizeType:"medium",weight:"thin",errorState:!1,successState:!1}});function N({variant:v,weight:f,label:l,error:t,success:a,sizeType:g,type:s,disabled:n=!1,className:x="",classNameLabel:j="",classNameEye:h="",classNameError:k="",...I}){const[T,w]=E.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-1",children:[l&&e.jsx("label",{htmlFor:l||"input",children:e.jsx("p",{className:r(V({errorState:!!t,successState:!!a,disabledState:n,sizeType:g}),j),children:l})}),e.jsxs("div",{className:"relative",children:[s==="textarea"?e.jsx("textarea",{disabled:n,rows:4,id:l||"input",className:r(S({variant:v,sizeType:g,weight:f,errorState:!!t,successState:!!a}),x),...I}):e.jsx("input",{disabled:n,id:"input",type:s==="password"?T?"text":"password":s,className:r(S({variant:v,sizeType:g,weight:f,errorState:!!t,successState:!!a,passwordType:s==="password"}),x),...I}),s==="password"&&!a&&e.jsx(e.Fragment,{children:T?e.jsx("button",{disabled:n,onClick:()=>w(!1),className:r("absolute top-[calc(50%-0.7rem)] right-4 cursor-pointer hover:opacity-80 disabled:cursor-not-allowed",a?"text-green-600":"text-gray-400",h),children:e.jsx(P,{})}):e.jsx("button",{disabled:n,onClick:()=>w(!0),className:r("absolute top-[calc(50%-0.7rem)] right-4 cursor-pointer hover:opacity-80 disabled:cursor-not-allowed ",a?"text-green-600":"text-gray-400",h),children:e.jsx(D,{})})}),a&&e.jsx(_,{className:r("absolute top-[calc(50%-0.7rem)] right-4",a?"text-green-600":"text-gray-400")}),t&&e.jsx(C,{className:r("absolute top-[50%] translate-y-[-50%] right-4",t?"text-red-600":"text-gray-400")})]}),t&&e.jsx("p",{className:r("text-red-600 text-xs",k),children:t})]})}N.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"union",raw:'"number" | "text" | "password" | "textarea"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"password"'},{name:"literal",value:'"textarea"'}]},description:""},classNameLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameEye:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const J={title:"Example/Input",component:N,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text"},variant:{control:"radio",options:["primary","secondary"],defaultValue:"primary"},sizeType:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},disabled:{control:"boolean"},onChange:{action:"check",description:"onChange handler which will return the value stored under the <b>name attribute</b> and accessible via event.target.value"},className:{control:"check",description:"Input container class"},classNameEye:{control:"check"},classNameError:{control:"check"},classNameLabel:{control:"check"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},o={args:{label:"Input label",variant:"primary",value:"default input placeholder...",sizeType:"medium"}},i={args:{label:"Input label",variant:"primary",value:"type here...",sizeType:"medium",success:!0}},p={args:{label:"Input label",variant:"primary",value:"type here...",sizeType:"medium",error:"Error message"}},u={args:{label:"Input label",variant:"primary",value:"type here...",sizeType:"medium",type:"password"}},c={args:{label:"Input label",variant:"primary",value:"type here...",sizeType:"medium",disabled:!0}},d={args:{label:"Input label",variant:"primary",value:"primary input value...",sizeType:"small"}},m={args:{label:"Input label",variant:"primary",value:"primary input value...",sizeType:"medium"}},y={args:{label:"Input label",variant:"primary",value:"primary input value...",sizeType:"large"}},b={args:{label:"Input label",variant:"primary",value:"primary input value...",sizeType:"large",type:"textarea"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "default input placeholder...",
    sizeType: "medium"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    success: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    error: "Error message"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    type: "password"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "type here...",
    sizeType: "medium",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "small"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "medium"
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large"
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input label",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large",
    type: "textarea"
  }
}`,...b.parameters?.docs?.source}}};const K=["DefaultInput","InputSuccess","InputError","InputPassword","InputDisabled","InputSmall","InputMedium","InputLarge","InputTextarea"];export{o as DefaultInput,c as InputDisabled,p as InputError,y as InputLarge,m as InputMedium,u as InputPassword,d as InputSmall,i as InputSuccess,b as InputTextarea,K as __namedExportsOrder,J as default};
