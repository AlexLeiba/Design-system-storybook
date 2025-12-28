import { ChevronLeft, ChevronRight } from "lucide-react";
import React, {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from "react";
import { cn } from "../../../../lib/utilities";

const SliderContext = createContext<{
  slider: number;
  setSlider: Dispatch<SetStateAction<number>>;
  childrenLength: number;
}>({
  slider: 1,
  setSlider: () => {},
  childrenLength: 0,
});

function useSlider() {
  const values = useContext(SliderContext);

  return values;
}
type Props = {
  children: React.ReactNode;
};
export function Slider({ children }: Props) {
  const [slider, setSlider] = useState(1);
  const childrenLength = React.Children.count(children);

  return (
    <SliderContext.Provider
      value={{
        slider,
        setSlider,
        childrenLength: React.Children.count(children),
      }}
    >
      <div className="overflow-hidden relative">
        <NavButton
          direction="left"
          onClick={() =>
            setSlider((prev) => {
              console.log("click");
              if (prev <= 1) {
                return childrenLength;
              }
              return prev - 1;
            })
          }
        />
        <div
          style={{ width: `${slider * 100}vw` }}
          className="flex  bg-green-500 justify-start flex-row-reverse "
        >
          {children}
        </div>
        <NavButton
          direction="right"
          onClick={() =>
            setSlider((prev) => {
              console.log("click");
              if (prev === childrenLength) {
                return 1;
              }
              return prev + 1;
            })
          }
        />
        <PaginatedDots />
      </div>
    </SliderContext.Provider>
  );
}
type SliderItemProps = {
  children: React.ReactNode;
};
export function SliderItem({ children }: SliderItemProps) {
  const { setSlider, slider, childrenLength } = useSlider();
  console.log("🚀 ~ SliderItem ~ slider:", slider, childrenLength);
  return <div className="min-w-screen relative">{children}</div>;
}

type NavButtonProps = ComponentProps<"button"> & {
  direction: "left" | "right";
};
function NavButton({ direction, ...props }: NavButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer absolute top-1/2 translate-y-[-50%] ",
        "p-4 rounded-full bg-white/30 hover:bg-white/90 hover:shadow-2xl z-10",
        direction === "left" ? "left-6" : "right-6"
      )}
      {...props}
    >
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

type PaginatedDotsProps = ComponentProps<"button"> & {};
function PaginatedDots({ ...props }: PaginatedDotsProps) {
  const { slider, childrenLength, setSlider } = useSlider();
  const childrenArray = new Array(childrenLength).fill(0);
  return (
    <div className="flex gap-2 justify-center absolute bottom-4 left-1/2 translate-x-[-50%]">
      {childrenArray.map((_, index) => {
        return (
          <button
            onClick={() => setSlider(index + 1)}
            {...props}
            className={cn(
              "p-2 bg-gray-800 hover:opacity-80 cursor-pointer rounded-full",
              slider === index + 1 ? "bg-gray-200" : "bg-gray-600"
            )}
          />
        );
      })}{" "}
    </div>
  );
}
