"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import React, { useRef } from "react";
import neuro_styles from "@/components/styles/Neuromorphism.module.css";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

export default function WrappedMainReview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Card
        className={`w-[80%] h-[80%] bg-white/20 border-0 font-poppins ${neuro_styles.neuromorph_card}`}
        radius="sm"
        shadow="lg"
        isBlurred={true}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.4,
          }}
        >
          <div className="absolute right-0 top-0 p-7 opacity-30">
            <p>24 Mar. 2025</p>
          </div>
          <CardHeader className="flex flex-row gap-5 m-5 relative">
            <div className="bg-black rounded-full h-24 w-24"></div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-poppins text-xl xl:text-2xl font-bold">
                Andrés Suarez
              </h3>
              <div className="flex flex-row gap-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item}>
                    <Image
                      src="/icons/empty-star.svg"
                      alt="empty_star"
                      className="w-5 h-5 xl:h-7 xl:w-7"
                      height={30}
                      width={30}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-10 flex flex-col gap-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              consequuntur aperiam quasi amet quidem. Voluptas laborum excepturi
              obcaecati quibusdam? Odit alias cum quidem fugiat magnam labore
              distinctio, eaque reprehenderit cupiditate!
            </p>
            <p className="hidden xl:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              eaque cupiditate :)
            </p>
          </CardBody>
          <CardFooter className="flex flex-row justify-end gap-5 opacity-40 px-7">
            <p>Bogotá</p>
          </CardFooter>
        </motion.div>
      </Card>
    </>
  );
}
