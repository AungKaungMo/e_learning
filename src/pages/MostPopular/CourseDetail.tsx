import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import { BarChart } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import CardImage from "@/assets/images/04.jpg";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import useMediaQuery from "@/hook/useMediaQuery";
import PageLoading from "@/components/reuseable/PageLoading";
import { useGetCourseQuery } from '@/redux/api/courseApiSlice'
import { CourseDetailType } from "@/shared/types/types";

export const CourseDetail: React.FC<{}> = () => {
  const { slug } = useParams();

  const courseSlug: string | undefined = slug || '';

  const { data, isLoading, isSuccess } = useGetCourseQuery(courseSlug);

  const [course, setCourse] = useState<CourseDetailType | undefined>(data);
  useMemo(() => {
    setCourse(data?.data);
  }, [data])

  const formatDate = (dateValue: string) => {
    const date = new Date(dateValue);
    date.setDate(date.getDate() + 10);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  const isUnderTabletScreen = useMediaQuery("(max-width:900px)");
  const isMobileScreen = useMediaQuery("(max-width:550px)");
  return (
    <>
      {isLoading && <PageLoading />}
      {isSuccess && (
        < div className="font-heebo overflow-hidden" >
          <div className=" border-b-1 border-gray-200 shadow-xl py-6">
            <div className="w-11/12 mx-auto ">
              <Link to="/">
                <ArrowLeftIcon className="w-7 h-7 transition-all duration-150 hover:text-blue-500 cursor-pointer" />
              </Link>
            </div>
          </div>

          <div className=" bg-bgSecondary pb-10  ">
            <div className="w-11/12 mx-auto">
              <div className="pt-20 sm:w-9/12 w-full">
                <div className=" bg-blue-400 px-4 py-2 rounded-[6px] text-white font-bold text-center w-[200px]">
                  {course?.category?.name}
                </div>
                <div className="mt-5 sm:text-5xl text-3xl font-bold">
                  {course?.title}
                </div>
                <div className="mt-8 text-gray-500">
                  {course?.except}
                </div>
                <div className="mt-7 flex flex-wrap gap-5">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-6 h-6 text-yellow-400" />
                    <p className="font-bold">{course?.rating}/5</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="w-6 h-6 text-orange-400" />
                    <p className="font-bold">12k Enrolled</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="w-6 h-6 text-green-400" />
                    <p className="font-bold">{course?.skill}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-6 h-6 text-red-400" />
                    <p className="font-bold">Last updated {course ? new Date(course?.updatedAt).toLocaleDateString() : ''}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <GlobeAltIcon className="w-6 h-6 text-cyan-400" />
                    <p className="font-bold">English</p>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <div
            className={`w-11/12 mx-auto mt-16 flex ${isUnderTabletScreen ? "flex-col" : "flex-row"
              } gap-6`}
          >
            <div
              className=" basis-2/3 p-5  rounded-[6px] bg-background "
              style={{
                boxShadow: "0px 2px 11px 6px rgba(0,0,0,0.18)",
              }}
            >
              <h2 className="font-bold text-xl">Course Description</h2>
              <hr className="my-4" />
              <div className="text-gray-500">
                {course?.description}
              </div>
            </div>
            <div>
              <div
                className={`sm: ${isUnderTabletScreen ? "w-[350px] " : " basis-1/2"
                  } ${isMobileScreen && "w-full"} p-3 rounded-[6px]  `}
                style={{
                  boxShadow: "0px 2px 11px 6px rgba(0,0,0,0.18)",
                }}
              >
                <div className=" h-64 rounded-xl overflow-hidden">
                  <img src={CardImage} className="w-full h-full" />
                </div>
                <div className="mt-6">
                  {/* Course Includes */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700 font-bold">Lectures</p>
                      </div>
                      <p className="text-gray-500">{course?.lectures}</p>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <ClockIcon className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700 font-bold">Duration</p>
                      </div>
                      <p className="text-gray-500">{course?.duration}</p>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <BarChart className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700 font-bold">Skills</p>
                      </div>
                      <p className="text-gray-500">{course?.skill}</p>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <GlobeAltIcon className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700 font-bold">Language</p>
                      </div>
                      <p className="text-gray-500">English</p>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <UserIcon className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700 font-bold">Deadline</p>
                      </div>
                      <p className="text-gray-500">{course ? formatDate(course.createdAt) : ''}</p>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 24 24"
                          className="text-blue-500"
                        >
                          <path
                            fill="currentColor"
                            d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h8v5l3-3l3 3v-5h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4m8 2l3 2l3-2v3.5l3 1.5l-3 1.5V15l-3-2l-3 2v-3.5L9 10l3-1.5V5M4 5h5v2H4V5m0 4h3v2H4V9m0 4h5v2H4v-2Z"
                          ></path>
                        </svg>
                        <p className="text-gray-700 font-bold">Certificate</p>
                      </div>
                      <p className="text-gray-500">Yes</p>
                    </div>
                  </div>

                  <div className=" flex justify-between items-center mt-4">
                    <h3 className="font-bold text-xl">Price - {course?.price} MMK</h3>
                    <button className="px-4 py-2 bg-blue-500 transition-all duration-150 hover:bg-blue-300 text-white rounded-[6px]">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-bgSecondary">
            <Footer />
          </div>
        </div >
      )}
    </>
  )

};

export default CourseDetail;
