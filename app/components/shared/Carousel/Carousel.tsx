"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/Carousel.module.css";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./DotButton";
import { usePrevNextButtons, PrevButton, NextButton } from "./ArrowButtons";
import React from "react";

type CarouselProps = {
  children: React.ReactNode[];
  options: EmblaOptionsType & {
    adapt?: boolean;
    slidesPerView?: number;
    autoPlay?: boolean;
    dotButton?: boolean;
    arrowButtons?: boolean;
  };
};

export default function Carousel({ children, options }: CarouselProps) {
  const { slidesPerView = 1 } = options;
  const slides = React.Children.toArray(children);
  const plugins = [];

  if (options.autoPlay) plugins.push(Autoplay());
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi!
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      className={`${options.adapt ? styles.carousel_adapt : styles.carousel}`}
      style={
        !options.adapt
          ? ({
              "--slide-size": `${100 / slidesPerView}%`,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div
        className={`${styles.carousel__viewport} ${options.dotButton ? "h-[90%]" : "h-full"}`}
        ref={emblaRef}
      >
        <div
          className={`${options.adapt ? styles.carousel__container__adapt : styles.carousel__container} `}
        >
          {slides.map((child, index) => (
            <div
              key={index}
              className={
                options.adapt
                  ? styles.carousel__slide__adapt
                  : styles.carousel__slide
              }
            >
              <div className={`${styles.carousel__slide__number}`}>{child}</div>
            </div>
          ))}
        </div>
      </div>
      {options.arrowButtons && (
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}
      {options.dotButton && (
        <div className="flex w-full h-[10%] items-center justify-center gap-3">
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
