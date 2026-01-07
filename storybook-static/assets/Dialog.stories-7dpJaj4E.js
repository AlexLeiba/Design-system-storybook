import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s,R as H}from"./iframe-C4cmufTQ.js";import{c as T}from"./index-BE1rps4w.js";import{c as d}from"./utilities-BByubqM6.js";import{B as m}from"./Button-BFQyiAQi.js";import{X as P}from"./x-DY4l_r1X.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-n8mzvmWM.js";const y=s.createContext({open:!1,setOpen:()=>{},handleSubmit:()=>{},handleCancel:()=>{}}),R=T(["flex flex-col gap-8 justify-between bg-white z-50 p-4 rounded-2xl lg:mx-[25%] mx-[10%] w-full",,]);function h({children:t,handleSubmit:a,handleCancel:u,handleClose:r,isOpened:i=!1,withClickOutside:c=!0,className:b="",...D}){const[n,l]=s.useState(i),o=s.useRef(null);return H.useEffect(()=>{if(!c)return;const N=j=>{o.current&&!o.current.contains(j.target)&&(l(!1),r?.())};return document.addEventListener("click",N),()=>{document.removeEventListener("click",N)}},[c]),s.useEffect(()=>{l(i)},[i]),s.useEffect(()=>(n?document.body.style.overflow="hidden":(r?.(),document.body.style.overflow="auto"),()=>{document.body.style.overflow="auto"}),[n]),e.jsx(y.Provider,{value:{open:n,setOpen:l,handleSubmit:a,handleCancel:u},children:e.jsx("div",{className:d(n?"bg-black/50 fixed inset-0 flex items-center ":"hidden"),...D,children:n&&e.jsx("div",{ref:o,className:d(R(),b),children:t})})})}function q(){return s.useContext(y)}function g({children:t,classNameCloseButton:a="",className:u="",...r}){const{setOpen:i}=q();return e.jsxs("div",{className:d("relative",u),...r,children:[e.jsx("button",{title:"Close",onClick:()=>i(c=>!c),className:d("absolute top-0 right-0 cursor-pointer hover:opacity-80",a),children:e.jsx(P,{})}),e.jsx("div",{className:"mt-6",children:t})]})}function f({children:t,className:a=""}){return e.jsx("div",{className:d(a),children:t})}const L=T(["flex w-full  gap-2"],{variants:{variant:{delete:"",submit:""},buttonDirection:{row:"flex-row",column:"flex-col"},buttonPosition:{left:"justify-start",right:"justify-end"}},defaultVariants:{variant:"delete",buttonDirection:"row",buttonPosition:"right"}});function p({variant:t,fullWidth:a,buttonDirection:u="row",buttonPosition:r="right",cancelButtonTitle:i,submitButtonTitle:c,classNameCancelButton:b="",classNameSubmitButton:D="",classNameContainerButtons:n="",loading:l,disabled:o,className:N="",...j}){const{setOpen:O,handleCancel:k,handleSubmit:V}=q();return e.jsx("div",{className:d("flex flex-col justify-end ",N),...j,children:e.jsxs("div",{className:d(L({variant:t,buttonDirection:u,buttonPosition:r}),n),children:[e.jsx(m,{disabled:l||o,fullWidth:a,onClick:()=>{k(),O(!1)},className:d(b),children:i||"Cancel"}),e.jsx(m,{loading:l,disabled:l||o,className:d(D),fullWidth:a,size:"medium",variant:t==="delete"?"destructive":"secondary",onClick:V,children:c||"Submit"})]})})}h.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isOpened:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withClickOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},classNameCloseButton:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"DialogBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{variant:{required:!1,tsType:{name:"union",raw:'"delete" | "submit"',elements:[{name:"literal",value:'"delete"'},{name:"literal",value:'"submit"'}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},cancelButtonTitle:{required:!1,tsType:{name:"string"},description:""},submitButtonTitle:{required:!1,tsType:{name:"string"},description:""},classNameCancelButton:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameSubmitButton:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameContainerButtons:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},buttonDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},buttonPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};function W({fullWidth:t,buttonDirection:a,buttonPosition:u,cancelButtonTitle:r,submitButtonTitle:i,variant:c,disabled:b,loading:D}){const[n,l]=s.useState(!1);return e.jsxs("div",{className:"h-[300px]",children:[e.jsx(m,{onClick:()=>l(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!1,isOpened:n,handleCancel:()=>l(!1),handleSubmit:()=>l(!1),handleClose:()=>l(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:b,loading:D,variant:c,fullWidth:t,buttonDirection:a,cancelButtonTitle:r,submitButtonTitle:i,buttonPosition:u,classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}const J={title:"Example/Dialog",component:W,tags:["autodocs"],argTypes:{isOpened:{control:"check",defaultValue:!1,description:"<b>boolean prop</b>  used to open the dialog or close",type:"boolean"},fullWidth:{control:"boolean",defaultValue:!1,type:"boolean"},buttonDirection:{control:"radio",options:["row","column"],defaultValue:"row",description:"Button direction <b>row</b>, <b>column</b>. Determines the layout of the buttons."},buttonPosition:{control:"radio",options:["left","right"]},variant:{control:"radio",options:["delete","submit"]},cancelButtonTitle:{control:"text",defaultValue:"Cancel",type:"string"},submitButtonTitle:{control:"text",defaultValue:"Submit",type:"string"},disabled:{control:"boolean",defaultValue:!1,type:"boolean"},loading:{control:"boolean",defaultValue:!1,type:"boolean"},withClickOutside:{control:"check",defaultValue:!1,description:"<b>boolean prop</b> detects if the user clicks outside to close the dialog, for testing purposes only it is set to false in order to keep the dialog visible while testing ",type:"boolean"}},parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}},x={render:t=>{const{fullWidth:a,buttonDirection:u,buttonPosition:r,cancelButtonTitle:i,submitButtonTitle:c,variant:b,disabled:D,loading:n}=t,[l,o]=s.useState(!1);return e.jsxs("div",{className:"h-[300px]",children:[e.jsx(m,{onClick:()=>o(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!1,isOpened:l,handleCancel:()=>o(!1),handleSubmit:()=>o(!1),handleClose:()=>o(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:D,loading:n,variant:b,fullWidth:a,buttonDirection:u,cancelButtonTitle:i,submitButtonTitle:c,buttonPosition:r,classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}},C={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{className:"h-[500px]",children:[e.jsx(m,{onClick:()=>a(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!0,isOpened:t,handleCancel:()=>a(!1),handleSubmit:()=>a(!1),handleClose:()=>a(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:!1,loading:!1,variant:"submit",fullWidth:!1,buttonDirection:"column",cancelButtonTitle:"Cancel",submitButtonTitle:"Submit",buttonPosition:"right",classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}},B={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{className:"h-[500px]",children:[e.jsx(m,{onClick:()=>a(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!0,isOpened:t,handleCancel:()=>a(!1),handleSubmit:()=>a(!1),handleClose:()=>a(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:!1,loading:!1,variant:"submit",fullWidth:!0,buttonDirection:"row",cancelButtonTitle:"Cancel",submitButtonTitle:"Submit",buttonPosition:"right",classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}},w={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{className:"h-[500px]",children:[e.jsx(m,{onClick:()=>a(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!0,isOpened:t,handleCancel:()=>a(!1),handleSubmit:()=>a(!1),handleClose:()=>a(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:!1,loading:!1,variant:"submit",fullWidth:!1,buttonDirection:"row",cancelButtonTitle:"Cancel",submitButtonTitle:"Submit",buttonPosition:"right",classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}},S={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{className:"h-[500px]",children:[e.jsx(m,{onClick:()=>a(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!0,isOpened:t,handleCancel:()=>a(!1),handleSubmit:()=>a(!1),handleClose:()=>a(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:!1,loading:!1,variant:"submit",fullWidth:!1,buttonDirection:"row",cancelButtonTitle:"Cancel",submitButtonTitle:"Submit",buttonPosition:"left",classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}},v={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{className:"h-[500px]",children:[e.jsx(m,{onClick:()=>a(!0),children:"Open Dialog"}),e.jsxs(h,{className:"",withClickOutside:!0,isOpened:t,handleCancel:()=>a(!1),handleSubmit:()=>a(!1),handleClose:()=>a(!1),children:[e.jsx(g,{classNameCloseButton:"",className:"",children:e.jsx("h2",{className:"text-2xl",children:"Dialog Title"})}),e.jsx(f,{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla, nesciunt facilis tempora at non modi reiciendis magnam aliquid consequatur?"}),e.jsx(p,{disabled:!1,loading:!1,variant:"delete",fullWidth:!1,buttonDirection:"row",cancelButtonTitle:"Cancel",submitButtonTitle:"Submit",buttonPosition:"right",classNameCancelButton:"",classNameSubmitButton:"",className:""})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      fullWidth,
      buttonDirection,
      buttonPosition,
      cancelButtonTitle,
      submitButtonTitle,
      variant,
      disabled,
      loading
    } = args;
    const [showDialog, setShowDialog] = useState(false);
    return <div className="h-[300px]">\r
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>\r
\r
        <Dialog className="" withClickOutside={false} isOpened={showDialog} handleCancel={() => setShowDialog(false)} handleSubmit={() => setShowDialog(false)} handleClose={() => setShowDialog(false)}>\r
          <DialogHeader classNameCloseButton="" className="">\r
            <h2 className="text-2xl">Dialog Title</h2>\r
          </DialogHeader>\r
\r
          <DialogBody className="">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,\r
            nesciunt facilis tempora at non modi reiciendis magnam aliquid\r
            consequatur?\r
          </DialogBody>\r
\r
          <DialogFooter disabled={disabled} loading={loading} variant={variant} fullWidth={fullWidth} buttonDirection={buttonDirection} cancelButtonTitle={cancelButtonTitle} submitButtonTitle={submitButtonTitle} buttonPosition={buttonPosition} classNameCancelButton="" classNameSubmitButton="" className="" />\r
        </Dialog>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showDialog, setShowDialog] = useState(false);
    return <div className="h-[500px]">\r
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>\r
\r
        <Dialog className="" withClickOutside={true} isOpened={showDialog} handleCancel={() => setShowDialog(false)} handleSubmit={() => setShowDialog(false)} handleClose={() => setShowDialog(false)}>\r
          <DialogHeader classNameCloseButton="" className="">\r
            <h2 className="text-2xl">Dialog Title</h2>\r
          </DialogHeader>\r
\r
          <DialogBody className="">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,\r
            nesciunt facilis tempora at non modi reiciendis magnam aliquid\r
            consequatur?\r
          </DialogBody>\r
\r
          <DialogFooter disabled={false} loading={false} variant={"submit"} fullWidth={false} buttonDirection={"column"} cancelButtonTitle={"Cancel"} submitButtonTitle={"Submit"} buttonPosition={"right"} classNameCancelButton="" classNameSubmitButton="" className="" />\r
        </Dialog>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showDialog, setShowDialog] = useState(false);
    return <div className="h-[500px]">\r
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>\r
\r
        <Dialog className="" withClickOutside={true} isOpened={showDialog} handleCancel={() => setShowDialog(false)} handleSubmit={() => setShowDialog(false)} handleClose={() => setShowDialog(false)}>\r
          <DialogHeader classNameCloseButton="" className="">\r
            <h2 className="text-2xl">Dialog Title</h2>\r
          </DialogHeader>\r
\r
          <DialogBody className="">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,\r
            nesciunt facilis tempora at non modi reiciendis magnam aliquid\r
            consequatur?\r
          </DialogBody>\r
\r
          <DialogFooter disabled={false} loading={false} variant={"submit"} fullWidth={true} buttonDirection={"row"} cancelButtonTitle={"Cancel"} submitButtonTitle={"Submit"} buttonPosition={"right"} classNameCancelButton="" classNameSubmitButton="" className="" />\r
        </Dialog>\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showDialog, setShowDialog] = useState(false);
    return <div className="h-[500px]">\r
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>\r
\r
        <Dialog className="" withClickOutside={true} isOpened={showDialog} handleCancel={() => setShowDialog(false)} handleSubmit={() => setShowDialog(false)} handleClose={() => setShowDialog(false)}>\r
          <DialogHeader classNameCloseButton="" className="">\r
            <h2 className="text-2xl">Dialog Title</h2>\r
          </DialogHeader>\r
\r
          <DialogBody className="">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,\r
            nesciunt facilis tempora at non modi reiciendis magnam aliquid\r
            consequatur?\r
          </DialogBody>\r
\r
          <DialogFooter disabled={false} loading={false} variant={"submit"} fullWidth={false} buttonDirection={"row"} cancelButtonTitle={"Cancel"} submitButtonTitle={"Submit"} buttonPosition={"right"} classNameCancelButton="" classNameSubmitButton="" className="" />\r
        </Dialog>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showDialog, setShowDialog] = useState(false);
    return <div className="h-[500px]">\r
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>\r
\r
        <Dialog className="" withClickOutside={true} isOpened={showDialog} handleCancel={() => setShowDialog(false)} handleSubmit={() => setShowDialog(false)} handleClose={() => setShowDialog(false)}>\r
          <DialogHeader classNameCloseButton="" className="">\r
            <h2 className="text-2xl">Dialog Title</h2>\r
          </DialogHeader>\r
\r
          <DialogBody className="">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,\r
            nesciunt facilis tempora at non modi reiciendis magnam aliquid\r
            consequatur?\r
          </DialogBody>\r
\r
          <DialogFooter disabled={false} loading={false} variant={"submit"} fullWidth={false} buttonDirection={"row"} cancelButtonTitle={"Cancel"} submitButtonTitle={"Submit"} buttonPosition={"left"} classNameCancelButton="" classNameSubmitButton="" className="" />\r
        </Dialog>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showDialog, setShowDialog] = useState(false);
    return <div className="h-[500px]">\r
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>\r
\r
        <Dialog className="" withClickOutside={true} isOpened={showDialog} handleCancel={() => setShowDialog(false)} handleSubmit={() => setShowDialog(false)} handleClose={() => setShowDialog(false)}>\r
          <DialogHeader classNameCloseButton="" className="">\r
            <h2 className="text-2xl">Dialog Title</h2>\r
          </DialogHeader>\r
\r
          <DialogBody className="">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,\r
            nesciunt facilis tempora at non modi reiciendis magnam aliquid\r
            consequatur?\r
          </DialogBody>\r
\r
          <DialogFooter disabled={false} loading={false} variant={"delete"} fullWidth={false} buttonDirection={"row"} cancelButtonTitle={"Cancel"} submitButtonTitle={"Submit"} buttonPosition={"right"} classNameCancelButton="" classNameSubmitButton="" className="" />\r
        </Dialog>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const K=["DialogDefault","DialogVertical","DialogHorizontalFullWidth","DialogHorizontalRight","DialogHorizontalLeft","DialogDelete"];export{x as DialogDefault,v as DialogDelete,B as DialogHorizontalFullWidth,S as DialogHorizontalLeft,w as DialogHorizontalRight,C as DialogVertical,K as __namedExportsOrder,J as default};
