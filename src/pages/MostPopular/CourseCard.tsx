import React from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import DefaultImage from "@/assets/images/04.jpg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CourseDataTypes, PopularCourseType } from "@/shared/types/types";
import { Link } from "react-router-dom";

type CombinePropsType = {
  course: CourseDataTypes;
  selectedCompo: PopularCourseType | undefined;
};

export const CourseCard: React.FC<CombinePropsType> = ({
  course,
  selectedCompo,
}: CombinePropsType) => {
  const {
    // id,
    slug,
    imageUrl,
    title,
    except,
    rating,
    duration,
    lecture,
    category,
  } = course;
  if (!selectedCompo) return null;
  return (
    <>
      {(category?.name == selectedCompo?.name || selectedCompo?.name == 'All') && (
        <Link
          to={`course/${slug}`}
          className=" hover:text-blue-400 transition-all duration-150"
        >
          <Card className="rounded-[15px] overflow-hidden">
            <CardHeader className="w-full h-56">
              <img
                src={imageUrl ? imageUrl : DefaultImage}
                className="w-full h-full object-cover border-b"
              />
            </CardHeader>
            <CardContent className="mt-3 !pb-2">
              <div className="flex justify-between items-center">
                <button className=" p-1 bg-purple-100 rounded-[5px] hover:bg-purple-100 text-purple-500 text-sm">
                  {category?.name}
                </button>
                {/* <HeartIcon className="w-6 h-6" /> */}
              </div>
              <div className="mt-3">
                <h2 className=" font-[500] text-xl h-14">

                  {title}
                </h2>
                <p className="mt-3 opacity-70 text-sm">
                  {except}
                  {/* {description? description.length > 250
                  ? description?.slice(0, 250) + "..."
                  : description : } */}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) =>
                    index < rating ? (
                      <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <OutlineStar
                        key={index}
                        className="w-5 h-5 text-yellow-400"
                      />
                    )
                  )}
                <p className="ms-3 opacity-70">4 / 5</p>
              </div>
            </CardContent>
            <CardFooter className="mt-1">
              <hr className="w-full h-[2px] bg-gray-100" />
              <div className="mt-2 flex justify-between items-center text-sm">
                <div className="flex items-center ">
                  <ClockIcon className="w-5 h-5 text-red-400 me-1" />
                  <p className="opacity-80">{duration}</p>
                </div>
                <div className="flex items-center ">
                  <CalendarDaysIcon className="w-5 h-5 text-orange-400 me-1" />
                  <p className="opacity-80">{lecture} lectures</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      )}
    </>
  );
};

export default CourseCard;
