"use client";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./DotButton";

export default function SliderComponent({
  children,
  showDots = true,
}: {
  children: React.ReactNode[];
  showDots?: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi!
  );
  return (
    <div className="flex flex-col relative">
      <div
        className="overflow-hidden w-screen px-5 h-full md:h-auto z-0"
        ref={emblaRef}
      >
        <div className="flex gap-5">
          {children.map((child, idx) => (
            <div className="flex-none w-full min-w-0" key={idx}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {showDots && (
        <div className="absolute gap-3 z-10 top-[105%] md:top-[95%] lg:top-[90%] left-[42%] md:left-[48%] flex flex-wrap justify-end items-center mr-[calc((2.6rem - 1.4rem) / 2 * -1)]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${index === selectedIndex ? "border-white/100 bg-white" : "border-white/60"} appearance-none border-2 w-2 h-2 flex items-center justify-center rounded-full bg-transparent`}
            >
              <></>
            </DotButton>
          ))}
        </div>
      )}
    </div>
  );
}
