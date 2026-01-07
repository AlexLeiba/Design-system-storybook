import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-C4cmufTQ.js";import{l as T}from"./cvaVariants-B_bvYhrT.js";import{c as r}from"./utilities-BByubqM6.js";import{c as N}from"./index-BE1rps4w.js";import{c as C}from"./createLucideIcon-n8mzvmWM.js";import{X as j}from"./x-DY4l_r1X.js";import"./preload-helper-PPVm8Dsz.js";const z=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],V=C("search",z),k=N(["w-full border border-gray-400  py-2  rounded-2xl px-12","focus-within:outline-none focus-within:ring focus-within:ring-gray-400 ","disabled:cursor-not-allowed disabled:opacity-50 disabled:ring   "],{variants:{sizeType:{small:"text-base",medium:"text-xl",large:"text-2xl"}},defaultVariants:{sizeType:"medium"}});function h({handleChange:e,label:s,sizeType:p="medium",classNameTitle:g="",classNameInput:f="",classNameIconSearchIcon:b="",classNameXIcon:v="",className:S="",disabled:l=!1,...y}){const[d,I]=x.useState("");function m(n){I(n),e(n)}return a.jsxs("div",{className:r("inline-flex w-full flex-col",l?"pointer-events-none":"",S),children:[s&&a.jsx("label",{htmlFor:s||"search",children:a.jsx("p",{className:r(T({errorState:!1,successState:!1,disabledState:l,sizeType:p}),g),children:s})}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{id:s||"search",disabled:l,className:r(k({sizeType:p}),f),value:d,onChange:n=>m(n.target.value),...y}),a.jsx(V,{className:r("absolute left-4 top-[50%] -translate-y-[50%]",l?"opacity-50":"",b)}),d.length>0&&a.jsx("button",{disabled:l,onClick:()=>m(""),className:r("cursor-pointer absolute right-4 top-[50%] -translate-y-[50%]",l?"opacity-50":"",v),children:a.jsx(j,{})})]})]})}h.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(searchValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchValue"}],return:{name:"void"}}},description:""},sizeType:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},classNameTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameInput:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameIconSearchIcon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameXIcon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const F={title:"Example/SearchInput",component:h,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text"},sizeType:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},handleChange:{control:"check"},disabled:{control:"boolean"},className:{control:"check",description:"SearchInput container className"},classNameTitle:{control:"check"},classNameInput:{control:"check"},classNameXIcon:{control:"check"},classNameIconSearchIcon:{control:"check"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},t={args:{label:"Search Input label",value:"search input placeholder...",sizeType:"medium",handleChange:e=>console.log(e)}},c={args:{label:"Search Input label",value:"search input placeholder...",sizeType:"small",handleChange:e=>console.log(e)}},o={args:{label:"Search Input label",value:"search input placeholder...",sizeType:"medium",handleChange:e=>console.log(e)}},u={args:{label:"Search Input label",value:"search input placeholder...",sizeType:"large",handleChange:e=>console.log(e)}},i={args:{label:"Search Input label",value:"search input placeholder...",sizeType:"large",disabled:!0,handleChange:e=>console.log(e)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search Input label",
    value: "search input placeholder...",
    sizeType: "medium",
    handleChange: v => console.log(v)
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search Input label",
    value: "search input placeholder...",
    sizeType: "small",
    handleChange: v => console.log(v)
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search Input label",
    value: "search input placeholder...",
    sizeType: "medium",
    handleChange: v => console.log(v)
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search Input label",
    value: "search input placeholder...",
    sizeType: "large",
    handleChange: v => console.log(v)
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search Input label",
    value: "search input placeholder...",
    sizeType: "large",
    disabled: true,
    handleChange: v => console.log(v)
  }
}`,...i.parameters?.docs?.source}}};const O=["DefaultInput","SmallSearchInput","MediumSearchInput","LargeSearchInput","DisabledSearchInput"];export{t as DefaultInput,i as DisabledSearchInput,u as LargeSearchInput,o as MediumSearchInput,c as SmallSearchInput,O as __namedExportsOrder,F as default};
