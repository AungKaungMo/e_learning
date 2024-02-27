import React, { useState } from "react";
import { PopularCourseTypes } from "@/shared/types/types";
import CourseCard from "./CourseCard";
import { coursesData } from "@/data/courses";
import useMediaQuery from "@/hook/useMediaQuery";
import { SelectedPage } from "@/shared/types/types";
import { motion } from "framer-motion";

import Link from "./Link";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Courses: React.FC<propsType> = ({
  setSelectedPage,
}: propsType) => {
  const [selectedCompo, setSelectedCompo] = useState<PopularCourseTypes>(
    PopularCourseTypes.WebDesign
  );

  const isTabletScreen = useMediaQuery("(max-width:980px)");
  const isUnderTabletScreen = useMediaQuery("(max-width:600px)");

  const menus: string[] = [
    "Web Design",
    "Development",
    "Graphic Design",
    "Ui/Ux Design",
  ];
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Courses)}
      className="mt-24 w-11/12 mx-auto"
      id="courses"
    >
      <div className="text-center">
        <h1 className="sm:text-5xl text-3xl font-bold">Most Popular Courses</h1>
        <p className="mt-3 opacity-70 ">
          Choose from hundreds of courses from specialist organizations
        </p>
      </div>

      <div className=" bg-bgSecondary rounded-[5px] p-3 mt-8">
        <div className="flex justify-center flex-wrap items-center lg:gap-20 gap-10">
          {menus.map((menu) => (
            <Link
              key={menu}
              compo={menu}
              selectedCompo={selectedCompo}
              setSelectedCompo={setSelectedCompo}
            />
          ))}
        </div>
      </div>

      {/* Course Card */}

      <div
        className={`grid xl:grid-cols-4 gap-7 mt-16 ${
          isUnderTabletScreen
            ? "grid-cols-1"
            : isTabletScreen
            ? "grid-cols-2"
            : "grid-cols-3"
        }`}
      >
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            selectedCompo={selectedCompo}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
