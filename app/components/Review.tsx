import Image from "next/image";
import React from "react";

export type ReviewProps = {
  authorName: string;
  authorImage?: string;
  content?: string;
  rating: number;
  date: string;
  location: string;
};

//! TESTING, REMOVE:
const sample =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, alias! At saepe fuga minus culpa aspernatur, eaque voluptatibus autem eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

export default function Review({
  authorName,
  content = sample,
  rating,
}: ReviewProps) {
  console.log(rating);
  return (
    <div className="w-full flex gap-8 h-full max-h-32">
      <Image
        className="rounded-full h-24 w-24 sm:w-32 sm:h-32"
        width={24}
        height={24}
        alt="anonym_avatar"
        src="anonym-avatar.svg"
      />
      <div className="flex flex-col flex-1 md:gap-2">
        <p className="font-semibold font-poppins md:text-xl">{authorName}</p>
        <div className="flex flex-col font-poppins flex-1 max-h-[2/3] overflow-hidden">
          <div className="flex gap-3 items-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item}>
                <Image
                  src={
                    rating >= item ? "/icons/star.svg" : "/icons/empty-star.svg"
                  }
                  alt={`star_${item}`}
                  className="h-full"
                  height={22}
                  width={22}
                />
              </div>
            ))}
          </div>
          <p className="text-justify text-sm lg:text-medium">{content}</p>
        </div>
      </div>
    </div>
  );
}
