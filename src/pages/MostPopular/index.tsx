import React, { useEffect, useState } from "react";
import { PopularCourseType } from "@/shared/types/types";
import CourseCard from "./CourseCard";
import useMediaQuery from "@/hook/useMediaQuery";
import { SelectedPage } from "@/shared/types/types";
import { motion } from "framer-motion";
import { CourseDataTypes } from "@/shared/types/types";
import { useCategoriesQuery } from "@/redux/api/categoryApiSlice";

import Link from "./Link";

import { useCourseQuery } from "@/redux/api/courseApiSlice";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Courses: React.FC<propsType> = ({
  setSelectedPage,
}: propsType) => {
  const isTabletScreen = useMediaQuery("(max-width:980px)");
  const isUnderTabletScreen = useMediaQuery("(max-width:600px)");

  const categories = useCategoriesQuery();
  const { data, isSuccess } = useCourseQuery();
  const courses: CourseDataTypes[] = data ? data.data : [];

  const [menus, setMenus] = useState<PopularCourseType[]>([{ id: 0, name: 'All' }])


  // setMenus(menu)

  const [selectedCompo, setSelectedCompo] = useState<
    PopularCourseType | undefined
  >();

  const [filteringCourse, setFilteringCourse] = useState<CourseDataTypes[] | undefined>([]);

  useEffect(() => {
    if (selectedCompo?.name == 'All') {
      setFilteringCourse(courses);
    } else {
      const filterCourse = courses.filter((course) => course.category.name === selectedCompo?.name);
      setFilteringCourse(filterCourse);
    }
  }, [selectedCompo, courses])

  useEffect(() => {
    const menu = categories.data
      ? categories.data.data
      : [];
    setMenus(menus.concat(menu));
    setSelectedCompo(menus[0]);
  }, [categories]);


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
          {categories.isSuccess &&
            menus.map((menu) => (
              <Link
                key={menu.id}
                compo={menu}
                selectedCompo={selectedCompo}
                setSelectedCompo={setSelectedCompo}
              />
            ))}
        </div>
      </div>

      {/* Course Card */}

      {filteringCourse?.length === 0 && (
        <div className="text-center pt-16">Upcoming Courses ....</div>
      )}
      <div
        className={`grid xl:grid-cols-4 gap-7 mt-16 relative ${isUnderTabletScreen
          ? "grid-cols-1"
          : isTabletScreen
            ? "grid-cols-2"
            : "grid-cols-3"
          }`}
      >
        {isSuccess &&
          courses.map((course) => (
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
