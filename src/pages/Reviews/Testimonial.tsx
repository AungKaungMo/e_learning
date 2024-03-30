import React from "react";
// import { testimonialData } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { TestimonialTypes } from "@/shared/types/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMediaQuery from "@/hook/useMediaQuery";
import { useTestimonialQuery } from '@/redux/api/testimonialApiSlice';

export const Testimonial: React.FC<{}> = () => {
  const isTabletScreen = useMediaQuery("(max-width:960px)");
  const isBasis2Screen = useMediaQuery("(max-width:870px)");
  const isPhoneScreen = useMediaQuery("(max-width:550px)");
  const { data, isSuccess } = useTestimonialQuery();
  const testimonials : TestimonialTypes[] = data ? data.data : [];
  return (
    <div className={`${isTabletScreen ? "w-10/12" : "w-9/12"} mx-auto`}>
      <div className="text-center sm:text-5xl text-3xl font-bold">
        TESTIMONIALS{" "}
      </div>
      <div className="mt-12">
      {isSuccess && (
          <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className={`${
                  isPhoneScreen
                    ? "basis-full"
                    : isBasis2Screen
                    ? "basis-1/2"
                    : "basis-1/3"
                } `}
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`${isPhoneScreen && "ms-5"}`} />
          <CarouselNext className={`${isPhoneScreen && "me-5"}`} />
        </Carousel>
      )}
      {testimonials.length === 0 && <div className="text-center pb-8"> Upcoming testimonials .... </div>}
      </div>

      {/* {testimonialData.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))} */}
    </div>
  );
};

export default Testimonial;
