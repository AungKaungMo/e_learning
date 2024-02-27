import React from "react";
import AboutUs from "@/assets/images/about.jpg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ProgressAboutTypes } from "@/shared/types/types";
import useMediaQuery from "@/hook/useMediaQuery";
import Teams from "./Teams";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types/types";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const About: React.FC<propsType> = ({ setSelectedPage }: propsType) => {
  const checkLists: string[] = [
    "Setup and installation takes less time",
    "Professional and easy to use software",
    "Perfect for any device with pixel-perfect design",
    "Setup and installation too fast",
  ];

  const isTabletScreen = useMediaQuery("(max-width:1000px)");

  const progressLists: ProgressAboutTypes[] = [
    {
      id: 1,
      labelName: "Enterprise customer",
      percentage: 85,
    },
    {
      id: 2,
      labelName: "Accurate Course",
      percentage: 90,
    },
    {
      id: 3,
      labelName: "Languages",
      percentage: 75,
    },
    {
      id: 4,
      labelName: "Instructors",
      percentage: 95,
    },
  ];

  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className="mt-28 w-11/12 mx-auto"
      id="about"
    >
      <h1 className=" text-center sm:text-5xl text-4xl font-bold">About Us</h1>
      <div className=" text-center opacity-70 sm:w-8/12 mx-auto mt-4">
        How promotion excellent curiosity yet attempted happiness Gay prosperous
        impression had conviction For every delay death ask to style Me mean
        able my by in they Extremity now strangers contained.
      </div>

      <div
        className={`grid ${
          isTabletScreen ? "grid-cols-1" : "grid-cols-2"
        } gap-8 mt-16 `}
      >
        <div
          className={`${
            isTabletScreen ? "w-full" : "w-11/12"
          } h-[550px] rounded-xl overflow-hidden mt-8`}
        >
          <img
            src={AboutUs}
            alt="aboutus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`${isTabletScreen ? "w-full" : "w-10/12"}`}>
          <h1 className="font-bold text-2xl">
            35,000+ happy students joined with us to achieve their goals
          </h1>
          <div>
            <p className="mt-3 opacity-70">
              How promotion excellent curiosity yet attempted happiness Gay
              prosperous impression had conviction For every delay death ask to
              style Me mean able my by in they Extremity now strangers contained
              breakfast him discourse additions Sincerity collected contented
              led now perpetual extremely forfeited
            </p>
            <p className="mt-4 opacity-70">
              Happiness prosperous impression had conviction For every delay in
              they Extremity now strangers contained breakfast him discourse
              additions Sincerity collected contented led now perpetual
              extremely forfeited
            </p>
            <div className="mt-6">
              {checkLists.map((list) => (
                <div
                  className="flex items-center gap-2 mb-4 text-sm"
                  key={list}
                >
                  <CheckBadgeIcon className="w-6 h-6 text-green-400 " />
                  <p className=" opacity-70">{list}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {progressLists.map((list) => (
                <div key={list.id}>
                  <div className="flex justify-between items-center text-sm">
                    <h1 className="font-bold">{list.labelName}</h1>
                    <p className="opacity-75">{list.percentage} %</p>
                  </div>

                  <div className="mt-2 h-[5px] rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`bg-blue-400 h-[5px]`}
                      style={{ width: `${list.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Teams />
    </motion.div>
  );
};
export default About;
