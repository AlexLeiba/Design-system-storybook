import type { Meta, StoryObj } from "@storybook/react";
import { Slider, SliderItem } from "../components/ui/Slider/Slider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const meta: Meta<typeof Slider> = {
  title: "Example/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "check" },
    className: { control: "check" },
    navButtonIconSize: { control: "check", defaultValue: 20 },
    navButtonLeftClassName: { control: "check" },
    navButtonRightClassName: { control: "check" },
    navButtonLeftIcon: { control: "check" },
    navButtonRightIcon: { control: "check" },
    paginationDotsButtonClassName: { control: "check" },
    paginationDotsContainerClassName: { control: "check" },
    paginationDotsSelectedButtonColor: { control: "check" },
    paginationDotsButtonColor: { control: "check" },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const SliderDefault: Story = {
  render: () => (
    <Slider
      className=""
      paginationDotsContainerClassName=""
      paginationDotsButtonClassName=""
      paginationDotsSelectedButtonColor=""
      paginationDotsButtonColor=""
      navButtonLeftClassName=""
      navButtonRightClassName=""
      navButtonIconSize={20}
      navButtonRightIcon={<ChevronRight />}
      navButtonLeftIcon={<ChevronLeft />}
    >
      <SliderItem className="">
        <img
          src={"/germany.webp"}
          alt="germany"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 text-shadow-md text-shadow-zinc-950 text-white p-8">
          <h1 className="text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            autem.
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            aliquid inventore, sapiente facere provident mollitia accusamus
            delectus! Suscipit, rerum eligendi.
          </p>
        </div>
      </SliderItem>
      <SliderItem>
        <img
          src={"/london.webp"}
          alt="london"
          className=" object-cover w-full h-full"
        />
        <div className="absolute bottom-0 text-shadow-zinc-950 text-white p-8">
          <h1 className="text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            autem.
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            aliquid inventore, sapiente facere provident mollitia accusamus
            delectus! Suscipit, rerum eligendi.
          </p>
        </div>
      </SliderItem>
      <SliderItem>
        <img
          src={"/london-2.webp"}
          alt="london-2"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 text-shadow-zinc-950 text-shadow-md text-white p-8">
          <h1 className="text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            autem.
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            aliquid inventore, sapiente facere provident mollitia accusamus
            delectus! Suscipit, rerum eligendi.
          </p>
        </div>
      </SliderItem>
    </Slider>
  ),
};
