import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionHeaderTrigger,
} from "../components/ui/Accordion/Accordion";

type AccordionExampleUiProps = {
  defaultExpandedTab?: string;

  label1: string;
  label2: string;
  label3: string;
  name: string;
};
const AccordionExampleUi = ({
  label1 = "Tab",
  label2 = "Tab2",
  label3 = "Tab3",
  defaultExpandedTab,
  name,
}: AccordionExampleUiProps) => {
  return (
    <Accordion defaultExpandedTab={defaultExpandedTab}>
      <AccordionHeaderTrigger name={name || "tab1"} label={label1}>
        <AccordionContent>
          <h2 className="text-2xl">Accordion Content 1</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger name={name || "tab2"} label={label2}>
        <AccordionContent>
          <h2 className="text-xl">Accordion Content 2</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger name={name || "tab3"} label={label3}>
        <AccordionContent>
          <h2 className="text-xl">Accordion Content 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            deserunt, necessitatibus recusandae eos molestiae expedita nulla
            dolorum iste, praesentium quidem veniam! Dolor et impedit
            consequatur quaerat eveniet officiis ducimus molestias praesentium
            aperiam expedita minus perspiciatis, voluptatibus ab hic labore
            nulla at facere a aliquam. Perspiciatis voluptatum quas similique
            dolores repellendus, tenetur consequuntur dolorem eligendi quae
            quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint
            illum temporibus commodi non nemo maxime doloribus iste tenetur
            optio facere porro, sequi inventore! Perferendis explicabo
            consequatur corporis dolor eius, adipisci distinctio atque veritatis
            assumenda cum animi illo, aperiam enim ratione tempora pariatur.
            Facere, similique?
          </p>
          <p>d</p>
        </AccordionContent>
      </AccordionHeaderTrigger>
    </Accordion>
  );
};

const meta: Meta<typeof AccordionExampleUi> = {
  title: "Example/Accordion",
  component: AccordionExampleUi,
  tags: ["autodocs"],
  argTypes: {
    label1: {
      control: "text",
      defaultExpandedTab: "Accordion tab",
      description: "Label for each tab used on <b>AccordionHeaderTrigger</b>",
      type: "string",
    },
    label2: {
      control: "text",
      defaultExpandedTab: "Accordion tab 2",
      description: "Label for each tab used on <b>AccordionHeaderTrigger</b>",
      type: "string",
    },
    label3: {
      control: "text",
      defaultExpandedTab: "Accordion tab 3",
      description: "Label for each tab used on <b>AccordionHeaderTrigger</b>",
      type: "string",
    },
    name: {
      control: "check",
      description:
        "Unique custom <b>name</b> to identify each tab, used on component: <b>AccordionHeaderTrigger</b>",
      type: "string",
    },

    defaultExpandedTab: {
      control: "radio",
      options: ["tab1", "tab2", "tab3"],
      defaultValue: "tab1",
      description:
        "Default expanded tab, can be of any string value, used on component: <b>Accordion</b>",
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionExampleUi>;

export const AccordionUIExample: Story = {
  render: (args) => (
    // classname container
    <Accordion
      defaultExpandedTab={args.defaultExpandedTab || "tab1"}
      className="p-8"
    >
      <AccordionHeaderTrigger
        name={"tab1"}
        label={args.label1 || "Accordion Title 1"}
        className="text-xl font-bold"
        classNameContentLabel=""
        classNameContentLabelContainer=""
      >
        <AccordionContent className="">
          <h2 className="text-xl  mb-2">Accordion Content 1</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger
        className="text-xl font-bold"
        name={"tab2"}
        label={args.label2 || "Accordion Title 1"}
      >
        <AccordionContent>
          <h2 className="text-xl mb-2">Accordion content 2</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium nisi illo, nihil ullam ex.
          </p>
        </AccordionContent>
      </AccordionHeaderTrigger>
      <AccordionHeaderTrigger
        className="text-xl font-bold"
        name={"tab3"}
        label={args.label3 || "Accordion Title 1"}
      >
        <AccordionContent>
          <h2 className="text-xl mb-2">Accordion content 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            deserunt, necessitatibus recusandae eos molestiae expedita nulla
            dolorum iste, praesentium quidem veniam! Dolor et impedit
            consequatur quaerat eveniet officiis ducimus molestias praesentium
            aperiam expedita minus perspiciatis, voluptatibus ab hic labore
            nulla at facere a aliquam. Perspiciatis voluptatum quas similique
            dolores repellendus, tenetur consequuntur dolorem eligendi quae
            quibusdam exercitationem quos quo! Odit sunt quam, magni vel sint
            illum temporibus commodi non nemo maxime doloribus iste tenetur
            optio facere porro, sequi inventore! Perferendis explicabo
            consequatur corporis dolor eius, adipisci distinctio atque veritatis
            assumenda cum animi illo, aperiam enim ratione tempora pariatur.
            Facere, similique?
          </p>
          <p>d</p>
        </AccordionContent>
      </AccordionHeaderTrigger>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Check out the <b>code usage</b> and all <b>props</b>  by clicking the button below : <b>Show code</b>",
      },
    },
  },
};
