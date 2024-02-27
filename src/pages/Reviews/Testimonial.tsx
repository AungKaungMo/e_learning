import React from "react";
import { testimonialData } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMediaQuery from "@/hook/useMediaQuery";

export const Testimonial: React.FC<{}> = () => {
  const isTabletScreen = useMediaQuery("(max-width:960px)");
  const isBasis2Screen = useMediaQuery("(max-width:870px)");
  const isPhoneScreen = useMediaQuery("(max-width:550px)");
  return (
    <div className={`${isTabletScreen ? "w-10/12" : "w-9/12"} mx-auto`}>
      <div className="text-center sm:text-5xl text-3xl font-bold">
        TESTIMONIALS{" "}
      </div>
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {testimonialData.map((testimonial) => (
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
      </div>

      {/* {testimonialData.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))} */}
    </div>
  );
};

export default Testimonial;
