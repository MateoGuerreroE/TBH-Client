"use client";
import Review, { ReviewProps } from "@/components/Review";
import { ScrollShadow } from "@heroui/react";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

type ReviewScrollProps = {
  reviews: ReviewProps[];
};

export default function ReviewScroll({ reviews }: ReviewScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <ScrollShadow hideScrollBar className="h-full w-full mb-8">
      <div className="flex flex-col gap-14" ref={ref}>
        {reviews.map((r, idx) => (
          <motion.div
            key={r.authorName}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: idx * 0.2, // stagger each item
            }}
          >
            <Review
              key={r.authorName}
              authorName={r.authorName}
              content={r.content}
            />
          </motion.div>
        ))}
      </div>
    </ScrollShadow>
  );
}
