import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import { BarChart } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import CardImage from "@/assets/images/04.jpg";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import useMediaQuery from "@/hook/useMediaQuery";
import PageLoading from "@/components/reuseable/PageLoading";

export const CourseDetail: React.FC<{}> = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 3000);
  }, []);

  const learningDetail: string[] = [
    "Digital marketing course introduction",
    "Customer Life cycle",
    "What is Search engine optimization(SEO)",
    "Facebook ADS",
    "Facebook Messenger Chatbot",
    "Search engine optimization tools",
    "Why SEO",
    "URL Structure",
    "Featured Snippet",
    "SEO tips and tricks",
    "Google tag manager",
  ];

  const isUnderTabletScreen = useMediaQuery("(max-width:900px)");
  const isMobileScreen = useMediaQuery("(max-width:550px)");
  const { id } = useParams();
  return pageLoading ? (
    <PageLoading />
  ) : (
    <div className="font-heebo overflow-hidden">
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
              Digital Marketing
            </div>
            <div className="mt-5 sm:text-5xl text-3xl font-bold">
              The Complete Digital Marketing Course -12 Courses in 1
            </div>
            <div className="mt-8 text-gray-500">
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do.
            </div>
            <div className="mt-7 flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <p className="font-bold">4.5/5.0</p>
              </div>
              <div className="flex items-center gap-1">
                <UserIcon className="w-6 h-6 text-orange-400" />
                <p className="font-bold">12k Enrolled</p>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="w-6 h-6 text-green-400" />
                <p className="font-bold">All level</p>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-6 h-6 text-red-400" />
                <p className="font-bold">Last updated 09/2021</p>
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
        className={`w-11/12 mx-auto mt-16 flex ${
          isUnderTabletScreen ? "flex-col" : "flex-row"
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
            <p>
              In this practical hands-on training, you’re going to learn to
              become a digital marketing expert with this ultimate course bundle
              that includes 12 digital marketing courses in 1!
            </p>
            <p className="mt-3">
              If you wish to find out the skills that should be covered in a
              basic digital marketing course syllabus in India or anywhere
              around the world, then reading this blog will help. Before we
              delve into the advanced digital marketing course syllabus, let’s
              look at the scope of digital marketing and what the future holds.
            </p>
            <p className="mt-3">
              We focus a great deal on the understanding of behavioral
              psychology and influence triggers which are crucial for becoming a
              well rounded Digital Marketer. We understand that theory is
              important to build a solid foundation, we understand that theory
              alone isn’t going to get the job done so that’s why this course is
              packed with practical hands-on examples that you can follow step
              by step.
            </p>
            <div className="mt-3">
              <h3 className="text-2xl font-bold text-black">
                What you’ll learn
              </h3>
              {learningDetail.map((learning) => (
                <div className="mt-2 flex gap-2" key={learning}>
                  <CheckCircleIcon className="w-5 h-5 text-blue-500" />
                  {learning}
                </div>
              ))}
              <div className="mt-4">
                As it so contrasted oh estimating instrument. Size like body
                someone had. Are conduct viewing boy minutes warrant the
                expense? Tolerably behavior may admit daughters offending her
                ask own. Praise effect wishes change way and any wanted. Lively
                use looked latter regard had. Do he it part more last in.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`sm: ${
              isUnderTabletScreen ? "w-[350px] " : " basis-1/2"
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
                  <p className="text-gray-500">30</p>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-2">
                    <ClockIcon className="w-6 h-6 text-blue-500" />
                    <p className="text-gray-700 font-bold">Duration</p>
                  </div>
                  <p className="text-gray-500">4h 50m</p>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-2">
                    <BarChart className="w-6 h-6 text-blue-500" />
                    <p className="text-gray-700 font-bold">Skills</p>
                  </div>
                  <p className="text-gray-500">Intermediate</p>
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
                  <p className="text-gray-500">Nov 30 2021</p>
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
                <h3 className="font-bold text-xl">Price - $150</h3>
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
    </div>
  );
};

export default CourseDetail;
