import React from "react";
import { TvIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/16/solid";
import { UserPlusIcon } from "@heroicons/react/16/solid";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { MiniSectionTypes } from "@/shared/types/types";

export const MiniSection: React.FC<{}> = () => {
  const sections: MiniSectionTypes[] = [
    {
      id: 1,
      title: "10K",
      desc: "Online Courses",
      card: "bg-cardOne",
      icon: <TvIcon className="w-16 h-16 text-yellow-400" />,
    },
    {
      id: 2,
      title: "200+",
      desc: "Expert Tutors",
      card: "bg-cardTwo",
      icon: <UserIcon className="w-16 h-16 -ms-8 text-gray-400" />,
    },
    {
      id: 3,
      title: "60K+",
      desc: "Online Students",
      card: "bg-cardThree",
      icon: <UserPlusIcon className="w-16 h-16 text-purple-400" />,
    },
    {
      id: 4,
      title: "6K+",
      desc: "Certified Courses",
      card: "bg-cardFour",
      icon: <CheckBadgeIcon className="w-14 h-14 text-cyan-400" />,
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-28 grid xl:grid-cols-4 sm:grid-cols-2 gap-4 ">
      {sections.map((section) => (
        <div
          className={`p-5 px-8 flex justify-center items-center rounded-xl ${section.card}`}
          key={section.id}
        >
          {section.icon}
          <div className=" ms-3">
            <p className="text-2xl text-primary font-bold ">{section.title}</p>
            <p>{section.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniSection;
