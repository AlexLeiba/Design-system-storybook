import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionHeaderTrigger,
} from "../components/ui/Accordion/Accordion";

type AccordionExampleUiProps = {
  defaultExpandedTab?: string;

  label: string;
  value: string;
};
const AccordionExampleUi = ({
  label = "Tab",
  defaultExpandedTab,
  value,
}: AccordionExampleUiProps) => {
  return (
    <Accordion defaultExpandedTab={defaultExpandedTab}>
      <AccordionHeaderTrigger value={value || "tab1"} label={label + 1}>
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
      <AccordionHeaderTrigger value={value || "tab2"} label={label + 2}>
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
      <AccordionHeaderTrigger value={value || "tab3"} label={label + 3}>
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
    label: {
      control: "text",
      defaultExpandedTab: "Accordion tab",
      description: "Label for each tab used on <b>AccordionHeaderTrigger</b>",
    },
    value: {
      control: "check",
      description:
        "Unique custom value to identify each tab, used on component: <b>AccordionHeaderTrigger</b>",
    },

    defaultExpandedTab: {
      control: "radio",
      options: ["tab1", "tab2", "tab3"],
      description:
        "Default expanded tab, can be of any string value, used on component: <b>Accordion</b>",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionExampleUi>;

export const AccordionUIExample: Story = {
  render: (args) => (
    // classname container
    <Accordion defaultExpandedTab={args.defaultExpandedTab} className="p-8">
      <AccordionHeaderTrigger
        value={"tab1"}
        label={args.label || "Accordion Title 1"}
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
        value={"tab2"}
        label={"Accordion Title 2"}
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
        value={"tab3"}
        label={"Accordion title 3"}
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
