import { ChevronLeft, ChevronRight } from "lucide-react";
import React, {
  createContext,
  useContext,
  useEffect,
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

type Props = ComponentProps<"div"> & {
  children: React.ReactNode;
  navButtonIconSize?: number;
  navButtonRightIcon?: React.ReactNode;
  navButtonLeftIcon?: React.ReactNode;
  navButtonLeftClassName?: string;
  navButtonRightClassName?: string;
  paginationDotsButtonClassName?: string;
  paginationDotsContainerClassName?: string;
  paginationDotsSelectedButtonColor?: string;
  paginationDotsButtonColor?: string;
  animationInterval?: number;
};

export function Slider({
  children,
  navButtonRightIcon,
  navButtonLeftIcon,
  navButtonIconSize,
  navButtonLeftClassName,
  navButtonRightClassName,
  paginationDotsButtonClassName,
  paginationDotsContainerClassName,
  paginationDotsSelectedButtonColor,
  paginationDotsButtonColor,

  className = "",
  animationInterval = 0,
}: Props) {
  const [slider, setSlider] = useState(0);
  const childrenLength = React.Children.count(children);

  function handleMoveSlider(direction: "left" | "right") {
    if (direction === "left") {
      setSlider((prev) => {
        if (prev <= 0) {
          return childrenLength - 1;
        }
        return prev - 1;
      });
    }
    if (direction === "right") {
      setSlider((prev) => {
        if (prev + 1 === childrenLength) {
          return 0;
        }
        return prev + 1;
      });
    }
  }

  useEffect(() => {
    if (animationInterval <= 0) return;

    const intervalId = setInterval(() => {
      handleMoveSlider("right");
    }, animationInterval);

    return () => clearInterval(intervalId);
  }, [animationInterval, slider]);

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
          navButtonRightIcon={navButtonRightIcon}
          navButtonLeftIcon={navButtonLeftIcon}
          iconSize={navButtonIconSize}
          className={navButtonLeftClassName}
          title="previous slide"
          direction="left"
          onClick={() => handleMoveSlider("left")}
        />
        <div
          style={{
            minWidth: `100vw`,
            transform: `translateX(${slider === 0 ? 0 : -slider * 100}vw)`,
          }}
          className={cn(
            "transition-all duration-500 ease-in-out",
            className,
            "flex"
          )}
        >
          {children}
        </div>
        <NavButton
          navButtonRightIcon={navButtonRightIcon}
          navButtonLeftIcon={navButtonLeftIcon}
          iconSize={navButtonIconSize}
          title="next slide"
          direction="right"
          className={navButtonRightClassName}
          onClick={() => handleMoveSlider("right")}
        />
        <PaginatedDots
          buttonClassName={paginationDotsButtonClassName}
          className={paginationDotsContainerClassName}
          selectedButtonColor={paginationDotsSelectedButtonColor}
          buttonColor={paginationDotsButtonColor}
        />
      </div>
    </SliderContext.Provider>
  );
}
type SliderItemProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};
export function SliderItem({ children, className = "" }: SliderItemProps) {
  return (
    <div className={cn(className, "max-h-screen min-w-screen relative ")}>
      {children}
    </div>
  );
}

type NavButtonProps = ComponentProps<"button"> & {
  direction: "left" | "right";
  iconSize?: number;
  navButtonRightIcon?: React.ReactNode;
  navButtonLeftIcon?: React.ReactNode;
};
function NavButton({
  direction,
  className = "",
  iconSize,
  navButtonRightIcon,
  navButtonLeftIcon,
  ...props
}: NavButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer absolute top-1/2 translate-y-[-50%] ",
        "p-4 rounded-full bg-white/30 hover:bg-white/90 hover:shadow-2xl z-10",
        direction === "left" ? "left-6" : "right-6",
        className
      )}
      {...props}
    >
      {direction === "left" ? (
        navButtonLeftIcon ? (
          navButtonLeftIcon
        ) : (
          <ChevronLeft size={iconSize} />
        )
      ) : navButtonRightIcon ? (
        navButtonRightIcon
      ) : (
        <ChevronRight size={iconSize} />
      )}
    </button>
  );
}

type PaginatedDotsProps = ComponentProps<"button"> & {
  buttonClassName?: string;
  selectedButtonColor?: string;
  buttonColor?: string;
};
function PaginatedDots({
  className = "",
  buttonClassName = "",
  buttonColor = "#4a5565",
  selectedButtonColor = "#e5e7eb",
  ...props
}: PaginatedDotsProps) {
  const { slider, childrenLength, setSlider } = useSlider();
  const childrenArray = new Array(childrenLength).fill(0);
  return (
    <div
      className={cn(
        "bottom-4  gap-2 justify-center",
        "flex absolute left-1/2 translate-x-[-50%]",
        className
      )}
    >
      {childrenArray.map((_, index) => {
        return (
          <button
            title={(index + 1).toString()}
            key={index}
            onClick={() => setSlider(index)}
            {...props}
            className={cn(
              "p-2 bg-gray-800 hover:opacity-80 cursor-pointer rounded-full",
              buttonClassName
            )}
            style={{
              backgroundColor:
                slider === index
                  ? selectedButtonColor || "#e5e7eb"
                  : buttonColor || "#4a5565",
            }}
          />
        );
      })}{" "}
    </div>
  );
}
