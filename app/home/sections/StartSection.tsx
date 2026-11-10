"use client";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import Carousel from "@/app/components/shared/Carousel/Carousel";
import { useAppStore, useNPStore } from "@/app/context/zustand";
import { sampleHomeData } from "@/test/sampleData";
import Image from "next/image";

export default function StartSection() {
  const { addToCart } = useNPStore();
  const {} = useAppStore();

  return (
    <section className="h-[550px] md:h-[600px] lg:h-[640px] 2xl:h-[850px] w-full bg-gradient-to-tl from-[#FFEAE2] to-[#68c2dd] flex justify-center pt-14 relative">
      <div className="flex flex-col items-center justify-center w-full h-full md:p-8 md:px-12 p-4 max-w-[1500px] overflow-hidden">
        <div className="h-full w-full flex items-center justify-center">
          <Carousel options={{ loop: true, autoPlay: true, dotButton: true }}>
            {sampleHomeData.map((data, index) => (
              <div
                className="mb-5 flex h-full items-center justify-center flex-col-reverse md:flex-row md:gap-7 lg:gap-24 z-0"
                key={index}
              >
                <div className="flex flex-col max-w-full md:max-w-[300px] lg:max-w-[400px] gap-5">
                  <h3 className="font-poppins text-2xl md:text-3xl lg:text-5xl font-semibold md:max-w-[250px] text-center self-center lg:max-w-max">
                    {data.title}
                  </h3>
                  <div className="flex flex-col gap-2 lg:flex-row justify-evenly font-poppins w-full">
                    {data.buttons.map((button, index) => (
                      <ButtonComponent
                        action={() => {
                          if (data.isProduct) {
                            addToCart({ product: data.product, amount: 1 });
                          }
                        }}
                        label={button.text}
                        key={index}
                        visualOpts={{
                          color: button.type,
                          bold: button.type === "primary",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-[280px] md:h-full aspect-square flex items-center justify-center">
                  <Image
                    src={
                      data.isProduct ? data.product.productImages[0].url : ""
                    }
                    alt="product_image"
                    width={800}
                    height={800}
                    className="w-full md:w-[80%] lg:w-full max-w-[650px] aspect-square object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
