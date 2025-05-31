"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import React, { useRef } from "react";
import morp from "../shared/styles/Neuromorphism.module.css";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { ReviewProps } from "../static/Review";

type WrappedMainReviewProps = {
  review: ReviewProps;
};

export default function WrappedMainReview({ review }: WrappedMainReviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Card
        className={`w-[80%] h-[80%] bg-white/20 border-0 font-poppins ${morp.neuromorph_card}`}
        radius="sm"
        shadow="lg"
        isBlurred={true}
        ref={ref}
      >
        <motion.div
          className="w-full h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.4,
          }}
        >
          <div className="absolute right-0 top-0 p-7 opacity-30">
            <p>{review.date}</p>
          </div>
          <CardHeader className="flex flex-row gap-5 m-5 pt-7 relative">
            <Image
              className="rounded-full h-24 w-24"
              width={24}
              height={24}
              alt="anonym_avatar"
              src="anonym-avatar.svg"
            />
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-poppins text-xl xl:text-2xl font-bold">
                {review.authorName}
              </h3>
              <div className="flex flex-row gap-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item}>
                    <Image
                      src={
                        review.rating >= item
                          ? "/icons/star.svg"
                          : "/icons/empty-star.svg"
                      }
                      alt={`star_${item}`}
                      className="h-full"
                      height={22}
                      width={22}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-10 py-2 flex flex-col gap-5">
            <p className="text-lg">{review.content}</p>
          </CardBody>
          <CardFooter className="flex flex-row justify-end gap-5 opacity-40 px-7 mb-2">
            <p>{review.location}</p>
          </CardFooter>
        </motion.div>
      </Card>
    </>
  );
}
