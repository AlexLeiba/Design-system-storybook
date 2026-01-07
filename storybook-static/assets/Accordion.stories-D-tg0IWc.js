import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-C4cmufTQ.js";import{c as s}from"./utilities-BByubqM6.js";import{C as j}from"./chevron-down-ul_JFyO8.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-n8mzvmWM.js";const h=o.createContext({item:"",setItem:()=>{}});function N(){return o.useContext(h)}function x({defaultExpandedTab:i="",className:t="",children:l}){const[c,a]=o.useState(i);return e.jsx(h.Provider,{value:{item:c,setItem:a},children:e.jsx("div",{className:s("w-full p-2",t),children:l})})}function n({name:i="",children:t,className:l="",classNameContentLabel:c="",classNameContentLabelContainer:a="",label:b}){const{item:u,setItem:f}=N(),m=o.useRef(null),[g,q]=o.useState();o.useEffect(()=>{if(m.current){const p=m.current.getBoundingClientRect();q(p.height)}},[u]);function A(){f(p=>p===i?"":i)}return e.jsxs(e.Fragment,{children:[e.jsxs("button",{title:b,className:s("hover:underline hover:underline-offset-3 hover:opacity-70 flex  text-xl w-full justify-between p-2 cursor-pointer",l),onClick:A,children:[b,e.jsx(j,{className:s("transition-all",u===i?"rotate-180 ":"rotate-0")})]}),e.jsx("div",{className:s("border-b border-gray-400 transition-all duration-200 overflow-hidden",a),style:{height:u===i?g:0},children:e.jsx("div",{ref:m,className:s("p-2",c),children:t})})]})}function r({children:i,className:t=""}){return e.jsx("div",{className:s(t),children:i})}x.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultExpandedTab:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"AccordionHeaderTrigger",props:{name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},classNameContentLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},classNameContentLabelContainer:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"AccordionContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const v=({label1:i="Tab",label2:t="Tab2",label3:l="Tab3",defaultExpandedTab:c,name:a})=>e.jsxs(x,{defaultExpandedTab:c,children:[e.jsx(n,{name:a||"tab1",label:i,children:e.jsxs(r,{children:[e.jsx("h2",{className:"text-2xl",children:"Accordion Content 1"}),e.jsx("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."})]})}),e.jsx(n,{name:a||"tab2",label:t,children:e.jsxs(r,{children:[e.jsx("h2",{className:"text-xl",children:"Accordion Content 2"}),e.jsx("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."})]})}),e.jsx(n,{name:a||"tab3",label:l,children:e.jsxs(r,{children:[e.jsx("h2",{className:"text-xl",children:"Accordion Content 3"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt, necessitatibus recusandae eos molestiae expedita nulla dolorum iste, praesentium quidem veniam! Dolor et impedit consequatur quaerat eveniet officiis ducimus molestias praesentium aperiam expedita minus perspiciatis, voluptatibus ab hic labore nulla at facere a aliquam. Perspiciatis voluptatum quas similique dolores repellendus, tenetur consequuntur dolorem eligendi quae quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint illum temporibus commodi non nemo maxime doloribus iste tenetur optio facere porro, sequi inventore! Perferendis explicabo consequatur corporis dolor eius, adipisci distinctio atque veritatis assumenda cum animi illo, aperiam enim ratione tempora pariatur. Facere, similique?"}),e.jsx("p",{children:"d"})]})})]}),H={title:"Example/Accordion",component:v,tags:["autodocs"],argTypes:{label1:{control:"text",defaultExpandedTab:"Accordion tab",description:"Label for each tab used on <b>AccordionHeaderTrigger</b>",type:"string"},label2:{control:"text",defaultExpandedTab:"Accordion tab 2",description:"Label for each tab used on <b>AccordionHeaderTrigger</b>",type:"string"},label3:{control:"text",defaultExpandedTab:"Accordion tab 3",description:"Label for each tab used on <b>AccordionHeaderTrigger</b>",type:"string"},name:{control:"check",description:"Unique custom <b>name</b> to identify each tab, used on component: <b>AccordionHeaderTrigger</b>",type:"string"},defaultExpandedTab:{control:"radio",options:["tab1","tab2","tab3"],defaultValue:"tab1",description:"Default expanded tab, can be of any string value, used on component: <b>Accordion</b>",type:"string"}}},d={render:i=>e.jsxs(x,{defaultExpandedTab:i.defaultExpandedTab||"tab1",className:"p-8",children:[e.jsx(n,{name:"tab1",label:i.label1||"Accordion Title 1",className:"text-xl font-bold",classNameContentLabel:"",classNameContentLabelContainer:"",children:e.jsxs(r,{className:"",children:[e.jsx("h2",{className:"text-xl  mb-2",children:"Accordion Content 1"}),e.jsx("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."})]})}),e.jsx(n,{className:"text-xl font-bold",name:"tab2",label:i.label2||"Accordion Title 1",children:e.jsxs(r,{children:[e.jsx("h2",{className:"text-xl mb-2",children:"Accordion content 2"}),e.jsx("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium nisi illo, nihil ullam ex."})]})}),e.jsx(n,{className:"text-xl font-bold",name:"tab3",label:i.label3||"Accordion Title 1",children:e.jsxs(r,{children:[e.jsx("h2",{className:"text-xl mb-2",children:"Accordion content 3"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt, necessitatibus recusandae eos molestiae expedita nulla dolorum iste, praesentium quidem veniam! Dolor et impedit consequatur quaerat eveniet officiis ducimus molestias praesentium aperiam expedita minus perspiciatis, voluptatibus ab hic labore nulla at facere a aliquam. Perspiciatis voluptatum quas similique dolores repellendus, tenetur consequuntur dolorem eligendi quae quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint illum temporibus commodi non nemo maxime doloribus iste tenetur optio facere porro, sequi inventore! Perferendis explicabo consequatur corporis dolor eius, adipisci distinctio atque veritatis assumenda cum animi illo, aperiam enim ratione tempora pariatur. Facere, similique?"}),e.jsx("p",{children:"d"})]})})]}),parameters:{docs:{description:{story:"Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args =>
  // classname container
  <Accordion defaultExpandedTab={args.defaultExpandedTab || "tab1"} className="p-8">\r
      <AccordionHeaderTrigger name={"tab1"} label={args.label1 || "Accordion Title 1"} className="text-xl font-bold" classNameContentLabel="" classNameContentLabelContainer="">\r
        <AccordionContent className="">\r
          <h2 className="text-xl  mb-2">Accordion Content 1</h2>\r
          <p className="text-xs">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,\r
            quibusdam?\r
          </p>\r
          <p>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r
            laudantium nisi illo, nihil ullam ex.\r
          </p>\r
          <p>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r
            laudantium nisi illo, nihil ullam ex.\r
          </p>\r
          <p>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r
            laudantium nisi illo, nihil ullam ex.\r
          </p>\r
        </AccordionContent>\r
      </AccordionHeaderTrigger>\r
      <AccordionHeaderTrigger className="text-xl font-bold" name={"tab2"} label={args.label2 || "Accordion Title 1"}>\r
        <AccordionContent>\r
          <h2 className="text-xl mb-2">Accordion content 2</h2>\r
          <p className="text-xs">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,\r
            quibusdam?\r
          </p>\r
          <p>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r
            laudantium nisi illo, nihil ullam ex.\r
          </p>\r
        </AccordionContent>\r
      </AccordionHeaderTrigger>\r
      <AccordionHeaderTrigger className="text-xl font-bold" name={"tab3"} label={args.label3 || "Accordion Title 1"}>\r
        <AccordionContent>\r
          <h2 className="text-xl mb-2">Accordion content 3</h2>\r
          <p>\r
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque\r
            deserunt, necessitatibus recusandae eos molestiae expedita nulla\r
            dolorum iste, praesentium quidem veniam! Dolor et impedit\r
            consequatur quaerat eveniet officiis ducimus molestias praesentium\r
            aperiam expedita minus perspiciatis, voluptatibus ab hic labore\r
            nulla at facere a aliquam. Perspiciatis voluptatum quas similique\r
            dolores repellendus, tenetur consequuntur dolorem eligendi quae\r
            quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint\r
            illum temporibus commodi non nemo maxime doloribus iste tenetur\r
            optio facere porro, sequi inventore! Perferendis explicabo\r
            consequatur corporis dolor eius, adipisci distinctio atque veritatis\r
            assumenda cum animi illo, aperiam enim ratione tempora pariatur.\r
            Facere, similique?\r
          </p>\r
          <p>d</p>\r
        </AccordionContent>\r
      </AccordionHeaderTrigger>\r
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>"
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const w=["AccordionUIExample"];export{d as AccordionUIExample,w as __namedExportsOrder,H as default};
