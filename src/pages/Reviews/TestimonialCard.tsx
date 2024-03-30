import React from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { TestimonialTypes } from "@/shared/types/types";

type propsType = {
  testimonial: TestimonialTypes;
};

export const TestimonialCard: React.FC<propsType> = ({
  testimonial,
}: propsType) => {
  const { imageUrl, name, except, rating } = testimonial;
  return (
    <div className={`p-4 `}>
      <div className=" w-24 h-24 rounded-full overflow-hidden mx-auto border ">
        <img src={imageUrl} className="w-full h-full object-cover " />
      </div>
      <div className="mt-4">
        <div className="text-center font-semibold opacity-80">{name}</div>
        <div className="text-sm text-center mt-3 opacity-70">{except}</div>
        <div className="flex justify-center mt-2">
          {Array(5)
            .fill(null)
            .map((_, index) =>
              index < rating ? (
                <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
              ) : (
                <OutlineStar key={index} className="w-5 h-5 text-yellow-400" />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
