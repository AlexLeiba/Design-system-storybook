import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-C4cmufTQ.js";import{l as z,e as U}from"./cvaVariants-B_bvYhrT.js";import{c as m}from"./index-BE1rps4w.js";import{C as W}from"./Checkbox-CCoHLqNs.js";import{c as n}from"./utilities-BByubqM6.js";import{L as X}from"./Label-C8ZseV-A.js";import{c as Y}from"./createLucideIcon-n8mzvmWM.js";import"./preload-helper-PPVm8Dsz.js";const Z=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ee=Y("check",Z);function R({selectedValue:a,disabled:u,error:D,success:M,size:s,classNameSelectedMultipleItem:r=""}){return l.jsx("div",{className:n("flex gap-2 bg-gray-100 rounded-2xl py-1 px-3 text-white",r),children:l.jsx("p",{className:z({errorState:!!D,successState:!!M,disabledState:u,sizeType:s}),children:a})})}R.__docgenInfo={description:"",methods:[],displayName:"SelectedItem",props:{selectedValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},classNameSelectedMultipleItem:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const le=m([" w-full relative not-disabled:hover:opacity-70 cursor-pointer text-left","disabled:cursor-not-allowed disabled:opacity-50 ","focus-within:outline-none focus-within:ring  focus:ring-offset-2 focus:ring-offset-gray-100"],{variants:{errorState:{false:"",true:"border-red-500!  pr-12"},successState:{false:"",true:"border-green-500! pr-12"},size:{small:"px-3 py-2",medium:"px-4 py-3",large:"px-5 py-3"},variant:{primary:"border rounded-xl border-gray-400",secondary:"border-2 rounded-3xl border-gray-400 disabled:bg-gray-200",ghost:"rounded-xs bg-gray-200"},openState:{false:"",true:"bg-gray-200"},disabled:{false:"",true:"text-gray-400 bg-gray-400 hover:not-[]:"}},defaultVariants:{variant:"primary",size:"medium",errorState:!1,successState:!1}}),B=m(["py-2 px-4 w-full hover:opacity-70 cursor-pointer "],{variants:{variant:{primary:" rounded-xl  bg-white",secondary:" rounded-3xl  disabled:bg-gray-200 bg-white",ghost:"rounded-3xl bg-gray-200 "},selectType:{single:"",multiple:"flex  items-center gap-2"}},defaultVariants:{variant:"primary",selectType:"single"}}),_=m(" text-left ",{variants:{size:{small:"text-base px-2 ",medium:"text-xl py-1 px-2",large:"text-2xl py-2 px-4"}},defaultVariants:{size:"medium"}}),ae=m(" text-left ",{variants:{size:{small:"text-base ",medium:"text-xl ",large:"text-2xl "},errorState:{false:"",true:"border-red-500!  pr-12"},successState:{false:"",true:"border-green-500! pr-12"},disabledState:{false:"",true:"text-gray-800 hover:not-[]:"}},defaultVariants:{size:"medium"}}),I=m("flex flex-col gap-2 absolute z-50 top-[calc(100%+0.5rem)] w-[100%] left-0 right-0 ",{variants:{size:{small:" shadow-xs",medium:" shadow-md",large:" shadow-lg"},variant:{primary:" rounded-xl border-gray-400 bg-white ",secondary:" rounded-3xl border-gray-400 disabled:bg-gray-200 bg-white",ghost:"rounded-none bg-gray-200 "}},defaultVariants:{variant:"primary",size:"medium"}});function A({options:a,defaultSelectedSingleValue:u={value:"",label:""},defaultSelectedMultipleValues:D=[],placeholder:M="Select a value",error:s,success:r,disabled:i,variant:p="primary",className:F="",label:x,selectType:c="single",classNameLabel:q="",classNameError:G="",classNameDropMenuContainer:k="",classNameDropMenuElementButton:j="",classNameDropMenuElementTitle:L="",classNameContainerSelectedMultipleOptions:$="",classNamePlaceholder:H="",size:t="medium",handleSelectValue:J}){const[b,V]=d.useState(!1),w=d.useRef(null),[P,K]=d.useState({value:u.value,label:u.label}),[T,Q]=d.useState(D);function g(e,o){o==="single"&&(K(e),J(e),V(!1)),o==="multiple"&&Q(E=>E.find(C=>C.value===e.value)?E.filter(C=>C.value!==e.value):[...E,e])}return d.useEffect(()=>{if(b&&w.current){let e=function(o){w.current?.contains(o.target)||V(!1)};return document.addEventListener("click",o=>e(o)),()=>removeEventListener("click",e)}},[b]),l.jsxs("div",{className:"relative",ref:w,children:[x&&l.jsx(X,{label:x,error:s,success:r,disabled:i,size:t,classNameLabel:q,children:x}),l.jsxs("button",{onClick:()=>V(e=>!e),className:n(le({variant:p,openState:b,disabled:i,successState:!!r,errorState:!!s,size:t}),F),disabled:i,children:[c==="single"&&l.jsx("p",{className:n(ae({errorState:!!s,successState:!!r,disabledState:i,size:t}),q),children:c==="single"&&P.label||u.label}),c==="multiple"&&l.jsx("div",{className:n("flex gap-2 h-[35px] items-center",$),children:T.length>0?T.map(e=>l.jsx(R,{selectedValue:e.label,error:s,disabled:i,success:r,size:t})):l.jsx("p",{className:n(z({errorState:!!s,successState:!!r,disabledState:i,sizeType:t}),H),children:M})})]}),b&&l.jsx(l.Fragment,{children:c==="single"?l.jsx("div",{className:n(I({variant:p,size:t}),k),children:a.map(e=>l.jsxs("button",{onClick:()=>g(e,"single"),className:n(B({variant:p}),"flex justify-between items-center",j),children:[l.jsx("p",{className:n(_({size:t}),L),children:e.label}),P.value===e.value&&l.jsx(ee,{})]},e.value))}):l.jsx("div",{className:n(I({variant:p,size:t}),k),children:a.map(e=>l.jsxs("button",{onClick:()=>g(e,"multiple"),className:n(B({variant:p,selectType:c}),j),title:"",children:[l.jsx(W,{handleChange:()=>{},onClick:()=>g(e,"multiple"),onChange:()=>g(e,"multiple"),checked:!!T.find(o=>o.value===e.value||!1),sizeType:t||"medium"}),l.jsx("p",{className:n(_({size:t}),L),children:e.label})]},e.value))})}),s&&l.jsx("p",{className:n(U({sizeType:t}),G),children:s})]})}A.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  value: string;\r
  label: string;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"OptionsType[]"},description:""},defaultSelectedSingleValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  value: string;\r
  label: string;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:'{ value: "", label: "" }',computed:!1}},defaultSelectedMultipleValues:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  value: string;\r
  label: string;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"OptionsType[]"},description:"",defaultValue:{value:"[]",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},selectType:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},classNameLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameError:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameDropMenuContainer:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameDropMenuElementButton:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameDropMenuElementTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameContainerSelectedMultipleOptions:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNamePlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select a value"',computed:!1}},handleSelectValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: OptionsType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  value: string;\r
  label: string;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const ne=a=>l.jsx("div",{className:"h-[400px] ",children:l.jsx(A,{...a})}),be={title:"Example / Dropdown",component:ne,argTypes:{defaultSelectedSingleValue:{control:"object",defaultValue:{value:"option1",label:"Option 1"},description:"The value should be found in the <b>options attribute</b> array"},options:{control:"object",defaultValue:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},label:{control:"text",defaultValue:"Dropdown label"},placeholder:{control:"text",defaultValue:"Placeholder when no options is selected",type:"string"},size:{control:"radio",options:["small","medium","large"]},variant:{control:"radio",options:["primary","secondary","ghost"],defaultValue:"primary"},error:{control:"text",defaultValue:"",type:"string"},success:{control:"boolean",defaultValue:!1,type:"boolean"},disabled:{control:"boolean",defaultValue:!1,type:"boolean"},selectType:{control:"radio",options:["single","multiple"],defaultValue:"single"},className:{control:"check",defaultValue:"className of the dropdown container",type:"string"},classNameLabel:{control:"check",defaultValue:"",type:"string"},classNameError:{control:"check",defaultValue:"",type:"string"},classNameDropMenuContainer:{control:"check",defaultValue:"",type:"string"},classNameDropMenuElementButton:{control:"check",defaultValue:"",type:"string"},classNameDropMenuElementTitle:{control:"check",defaultValue:"",type:"string"},classNameContainerSelectedMultipleOptions:{control:"check",defaultValue:"",type:"string"},classNamePlaceholder:{control:"check",defaultValue:"",type:"string"},handleSelectValue:{control:"check",description:"Function called when an option is selected <b> handleSelectValue: (value: OptionsType) => void;</b>"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}},tags:["autodocs"]},v={args:{label:"Dropdown label",defaultSelectedSingleValue:{value:"option1",label:" Option 1"},selectType:"single",variant:"primary",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",handleSelectValue:a=>console.log(a)}},f={args:{label:"Dropdown label",defaultSelectedMultipleValues:[{value:"option1",label:" Option 1"}],selectType:"multiple",variant:"primary",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",handleSelectValue:a=>console.log(a)}},N={args:{label:"Dropdown label",defaultSelectedMultipleValues:[{value:"option1",label:" Option 1"}],selectType:"multiple",variant:"secondary",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",handleSelectValue:a=>console.log(a)}},y={args:{label:"Dropdown label",defaultSelectedMultipleValues:[{value:"option1",label:" Option 1"}],selectType:"multiple",variant:"ghost",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",handleSelectValue:a=>console.log(a)}},h={args:{label:"Dropdown label",defaultSelectedSingleValue:{value:"option1",label:" Option 1"},selectType:"multiple",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",handleSelectValue:a=>console.log(a),success:!0}},S={args:{label:"Dropdown label",defaultSelectedSingleValue:{value:"option1",label:" Option 1"},selectType:"multiple",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",handleSelectValue:a=>console.log(a),error:"Error message"}},O={args:{label:"Dropdown label",defaultSelectedMultipleValues:[{value:"option1",label:" Option 1"}],selectType:"multiple",variant:"primary",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],className:"",classNameLabel:"",classNameError:"",classNameDropMenuContainer:"",classNameDropMenuElementButton:"",classNameDropMenuElementTitle:"",classNameContainerSelectedMultipleOptions:"",classNamePlaceholder:"",disabled:!0,handleSelectValue:a=>console.log(a)}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValue: {
      value: "option1",
      label: " Option 1"
    },
    selectType: "single",
    variant: "primary",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: value => console.log(value)
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [{
      value: "option1",
      label: " Option 1"
    }],
    selectType: "multiple",
    variant: "primary",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: value => console.log(value)
  }
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [{
      value: "option1",
      label: " Option 1"
    }],
    selectType: "multiple",
    variant: "secondary",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: value => console.log(value)
  }
}`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [{
      value: "option1",
      label: " Option 1"
    }],
    selectType: "multiple",
    variant: "ghost",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: value => console.log(value)
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValue: {
      value: "option1",
      label: " Option 1"
    },
    selectType: "multiple",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: value => console.log(value),
    success: true
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedSingleValue: {
      value: "option1",
      label: " Option 1"
    },
    selectType: "multiple",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    handleSelectValue: value => console.log(value),
    error: "Error message"
  }
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dropdown label",
    defaultSelectedMultipleValues: [{
      value: "option1",
      label: " Option 1"
    }],
    selectType: "multiple",
    variant: "primary",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    className: "",
    classNameLabel: "",
    classNameError: "",
    classNameDropMenuContainer: "",
    classNameDropMenuElementButton: "",
    classNameDropMenuElementTitle: "",
    classNameContainerSelectedMultipleOptions: "",
    classNamePlaceholder: "",
    disabled: true,
    handleSelectValue: value => console.log(value)
  }
}`,...O.parameters?.docs?.source}}};const ge=["DropdownSingleDefault","DropdownMultipleOptionsDefault","DropdownMultipleOptionsSecondary","DropdownMultipleOptionsGhost","DropdownSuccess","DropdownError","DropdownMultipleOptionsDisabled"];export{S as DropdownError,f as DropdownMultipleOptionsDefault,O as DropdownMultipleOptionsDisabled,y as DropdownMultipleOptionsGhost,N as DropdownMultipleOptionsSecondary,v as DropdownSingleDefault,h as DropdownSuccess,ge as __namedExportsOrder,be as default};
