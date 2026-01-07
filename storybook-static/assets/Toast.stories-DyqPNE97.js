import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-C4cmufTQ.js";import{c as b}from"./index-BE1rps4w.js";import{c as j}from"./utilities-BByubqM6.js";import{X as S}from"./x-DY4l_r1X.js";import{a as k,B as _}from"./badge-check-DdGey_EI.js";import{c as z}from"./createLucideIcon-n8mzvmWM.js";import{B as r}from"./Button-BFQyiAQi.js";import"./preload-helper-PPVm8Dsz.js";const E=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]],P=z("badge-info",E),R=b("relative px-10 rounded-md toast-animated",{variants:{variant:{error:"bg-red-600 text-white",success:"bg-green-600 text-white",info:"bg-gray-200 text-black",warning:"bg-yellow-400 text-black"},sizeType:{small:"py-1 text-base",medium:"py-2 text-xl",large:"py-3 text-2xl"},fullWidth:{true:"w-full",false:"w-fit"}},defaultVariants:{variant:"error",sizeType:"medium"}});function w({type:s,children:t,sizeType:a,className:m="",fullWidth:d=!1,...i}){return e.jsx("div",{className:j(R({variant:s,sizeType:a,fullWidth:d}),m),...i,children:t})}w.__docgenInfo={description:"",methods:[],displayName:"ToastBadge",props:{type:{required:!0,tsType:{name:"union",raw:'"error" | "success" | "info" | "warning"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1}}};const C=y.createContext({toastData:[],setToastData:()=>{}});function c({children:s}){const[t,a]=y.useState([]);return e.jsx(C.Provider,{value:{toastData:t,setToastData:a},children:s})}c.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q=b("w-fit absolute z-50 inline-flex  flex-col items-center gap-2",{variants:{position:{"top-left":"left-2 items-start","top-center":"left-1/2  -translate-x-1/2  ","top-right":"right-2 items-end","bottom-left":"bottom-2 left-2 items-start","bottom-center":"bottom-2 left-1/2 -translate-x-1/2  ","bottom-right":"bottom-2 right-2  items-end"},fullWidth:{true:"w-full",false:""}},compoundVariants:[{position:["top-left","bottom-left","bottom-right","top-right"],fullWidth:!0,class:"left-0 right-0"}],defaultVariants:{position:"top-right"}}),D={error:e.jsx(k,{}),info:e.jsx(P,{}),success:e.jsx(_,{}),warning:e.jsx(k,{})};function o({className:s="",classNameToastBadge:t="",sizeType:a="medium",fullWidth:m=!1,position:d="top-center"}){const{toastData:i,setToastData:N}=y.useContext(C);function B(n){N(W=>W.filter(I=>I.timestamp!==n))}return e.jsx("div",{className:j(q({position:d,fullWidth:m}),s),children:i.map(n=>e.jsxs(w,{className:j(t),type:n.type,sizeType:a,fullWidth:m,children:[e.jsx("div",{className:"absolute left-2 top-1/2 translate-y-[-50%] ",children:D[n.type]}),e.jsxs("p",{children:[" ",n.message]}),e.jsx("button",{onClick:()=>B(n.timestamp),title:`close ${n.type} toast`,className:"absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer hover:opacity-70",children:e.jsx(S,{})})]},n.timestamp))})}o.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{classNameToastBadge:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},sizeType:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"\r
| "top-right"\r
| "bottom-left"\r
| "bottom-right"\r
| "top-center"\r
| "bottom-center"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-center"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};function l(s=2e3){const{toastData:t,setToastData:a}=y.useContext(C);console.log("🚀 ~ useToast ~ toastData:",t),y.useEffect(()=>{if(t&&t.length>0){let i=setTimeout(()=>{m()},s);return()=>clearTimeout(i)}},[t]);function m(){a(i=>i.slice(1))}function d(i,N){const B={message:i,type:N,timestamp:Date.now()};a(n=>[...n,B])}return{handler:d}}function u(s){function t(){const{handler:a}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>a("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>a("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>a("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>a("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{className:"",classNameToastBadge:"",position:s.position,fullWidth:s.fullWidth,sizeType:s.sizeType}),e.jsx(t,{})]})})}const G={title:"Example/Toast",component:o,tags:["autodocs"],argTypes:{sizeType:{control:"radio",options:["small","medium","large"],defaultValue:"medium"},fullWidth:{control:"boolean",defaultValue:!1},position:{control:"radio",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],defaultValue:"top-center"},classNameToastBadge:{control:"check"},className:{control:"check",description:"Toast container className"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}};function g(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",position:"top-left",className:"",classNameToastBadge:""}),e.jsx(s,{})]})})}function p(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",position:"top-right",className:"",classNameToastBadge:""}),e.jsx(s,{})]})})}function T(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",position:"top-center",className:"",classNameToastBadge:""}),e.jsx(s,{})]})})}function f(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",position:"bottom-left",className:"",classNameToastBadge:""}),e.jsx(s,{})]})})}function h(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",position:"bottom-right",className:"",classNameToastBadge:""}),e.jsx(s,{})]})})}function v(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",position:"bottom-center",className:"",classNameToastBadge:""}),e.jsx(s,{})]})})}function x(){function s(){const{handler:t}=l(1e3);return e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx(r,{variant:"destructive",onClick:()=>t("Error toast message","error"),children:"Trigger error toast"}),e.jsx(r,{variant:"primary",onClick:()=>t("Info toast message","info"),children:"Trigger info toast"}),e.jsx(r,{variant:"secondary",onClick:()=>t("Warning toast message","warning"),children:"Trigger warning toast"}),e.jsx(r,{variant:"primary",className:"bg-green-600",onClick:()=>t("Success toast message","success"),children:"Trigger success toast"})]})}return e.jsx("div",{className:"h-[300px]",children:e.jsxs(c,{children:[e.jsx(o,{sizeType:"medium",className:"",classNameToastBadge:"",fullWidth:!0}),e.jsx(s,{})]})})}u.__docgenInfo={description:"",methods:[],displayName:"ToastDefault",props:{position:{required:!0,tsType:{name:"union",raw:`| "top-left"\r
| "top-center"\r
| "top-right"\r
| "bottom-left"\r
| "bottom-center"\r
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:""},sizeType:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},fullWidth:{required:!0,tsType:{name:"boolean"},description:""},classNameToastBadge:{required:!0,tsType:{name:"string"},description:""},className:{required:!0,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"ToastTopLeft"};p.__docgenInfo={description:"",methods:[],displayName:"ToastTopRight"};T.__docgenInfo={description:"",methods:[],displayName:"ToastTopCenter"};f.__docgenInfo={description:"",methods:[],displayName:"ToastBottomLeft"};h.__docgenInfo={description:"",methods:[],displayName:"ToastBottomRight"};v.__docgenInfo={description:"",methods:[],displayName:"ToastBottomCenter"};x.__docgenInfo={description:"",methods:[],displayName:"ToastFullWidth"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`function ToastDefault(args: {
  position: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  sizeType: "small" | "medium" | "large";
  fullWidth: boolean;
  classNameToastBadge: string;
  className: string;
}) {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast className="" classNameToastBadge="" position={args.position} fullWidth={args.fullWidth} sizeType={args.sizeType} />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`function ToastTopLeft() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" position={"top-left"} className="" classNameToastBadge="" />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function ToastTopRight() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" position={"top-right"} className="" classNameToastBadge="" />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`function ToastTopCenter() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" position={"top-center"} className="" classNameToastBadge="" />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`function ToastBottomLeft() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" position={"bottom-left"} className="" classNameToastBadge="" />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`function ToastBottomRight() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" position={"bottom-right"} className="" classNameToastBadge="" />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`function ToastBottomCenter() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" position={"bottom-center"} className="" classNameToastBadge="" />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`function ToastFullWidth() {
  function TestToast() {
    const {
      handler
    } = useToast(1000);
    return <div className="flex gap-2 ">\r
        <Button variant={"destructive"} onClick={() => handler("Error toast message", "error")}>\r
          Trigger error toast\r
        </Button>\r
        <Button variant={"primary"} onClick={() => handler("Info toast message", "info")}>\r
          Trigger info toast\r
        </Button>\r
        <Button variant={"secondary"} onClick={() => handler("Warning toast message", "warning")}>\r
          Trigger warning toast\r
        </Button>\r
        <Button variant={"primary"} className="bg-green-600" onClick={() => handler("Success toast message", "success")}>\r
          Trigger success toast\r
        </Button>\r
      </div>;
  }
  return <div className="h-[300px]">\r
      <ToastProvider>\r
        <Toast sizeType="medium" className="" classNameToastBadge="" fullWidth />\r
        <TestToast />\r
      </ToastProvider>\r
    </div>;
}`,...x.parameters?.docs?.source}}};const H=["ToastDefault","ToastTopLeft","ToastTopRight","ToastTopCenter","ToastBottomLeft","ToastBottomRight","ToastBottomCenter","ToastFullWidth"];export{v as ToastBottomCenter,f as ToastBottomLeft,h as ToastBottomRight,u as ToastDefault,x as ToastFullWidth,T as ToastTopCenter,g as ToastTopLeft,p as ToastTopRight,H as __namedExportsOrder,G as default};
