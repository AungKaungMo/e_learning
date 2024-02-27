import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import User1 from "@/assets/images/usr1.jpg";
import User2 from "@/assets/images/usr2.jpg";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { reviewersData } from "@/data/reviewers";
import useMediaQuery from "@/hook/useMediaQuery";
import { SelectedPage } from "@/shared/types/types";
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Reviews: React.FC<propsType> = ({
  setSelectedPage,
}: propsType) => {
  const isTabletScreen = useMediaQuery("(max-width: 1200px)");
  const isUnderTabletScreen = useMediaQuery("(max-width: 760px");
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}
      id="reviews"
      className=" mt-16"
    >
      <Testimonial />
      <div className="mt-10 bg-bgSecondary p-4  pb-20">
        <div
          className={`flex w-11/12 mx-auto ${
            isTabletScreen ? "flex-col" : " flex-row-reverse"
          }`}
        >
          <div
            className={`${
              isTabletScreen ? "text-center mx-auto mt-10" : "ms-10 mt-[16%]"
            }`}
          >
            <h1
              className={`${
                isUnderTabletScreen ? "text-5xl" : "text-4xl"
              } font-bold`}
            >
              Some valuable feedback from our students
            </h1>
            <p className="opacity-70 mt-4">
              Supposing so be resolving breakfast am or perfectly. It drew a
              hill from me. Valley by oh twenty direct me so. Departure
              defective arranging rapturous did believe him all had supported.
              Family months lasted simple set nature vulgar him. Picture for
              attempt joy excited ten carried manners talking how.
            </p>
            <button className=" bg-blue-400 rounded-[5px] p-2 text-white font-bold mt-6 transition-all duration-150 border-2 border-blue-400 hover:text-blue-400 hover:bg-transparent">
              View Reviews
            </button>
          </div>

          <div className="relative">
            <div className=" mt-12 relative">
              <div className=" w-56 h-56 bg-pink-200 rounded-full absolute -left-24 "></div>
            </div>

            <div
              className={`flex ${
                isUnderTabletScreen ? "flex-col" : "flex-row"
              }`}
            >
              <div className="z-20 mt-24">
                {/* <div> */}
                <Card
                  className={`${
                    isTabletScreen ? "w-full" : "w-[350px]"
                  } bg-background shadow-xl rounded-[8px] `}
                >
                  <CardHeader className="w-20 h-20 rounded-full mx-auto my-5 overflow-hidden">
                    <img src={User1} className="w-full h-full object-cover" />
                  </CardHeader>
                  <CardContent className="text-center opacity-70">
                    <p className="">
                      &#x275D; Moonlight newspaper up its enjoyment agreeable
                      depending. Timed voice share led him to widen noisy young.
                      At weddings believed laughing &#x275E;
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex justify-center items-center">
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <StarIcon
                            key={index}
                            className="w-5 h-5 text-yellow-400"
                          />
                        ))}
                      <OutlineStar className="w-5 h-5 text-yellow-400" />
                    </div>
                    <p className="font-bold text-center my-2">Carolyn Ortiz</p>
                  </CardFooter>
                </Card>
                {/* </div> */}
              </div>

              <div className={`${!isUnderTabletScreen && "ms-10"}`}>
                <div className={`mb-10 ${isUnderTabletScreen ? "hidden" : ""}`}>
                  <Card className="w-[250px] relative p-4 rounded-[8px] bg-background shadow-xl">
                    <div className="absolute -top-5 -right-5 bg-yellow-400 p-4 rounded-full">
                      <ShieldCheckIcon className="w-6 h-6" />
                    </div>
                    <CardHeader>
                      <p className=" font-bold">100+ Verified Mentors</p>
                    </CardHeader>
                    <CardContent>
                      {reviewersData.map((reviewer) => (
                        <div className="flex mt-4" key={reviewer.id}>
                          <div className=" mb-3 w-10 h-10 rounded-[6px] overflow-hidden">
                            <img
                              src={reviewer.image}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ms-2">
                            <p className="font-bold ">{reviewer.name}</p>
                            <p className="opacity-70">{reviewer.position}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div className="">
                  <Card
                    className={`relative p-4 rounded-[8px] bg-background shadow-xl ${
                      isUnderTabletScreen ? "w-full mt-8" : "w-[300px] "
                    } `}
                  >
                    <CardHeader className="w-20 h-20 rounded-full mx-auto mt-5 overflow-hidden">
                      <img src={User2} className="w-full h-full object-cover" />
                    </CardHeader>
                    <CardContent className="text-center opacity-70">
                      <p className="mt-3">
                        &#x275D; At wedding believed laughing although the
                        Moonlight newspaper up its enjoyment agreeable depending
                        &#x275E;
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex justify-center items-center">
                        {Array(5)
                          .fill(null)
                          .map((_, index) => (
                            <StarIcon
                              key={index}
                              className="w-5 h-5 text-yellow-400"
                            />
                          ))}
                        <OutlineStar className="w-5 h-5 text-yellow-400" />
                      </div>
                      <p className="font-bold text-center mt-2">
                        Dennis Barrett
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
